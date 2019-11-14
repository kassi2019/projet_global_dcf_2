
<template>
    <div>

        <notifications />

        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste Document PTPA PPM</h5>
                            <div align="right">
                                Search: <input type="text" v-model="search">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code </th>
                                    <th>Fichier PTBA</th>
                                    <th>Fichier PPM</th>
                                    <th>Unite Administrative</th>
                                    <th>Exercice</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in titreFiltres" :key="item.id">

                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">
                                        <a v-if="item.fichier_ptba" :href="item.fichier_ptba" class="btn btn-default" target="_blank">
                                            <span class=""><i class="icon-book"></i></span>
                                        </a>
                                    </td>
                                    <td @dblclick="afficherModalModifierTitre(index)">
                                        <a v-if="item.fichier_ptba" :href="item.fichier_ppm" class="btn btn-default" target="_blank">
                                            <span class=""><i class="icon-book"></i></span>
                                        </a>
                                    </td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.exerciceBudgetaire.annee || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerDocumentPTBAPPM(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>

                                    </td>
                                </tr>
                                <tr v-if="titreFiltres.length==0" align="right">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"
        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter </h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">L'unite administrative:</label>
                        <div class="controls">
                            <select v-model="formData.unite_administrative_id">
                                <option></option>
                                <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                    {{item.libelle}}
                                </option>

                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Exercice budgetaire:</label>
                        <div class="controls">
                            <select v-model="formData.exercice_budgetaire_id">
                                <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                    {{item.annee}}
                                </option>

                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier PTBA :</label>
                        <div class="controls">
                            <input  type="file" @change="OnchangeFichier"  class="" placeholder="Last name">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier PPM</label>
                        <div class="controls">
                            <input type="file" @change="OnchangeImage"  class=" form-control" placeholder="Enter specimen">

                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
                   href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

        <!----- fin modal  ajouter  ---->
        <!----- modifier modal debut  ---->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">L'unite administrative:</label>
                        <div class="controls" v-if="editTitre">
                            <select v-model="editTitre.uniteAdmin.id">
                                <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                    {{item.libelle}}
                                </option>

                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Exercice budgetaire:</label>
                        <div class="controls" v-if="editTitre">
                            <select v-model="editTitre.exerciceBudgetaire.id">
                                <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                    {{item.annee}}
                                </option>

                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier PTBA :</label>
                        <div class="controls">
                            <input  type="file" @change="OnchangeFichier"  class="" placeholder="Last name">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier PPM</label>
                        <div class="controls">
                            <input type="file" @change="OnchangeImage"  class=" form-control" placeholder="Enter specimen">

                        </div>
                    </div>



                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifier()" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <!----- fin modifier modal  ---->







    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                    // {
                    //     name: 'alertMe',
                    //     icon: 'add_alert'
                    // }
                ],
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                search:"",
                liste:[],
                formData : {
                    code: "",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:""
                },

                editTitre:""

            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['document_ptba_ppm',"document_pyba_ppm_personnalise"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.document_pyba_ppm_personnalise.filter((item) => {

                       return item.code.toLowerCase().includes(searchTerm)



                    }
                )

            },
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getDocumentPTBAPPM',"ajouterDocumentPTBAPPM","supprimerDocumentPTBAPPM","modifierDocumentPTBAPPM"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                const formData = new FormData();
                formData.append('fichier_ppm', this.selectedImage, this.selectedImage.name);
                formData.append('fichier_ptba', this.selectedFile, this.selectedFile.name);
                formData.append('code', this.formData.code);
                formData.append('exercice_budgetaire_id', this.formData.exercice_budgetaire_id);
                formData.append('unite_administrative_id', this.formData.unite_administrative_id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterDocumentPTBAPPM(formData,config)
                this.formData = {
                        code: "",
                        exercice_budgetaire_id:"",
                        unite_administrative_id:""
                }

            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.document_pyba_ppm_personnalise[index];

            },
            modifier(){

                const formData = new FormData();
                if (this.selectedImage!="") {
                    formData.append('fichier_ppm', this.selectedImage, this.selectedImage.name);
                }
                 if ( this.selectedFile!=""){
                     formData.append('fichier_ptba', this.selectedFile, this.selectedFile.name);
                 }
                formData.append('code', this.editTitre.code);
                formData.append('exercice_budgetaire_id', this.editTitre.exerciceBudgetaire.id);
                formData.append('unite_administrative_id', this.editTitre.uniteAdmin.id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }

                this.modifierEtapeMarche(formData,config)
                //this.getFonctions()
            }
            ,
            OnchangeImage(e) {
                const files = e.target.files;
                this.selectedImage = event.target.files[0];
                Array.from(files).forEach(file => this.addImage(file));
            },
            addImage(file) {

                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            addActNomination () {
                const formData = new FormData();
                formData.append('fichier_ppm', this.selectedImage, this.selectedImage.name);
                formData.append('fichier_ptba', this.selectedFile, this.selectedFile.name);
                formData.append('code', this.date_arrivee_act_nomination);
                formData.append('exercice_budgetaire_id', this.exercice_budgetaire_id);
                formData.append('unite_administrative_id', this.unite_administrative_id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierActeurDepense(formData,config)

            },
        }
    };
</script>

