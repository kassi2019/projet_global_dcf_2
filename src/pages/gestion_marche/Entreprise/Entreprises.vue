
<template>
    <div>

        <div class="container-fluid">
            <hr>

            <div class="widget-box">
                <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab1">LISTE DE TOUTE LES ENTREPRISES</a></li>
                        <li><a data-toggle="tab" href="#tab2">ENTREPRISE NON SANCTIONNER</a></li>
                        <li><a data-toggle="tab" href="#tab3">ENTREPRISE SANCTIONNER</a></li>
                    </ul>
                </div>
                <div class="widget-content tab-content">
                    <div id="tab1" class="tab-pane active">
                        <div class="row-fluid" style="margin: 0px !important;">
                            <div class="span12">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Toute les entreprises</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search">

                                        </div>

                                    </div>

                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Raison social </th>
                                                <th>Compte contribuable</th>
                                                <th>Registe commerce </th>
                                                <th>Secteur activite</th>
                                                <th>Pays </th>
                                                <th>Ville</th>
                                                <th>Email </th>
                                                <th>Telephone</th>
                                                <th>Banque</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(item, index) in titreFiltres" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.raison_sociale || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_cc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.numero_rc || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.secteur_activite.libelle || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.pays || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.ville || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.email || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.telephone || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.banque || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <button @click.prevent="supprimerEntreprise(item.id)"  class="btn btn-danger ">
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
                    <div id="tab2" class="tab-pane">
                        ll1
                    </div>
                    <div id="tab3" class="tab-pane">
                       lll1
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
this.getEntreprise()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['entreprises',"secteur_activites"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.entreprises.filter((item) => {

                        return item.raison_sociale.toLowerCase().includes(searchTerm)
                            || item.numero_rc.toLowerCase().includes(searchTerm)
                            || item.numero_cc.toLowerCase().includes(searchTerm)
                            || item.ville.toLowerCase().includes(searchTerm)
                            || item.pays.toLowerCase().includes(searchTerm)
                            || item.telephone.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)
                            || item.banque.toLowerCase().includes(searchTerm)


                    }
                )

            }
        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterEntreprise' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterEntreprise(this.formData)

            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$router.push({ name: 'EditeEntreprise', params: { id: index } })
            },
            modifier(){
                this.modifierEntreprise(this.editTitre)
                //this.getFonctions()
            },




        }
    };
</script>

