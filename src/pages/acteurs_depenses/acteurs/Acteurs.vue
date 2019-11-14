<template>
    <div id="">
        <notifications />
        <div class="quick-actions_homepage span12"  >
            <ul class="quick-actions" style="margin: 0px !important;">
                <li class="bg_lb">
                    <a href="#">
                        <i class="icon-dashboard"></i> <span class="label label-important">{{totalActeurDepense}}</span> Total acteur depense
                    </a>
                </li>
                <li class="bg_lg">
                    <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{totalActeurEnctivite}}</span> Total acteur en activité
                    </a>
                </li>
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{totalActeurAccredite}}</span> Total acteur accredité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                    Taux acteurs acredité
                </a> </li>
            </ul>
        </div>

        <div class="container-fluid">

            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab10">Tous les acteurs depense</a></li>
                              <!--  <li class=""><a data-toggle="tab" href="#tab20">Liste des acteurs depense en activité</a></li>-->
                               <!-- <li class=""><a data-toggle="tab" href="#tab30">Acteurs non actif</a></li>-->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab10" class="tab-pane active">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste de tous les acteurs depenses</h5>
                                        <div align="right">
                                            Search: <input type="text">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th>Unite administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(item, index) in personnaliseActeurDepense" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.date_naissance || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab20" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste des acteurs</h5>
                                        <div align="right">
                                            Search: <input type="text">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th>Unite administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="(item, index) in personnaliseActeurDepense" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.date_naissance | moment("DD/MM/YYYY") || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(index)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab30" class="tab-pane">
                                <p>And is full of waffle to It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. </p>
                                <img src="img/demo/demo-image3.jpg" alt="demo-image"></div>
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
                <a @click.prevent="modifierTitre(editTitre)" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

    </div>

</template>

<script>
    import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
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
                liste:[],
                formData : {
                    matricule: "",
                    nom: "",
                    prenom: "",
                    sexe: "",
                    numero_cni: "",
                    numero_passeport: "",
                    date_naissance: "",
                    nom_pere: "",
                    nom_mere: "",
                    date_debut_contrat:"",
                    code:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
        //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterActeur' })
            },

            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
                this.getNbrActeurAcrediteTaux();
            },
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },
            formatageSomme:formatageSomme,
        }
    };
</script>

