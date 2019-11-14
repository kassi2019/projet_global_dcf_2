
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
                            <h5>Ajouter une nouvelle entreprise</h5>
                        </div>

                        <div class="widget-content nopadding">
                            <form action="#" method="get" class="form-horizontal" @submit.prevent="ajouterTitreLocal" enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">

                                                <div class="control-group">
                                                    <label class="control-label">Raison social :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Raison social" v-model="formData.raison_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Sigle :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Sigle" v-model="formData.sigle">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Secteur activite</label>
                                                    <div class="controls">
                                                        <select v-model="formData.secteur_activite_id">
                                                            <option></option>
                                                            <option v-for="item in secteur_activites" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero compte contribuable :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero compte contribuable" v-model="formData.numero_cc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero de registe de commerce:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero de registe de commerce" v-model="formData.numero_rc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Capitale social:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Capitale social" v-model="formData.capitale_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Banque:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Banque"  v-model="formData.banque">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Telephone:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Telephone" v-model="formData.telephone">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Email:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Email" v-model="formData.email">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Pays:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Pays" v-model="formData.pays">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Ville" v-model="formData.ville">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Adresse:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11"  placeholder="Adresse" v-model="formData.adresse">
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Form juridique:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.forme_juridique">
                                                            <option></option>
                                                            <option value="SNC">Société en Nom Collectif</option>
                                                            <option value="SCS">Société en Commandite Simple</option>
                                                            <option value="SP">Société en Participation</option>
                                                            <option value="SARL">Société à Responsabilité Limitée </option>
                                                            <option value="SRLU">Société à Responsabilité Limitée Unipersonnelle</option>
                                                            <option value="SA">Société Anonyme</option>
                                                            <option value="SAU">Société Anonyme Unipersonnelle </option>
                                                            <option value="GIE">Groupement d’intérêt Economique</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Centre import :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Centre import" v-model="formData.centre_impot">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Service assiette :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Service assiette" v-model="formData.service_assiette_impot">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Imatriculation CNPS:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Imatriculation CNPS" v-model="formData.immatriculation_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date enregistrement CNPS :</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11" placeholder="Date enregistrement CNPS" v-model="formData.date_enregistrement_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur Permanent :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur Permanant" v-model="formData.nbre_travailleur_permanent">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur horaire :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur horaire" v-model="formData.nbre_travailleur_horaire">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur journalier :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur journalier" v-model="formData.nbre_travailleur_journalier">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="submit" class="btn btn-success">Enregistrement</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"

        ></fab>-->

        <!----- ajouter modal   ---->









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
                    numero_cc: "",
                    numero_rc: "",
                    raison_sociale: "",
                    sigle: "",
                    secteur_activite_id: "",
                    activite_principale: "",
                    pays: "",
                    ville: "",
                    forme_juridique:"",
                    centre_impot:"",
                    regime_imposition:"",
                    capitale_sociale:"",
                    immatriculation_cnps:"",
                    date_enregistrement_cnps:"",
                    telephone:"",
                    email:"",
                    nbre_travailleur_permanent:"",
                    nbre_travailleur_journalier:"",
                    service_assiette_impot:"",
                    adresse:"",
                    banque:""
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
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.entreprises.filter((item) => {

                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)


                    }
                )

            }
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterEntreprise(this.formData)

                this.$router.push({ name: 'Entreprise' })
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.entreprises[index];
            },
            modifier(){
                this.modifierEntreprise(this.editTitre)
                //this.getFonctions()
            }
        }
    };
</script>

