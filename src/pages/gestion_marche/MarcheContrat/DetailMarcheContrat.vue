<template>
    <div>
        <notifications />
        <div class="quick-actions_homepage" style="margin-left:-100px; margin-right: auto; left: 0;right: 0;">
            <ul class="quick-actions">
                <li class="bg_lo span3"  v-if="decision_marche_cf.decision== '3'"> <a href="#"> <i class="icon-remove"></i> Le marché a ete réjéte</a> </li>
                <li class="bg_lg span3" v-else-if="decision_marche_cf.decision== '1'"> <a href="#"> <i class="icon-ok"></i> Le marché a ete valider</a> </li>
                <li class="bg_ly span3" v-else-if="decision_marche_cf.decision== '2'"> <a href="#"> <i class="icon-pencil"></i> Le marché a ete difére </a> </li>

                <li class="bg_lb span3" v-else> <a href="#"> <i class="icon-beaker"></i>Le marché est en cours de verification</a> </li>
            </ul>
        </div>
        <div class="container-fluid" >
            <div class="row-fluid">
                <div class="span4"></div>
                </div>
            <div class="row-fluid">
                <div class="span12" >
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Information sur le marche</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Presence CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Document marche</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4" v-if="decision_marche_cf.decision== '1'">Attribution de marche</a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="row-fluid">
                                    <div class="span4">
                                        <div class="widget-box" >

                                            <div class="widget-content" v-if="detail_marche_contrat">
                                                <table class="table ">
                                                    <tr>
                                                        <td>Objet du marche</td>
                                                        <td>{{detail_marche_contrat.objet || "Non definie"}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Code ligne budgetaire</td>
                                                        <td>{{detail_marche_contrat.code_ligne_budgetaire}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Code activite</td>
                                                        <td>{{detail_marche_contrat.activite_id}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montant prevue</td>
                                                        <td>{{  formatageSomme(parseFloat(detail_marche_contrat.montant_previsionnel))}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Livrable prevue</td>
                                                        <td>{{detail_marche_contrat.livrable_prevu}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lotissement</td>
                                                        <td>{{detail_marche_contrat.lotissement}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nature du prix</td>
                                                        <td>{{detail_marche_contrat.nature_prix}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date demarage prevue</td>
                                                        <td>{{detail_marche_contrat.date_demarrage_prevue | moment("DD/MM/YYYY")}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date fin execution prevue</td>
                                                        <td>{{detail_marche_contrat.date_fin_execution_prevue | moment("DD/MM/YYYY")}}</td>
                                                    </tr>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="widget-box">

                                            <div class="widget-content">
                                                <table class="table " v-if="marche_contrat_personnalise!=''">
                                                    <tr >
                                                        <td>Unite administrative</td>
                                                        <td>{{detail_marche_contrat.uniteAdmin.libelle || "Non definie"}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Exercice</td>
                                                        <td>{{detail_marche_contrat.exerciceBudgetaire.annee}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type marche</td>
                                                        <td>{{detail_marche_contrat.typeMarches.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mode de passation</td>
                                                        <td>{{detail_marche_contrat.modePassation.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Benificiaire</td>
                                                        <td>{{detail_marche_contrat.livrable_prevu}}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">


                                        <div class="widget-box" v-if="ajouter">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                                <h5>Liste des bailleurs</h5>
                                                <span class="label label-info"><button class="btn btn-primary btn-mini" @click="formulaireAjouter">Ajouter bailleur</button></span> </div>
                                            <div class="widget-content nopadding">
                                                <table class="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Nom</th>
                                                        <th>Type de finnancement</th>
                                                        <th>Montant</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="row in detail_marche_finance" :key="row.id">
                                                        <td>{{row.bailleur.libelle}}</td>
                                                        <td>{{row.finnancement.libelle}}</td>
                                                        <td>{{ formatageSomme(parseFloat(row.montant_prevue)) }}</td>
                                                        <td> <button   class="btn btn-danger "  @click.prevent="supprimeSourceF(row.id)">
                                                            <span class=""><i class="icon-trash"></i></span></button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                        <div class="widget-box" v-else>
                                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                                <h5>Ajouter bailleur</h5>
                                                <span class="label label-info"><button class="btn btn-primary btn-mini" @click="listeBailleur">Afficher la liste des bailleur</button></span>   </div>
                                            <div class="widget-content nopadding">
                                                <form @submit.prevent="ajouterFinnancementMarche" class="form-horizontal">
                                                    <div class="control-group">
                                                        <br>
                                                        <model-list-select style=" " class="wide"   :list="sources_financements"
                                                                           v-model="marche_finnancement.sources_financement_id"
                                                                           option-value="id"
                                                                           option-text="libelle"
                                                                           placeholder="Selection le bailleur ==> saisissez"
                                                        >
                                                        </model-list-select><br>
                                                    </div>
                                                    <div class="control-group">
                                                        <model-list-select style=" " class="wide"   :list="types_financements"
                                                                           v-model="marche_finnancement.types_financement_id"
                                                                           option-value="id"
                                                                           option-text="libelle"
                                                                           placeholder="Selection le type financement ==> saisissez"
                                                        >
                                                        </model-list-select><br>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="">Montant :</label>
                                                        <div class="">
                                                            <input type="text" class="span12" placeholder="Montant previsionnel" v-model="marche_finnancement.montant_prevue">
                                                        </div>
                                                    </div>

                                                    <div class="form-actions">
                                                        <button type="submit" class="btn btn-success">Enregistrer</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab2" class="tab-pane">
                                <div class="row-fluid">
                                    <div class="span7">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Presence CF</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Date de presence</th>
                                                        <th>Etape du marche</th>
                                                        <th>Decision</th>
                                                        <th>Modif</th>
                                                        <th>Date modif</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="odd gradeX" v-for="item in presence_cf_marche" :key="item.id">
                                                        <td>{{item.date_presence | moment("DD/MM/YYYY")}}</td>
                                                        <td>{{item.etapeMarche.libelle}}</td>
                                                        <td>
                                                            <button class="btn btn-danger btn-mini" v-if="item.decision== '3'">Réjéte</button>
                                                            <button class="btn btn-success btn-mini" v-else-if="item.decision== '1'">Valider</button>
                                                            <button class="btn btn-warning btn-mini" v-else-if="item.decision== '2'">Difére</button>
                                                            <p v-else>Non renseigne</p>
                                                        </td>
                                                        <td>{{item.motif}}</td>
                                                        <td>{{item.date_motif}}</td>
                                                        <td><div class="btn-group">
                                                            <a href="#myAlert" data-toggle="modal" class="btn btn-default" @click="afficherModalModifierTitre(item.id)">
                                                                <span class=""><i class="icon-file"></i>Joindre document</span>
                                                            </a>
                                                            <button   class="btn btn-danger "  @click.prevent="supprimerPresenceCF(item.id)" v-if="decision_marche_cf.decision!= '1'">
                                                                <span class=""><i class="icon-trash"></i></span></button>
                                                        </div></td>
                                                    </tr>

                                                    </tbody>
                                                </table> </div>
                                        </div>
                                    </div>
                                    <div class="span5">
                                        <div class="widget-box" >
                                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                <h5>Enregistre presence</h5>
                                            </div>
                                            <div class="widget-content nopadding" >
                                                <form action="#" method="post" @submit.prevent="ajouterPresence" class="form-horizontal">
                                                    <div class="control-group">
                                                        <label class="control-label">Etape marche:</label>
                                                        <div class="controls">
                                                            <select v-model="formData.etapes_marche_id">
                                                                <option v-for="item in etape_marches" :key="item.id" :value="item.id">
                                                                    {{item.libelle}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">Date :</label>
                                                        <div class="controls">
                                                            <input type="date" class="span11" placeholder="Date d'enregistrement" v-model="formData.date_presence" :max="compareDataToday">
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">Decision</label>
                                                        <div class="controls">
                                                            <select v-model="formData.decision">
                                                                <option ></option>
                                                                <option value="1">Visés</option>
                                                                <option value="2">Différés</option>
                                                                <option value="3">Rejetés</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">Motif :</label>
                                                        <div class="controls">
                                                            <input type="text" class="span11" placeholder="Motif" v-model="formData.motif">
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">Controller financier:</label>
                                                        <div class="controls">
                                                            <input type="text" class="span11" v-model="formData.user_id">
                                                             </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">Observation</label>
                                                        <div class="controls">
                                                            <textarea class="span11" v-model="formData.observation"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="form-actions">
                                                        <button type="submit" class="btn btn-success" v-if="decision_marche_cf.decision!= '1'">Enregistre</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="tab3" class="tab-pane">
                                <div class="row-fluid">
                                    <div class="span12">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                                <h5>Liste des documents presence</h5>
                                            </div>
                                            <div class="widget-content nopadding">
                                                <table class="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Date presence</th>
                                                        <th>Etape presence</th>
                                                        <th>Type document </th>
                                                        <th>Libelle </th>
                                                        <th>Fichier</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="even gradeA" v-for="item in document_presence_by_marche" :key="item.id">
                                                        <td>{{item.presence_c_f.date_presence}}</td>
                                                        <td>{{item.presence_c_f.etape_marche.libelle}}</td>
                                                        <td>{{item.type_docuement_id}}</td>
                                                        <td>{{item.libelle}}</td>
                                                        <td><a :href="item.fichier_joint" target="_blank" class="btn btn-default"><span><i class="icon-book"></i></span></a></td>
                                                        <td>
                                                            <div class="btn-group">

                                                            <button   class="btn btn-danger "  @click.prevent="supprimerDocumentPCF(item.id)">
                                                                <span class=""><i class="icon-trash"></i></span></button>
                                                        </div></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab4" class="tab-pane">

                               <div class="row-fluid">
                                   <form action="#" method="get" class="form-horizontal" @submit.prevent="attributionDeMarche">
                                   <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                       <h5>Attribution de marche</h5>
                                   </div>
                                   <div class="span5">

                                       <div class="widget-box">

                                           <div class="widget-content nopadding">
                                                   <div class="control-group">
                                                       <label class="control-label">Numero de marche :</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Numero de marche" v-model="attributionMarche.numero_marche">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Livrable definitif :</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Livrable definitif" v-model="attributionMarche.livrable_definitif">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Date signature</label>
                                                       <div class="controls">
                                                           <input type="date" class="span11" placeholder="" v-model="attributionMarche.date_signature">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Date approbation :</label>
                                                       <div class="controls">
                                                           <input type="date" class="span11" placeholder="" v-model="attributionMarche.date_approbation">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Entreprise:</label>
                                                       <div class="controls">
                                                           <model-list-select style="background-color: rgb(222, 222, 222);  "
                                                                              class="wide"   :list="entreprises"
                                                                              v-model="attributionMarche.entreprise_id"
                                                                              option-value="id"
                                                                              option-text="raison_sociale"
                                                                              placeholder="Entreprise ==> saisissez"
                                                           >
                                                           </model-list-select>

                                                           </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Date ordre de demarage :</label>
                                                       <div class="controls">
                                                           <input type="date" class="span11" placeholder="" v-model="attributionMarche.date_ordre_demarrage" >
                                                       </div>
                                                   </div>

                                           </div>
                                       </div>
                                   </div>
                                   <div class="span6">
                                       <div class="widget-box">

                                           <div class="widget-content nopadding">


                                                   <div class="control-group">
                                                       <label class="control-label">Date livraison :</label>
                                                       <div class="controls">
                                                           <input type="date" class="span11" placeholder="" v-model="attributionMarche.date_livraison"  :min="attributionMarche.date_ordre_demarrage" :readonly="getDatelivrason">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Delai execution :</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Delai execution"  :value="delaiLivraison" disabled>
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">TVA :</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="TVA" v-model="attributionMarche.tva" v-on:keyup="calculeMontantTTC">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Montant HT:</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Montant HT" v-model="attributionMarche.montant_ht" v-on:keyup="calculeMontantTTC">
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Montant TVA:</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Montant TVA" v-model="attributionMarche.montant_tva" disabled>
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Montant reel TTC:</label>
                                                       <div class="controls">
                                                           <input type="text" class="span11" placeholder="Montant reel TTC" v-model="attributionMarche.montant_reel_ttc" disabled>
                                                       </div>
                                                   </div>
                                                   <div class="form-actions">
                                                       <button type="submit" class="btn btn-success">Save</button>
                                                   </div>

                                           </div>
                                       </div>
                                   </div>
                                   </form>
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div id="myAlert" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Joindre document</h3>
            </div>
            <form action="#" method="post" @submit.prevent="addDocumentPresence" enctype="multipart/form-data">
            <div class="modal-body">

                <div class="control-group">
                    <label class="control-label">Code document :</label>
                    <div class="controls">
                        <input type="text" class="span5" placeholder="Libele du document" v-model="document_presence.code">
                    </div>
                </div>
                    <div class="control-group">
                        <label class="control-label">Libelle :</label>
                        <div class="controls">
                            <input type="text" class="span5" placeholder="Libele du document" v-model="document_presence.libelle">
                        </div>
                    </div>
                <div class="control-group">
                    <label class="control-label">Type de document:</label>
                    <div class="controls">
                        <select v-model="document_presence.type_docuement_id" class="span5">
                            <option value="Presence">Liste de presence</option>
                            <option value="Invitation">Lettre d'invitation</option>
                            <option value="PV-COJO"></option>
                            <option value="AUTRE-RAPPORT">AUTRE RAPPORT</option>
                            <option value="Procuration">Les procurations</option>
                            <option value="Contrat">Contrat</option>
                            <option value="Différe">Différe</option>
                            <option value="Réjéte">Réjete</option>
                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label">Fichier :</label>
                    <div class="controls">
                        <input  type="file" @change="OnchangeFichier"  class="span5" placeholder="Last name">
                        <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                    </div>
                </div>


            </div>
            <div class="modal-footer">  <button type="submit" class="btn btn-success">Enregistre</button> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
            </form>
        </div>

    </div>
</template>

<script>
    import {  ModelListSelect } from 'vue-search-select'
   // import 'vue-search-select/dist/VueSearchSelect.css'
    import {mapGetters, mapActions} from 'vuex'
    import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    export default {
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                acteur_id:"",
                fin_contra:{
                    date_fin_contrat:"",
                    id:""
                },
                interruption_systeme:{
                    date_interuption:"",
                    id:""
                },
                ajouter:true,
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                date_arrivee_act_nomination:"",
                info_img:false,
                info_pdf:false,
                liste:[],
                compareDate:false,
                formData : {
                    etapes_marche_id:"",
                    marche_contrat_id:"",
                    date_presence:"",
                    user_id:"",
                    observation:"",
                    decision:"",
                    motif:""
                },
                attributionMarche:{
                    numero_marche:"",
                    livrable_definitif:"",
                    date_signature:"",
                    date_approbation:"",
                    entreprise_id:"",
                    date_ordre_demarrage:"",
                    date_livraison:"",
                    delai_execution_reel:"",
                    tva:"",
                    montant_ht:"",
                    montant_tva:"",
                    montant_reel_ttc:"",
                    id:""
                }
                ,
                marche_finnancement:{
                    montant_prevue:"",
                    sources_financement_id:"",
                    types_financement_id:"",
                    marche_contrat_id:""
                },
                document_presence:{
                    code:"",
                    libelle:"",
                    type_docuement_id:"",
                    presence_cf_id:"",
                },
                conges:{
                    code: "",
                    type_conge: "",
                    date_debut: "",
                    date_fin: "",
                    acte_personnel_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                temp_moyen_testFI:""

            };
        },
        created() {

            this.marche_id=this.$route.params.id;
           this.detailMarcheContrat(this.$route.params.id)
            this.marchePresenceCf(this.$route.params.id)
            this.getDecisionMarche(this.$route.params.id)
            this.getDocumentByPresenceOfMarche(this.$route.params.id)
            this.detailMarcheBack_end(this.$route.params.id)
            this.detailMarcheFinnance(this.$route.params.id)

        },
        computed: {
            ...mapGetters("gestionMarche", ["detail_marche_contrat","presence_cf_marche","etape_marches",
                "decision_marche_cf","document_presence_by_marche","entreprises","deatil_marche_back_end","detail_marche_finance","marche_contrat_personnalise"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),
            nombreJourCalucle(){
                const form = this.formData
                if(form.date_depart == form.date_retour && form.date_retour !== "" && form.date_depart !== "") return 1
                if( form.date_retour == "" && form.date_depart == "") return null
                var dateR = new Date(form.date_retour).getTime()
                var dateD = new Date(form.date_depart).getTime()
                var diffTime = dateR - dateD

                var diffJours = diffTime / (1000 * 3600 * 24)
                if(isNaN(diffJours)) return null

                if(parseFloat(diffJours) < 0 ) return "durée invalide"

                return diffJours;
            },

            getDatelivrason(){
                return !this.attributionMarche.date_ordre_demarrage !=""
            },
    compareDataToday(){
    const date = new Date();

    const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
        '-' + date.getDate().toString().padStart(2, 0);
    return today
       }
        ,
            delaiLivraison(){
                if (this.attributionMarche.date_ordre_demarrage!="" &&this.attributionMarche.date_livraison!=""){
                    let date_demarageTable=this.attributionMarche.date_ordre_demarrage.split("-")
                    let date_livraisoTable=this.attributionMarche.date_livraison.split("-")
                    // console.log(date_livraisoTable)
                    let date01=date_demarageTable[1]+"/"+date_demarageTable[2]+"/"+date_demarageTable[0]
                    let date02=date_livraisoTable[1]+"/"+date_livraisoTable[2]+"/"+date_livraisoTable[0]
                    //  console.log(date01)
                    let date1 = new Date(date01);
                    let date2 = new Date(date02);
                    let diffTime = Math.abs(date2 - date1);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays==0){
                       return  this.attributionMarche.delai_execution_reel=1
                    } else return  this.attributionMarche.delai_execution_reel=diffDays +1


                }

            }

        },
        methods: {

            ...mapActions('gestionMarche', ['ajouterMarcheContrat',"detailMarcheContrat","marchePresenceCf",
                "ajouterDocumentPresence","supprimerPresenceCF","ajouterPresenceCF","getDecisionMarche",
                "getDocumentByPresenceOfMarche","supprimeDocumentPresenceCF",
                "modifierMarcheContrat","detailMarcheBack_end","ajouterSourceFinnancementByMarche",
                "supprimerSourceFinnancementByMarche","modifierSourceFinnancementByMarche","detailMarcheFinnance"]),

            addDocumentPresence () {
                const formData = new FormData();
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('presence_cf_id', this.document_presence.presence_cf_id);
                formData.append('code', this.document_presence.presence_cf_id);
                formData.append('libelle', this.document_presence.libelle);
                formData.append('type_docuement_id', this.document_presence.type_docuement_id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterDocumentPresence(formData,config)
                this.document_presence={
                       code:"",
                        libelle:"",
                        type_docuement_id:"",
                }
                setTimeout(function () { this.detailMarcheFinnance(this.marche_id) }.bind(this), 3000)

            },
            ajouterFinnancementMarche(){
                this.marche_finnancement.marche_contrat_id=this.marche_id;
                this.ajouterSourceFinnancementByMarche(this.marche_finnancement)
                this.marche_finnancement={
                        montant_prevue:"",
                        sources_financement_id:"",
                        types_financement_id:"",
                        marche_contrat_id:""
                }
                setTimeout(function () { this.detailMarcheFinnance(this.marche_id) }.bind(this), 3000)

            }
,
            ajouterPresence(){
                console.log(this.formData)
                this.formData.marche_contrat_id=this.marche_id;
                this.ajouterPresenceCF(this.formData)
                //setTimeout(this.marchePresenceCf(this.marche_id),10000);
                setTimeout(function () { this.marchePresenceCf(this.marche_id) }.bind(this), 3000)
                setTimeout(function () { this.getDecisionMarche(this.marche_id) }.bind(this), 3000)
                this.formData = {
                        etapes_marche_id:"",
                        date_presence:"",
                        user_id:"",
                        observation:"",
                        decision:"",
                        motif:""
                }

            }
            ,
            OnchangeImage(e) {
                const files = e.target.files;
                this.selectedImage = event.target.files[0];
                Array.from(files).forEach(file => this.addImage(file));
            },
            addImage(file) {
                if (!file.type.match("image.*")) {
                    this.info_img=true;
                    console.log(`${file.name} le fichier doit etre une image`);
                    return;
                }
                this.info_img=false;
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
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            afficherModalModifierTitre(index){
                this.document_presence.presence_cf_id = index;
            },
            supprimerDocumentPCF(id){
                this.supprimeDocumentPresenceCF(id)
                setTimeout(function () { this.getDocumentByPresenceOfMarche(this.marche_id) }.bind(this), 3000)
            },
            calculeMontantTTC(){
                let tva=(parseInt(this.attributionMarche.tva)/100)
                if (this.attributionMarche.montant_ht!="") {
                    let montantTVA=parseInt(this.attributionMarche.montant_ht)*tva;
                    this.attributionMarche.montant_tva=montantTVA
                    this.attributionMarche.montant_reel_ttc=(parseInt(this.attributionMarche.montant_ht)) + parseInt(this.attributionMarche.montant_tva)
                }
                else if(this.attributionMarche.montant_ht!="") {
                    this.attributionMarche.montant_tva=0
                    this.attributionMarche.montant_reel_ttc=this.attributionMarche.montant_ht
                }
            },
            attributionDeMarche(){
                this.attributionMarche.id=this.marche_id
                this.modifierMarcheContrat(this.attributionMarche)
                this.attributionMarche={
                    numero_marche:"",
                        livrable_definitif:"",
                        date_signature:"",
                        date_approbation:"",
                        entreprise_id:"",
                        date_ordre_demarrage:"",
                        date_livraison:"",
                        delai_execution_reel:"",
                        tva:"",
                        montant_ht:"",
                        montant_tva:"",
                        montant_reel_ttc:"",
                }
              //  this.marche_id=this.$route.params.id;
                this.detailMarcheContrat(this.marche_id)
                setTimeout(function () { this.detailMarcheContrat(this.marche_id) }.bind(this), 3000)
                setTimeout(function () { this.detailMarcheBack_end(this.marche_id) }.bind(this), 3000)

            },
            formulaireAjouter(){
                this.ajouter=false;
            },
            listeBailleur(){
                this.ajouter=true;
            }
            ,supprimeSourceF(id){
                this.supprimerSourceFinnancementByMarche(id)
                setTimeout(function () { this.detailMarcheFinnance(this.marche_id) }.bind(this), 3000)
            },
            formatageSomme:formatageSomme,
        }
        ,
        components:{
            ModelListSelect,

        },
    };
</script>
<style scoped>

</style>
