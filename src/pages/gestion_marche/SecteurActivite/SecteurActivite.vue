
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
                            <h5>Liste secteur activite</h5>
                            <div align="right">
                                Search: <input type="text" v-model="search">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code </th>
                                    <th>Libelle</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in titreFiltres" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.libelle || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerSecteurActivite(item.id)"  class="btn btn-danger ">
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
                            <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
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
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
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
                ],
                search:"",
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['secteur_activites']),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.secteur_activites.filter((item) => {

                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)


                    }
                )

            }
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getSecteurActivite',"ajouterSecteurActivite","supprimerSecteurActivite","modifierSecteurActivite"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterSecteurActivite(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.secteur_activites[index];
            },
            modifier(){
                this.modifierSecteurActivite(this.editTitre)
                //this.getFonctions()
            }
        }
    };
</script>

