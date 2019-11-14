
<template>
    <div>
        <div class="container-fluid" >

            <div class="quick-actions_homepage " >
                <ul class="quick-actions" style="margin: 0px !important;">
                    <li class="bg_lb span3">
                        <a href="#">
                            <i class="icon-dashboard"></i> <span class="label label-important">{{nbrMarche}}</span>Nombre de marché prév
                        </a>
                    </li>
                    <li class="bg_lg span3">
                        <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{nbrMarcheAOIandAON}}/{{nbrMarche}}</span>Nbr d'AO/Nbr total de marchés prevue
                        </a>
                    </li>
                    <li class="bg_lo span3">
                        <a href="#">
                            <i class="icon-inbox"></i><span class="label label-important">{{nbrMarcheByTypeProcedure(passation)}}</span>
                            <p style="font-size: 0.8em;">NBR de marchés prév par  procédure</p>
                            <p style="font-size: 0.8em;">{{nomProcedure(passation)}}</p>
                        </a>
                    </li>
                    <li class="bg_lb span3"> <a href="#"> <i class="icon-th"></i> <span class="label label-important" v-if="nbrMarcheByTypeMarche(typeMarche)">{{nbrMarcheByTypeMarche(typeMarche)}}/{{nbrMarche}}</span>
                        <p>NBR de marchés prév par type de marche</p>
                        {{nomTypeMarche(typeMarche)}}
                    </a> </li>
                    <li class="bg_ls span3"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important">{{nbrMarcheByRejeteOrValiderOrDifere(decision)}}</span>
                        <p>NBR de marchés prév par type de decision</p>
                        {{nomDecision(decision)}}
                    </a> </li>
                    <li class="bg_lg span3">
                        <a href="#"> <i class="icon-signal"></i> <span class="label label-important" v-if="tauxMarchePrevisionnelByRejeteOrValiderDifer(decision)">{{tauxMarchePrevisionnelByRejeteOrValiderDifer(decision)}} %</span>
                            <p>Taux de marchés prév par type de decision</p>
                            {{nomDecision(decision)}}
                        </a>
                    </li>

                    <li class="bg_ly span3">
                        <a href="#">
                            <i class="icon-inbox"></i><span class="label label-important" v-if="nbrAObyTypeFinnancement(type_finnance)">{{nbrAObyTypeFinnancement(type_finnance)}}/{{nbrMarche}}</span>
                            <p>Nbr d'AO, sur nbr de marchés, par type de financement</p>
                            {{nomTypeFinnancement(type_finnance)}}
                        </a>
                    </li>
                    <li class="bg_lo span3">
                        <a href="#">
                            <i class="icon-inbox"></i><span class="label label-important" v-if="nbrAObyBailleur(sourceFinnancement)">{{nbrAObyBailleur(sourceFinnancement)}}/{{nbrMarche}}</span>
                            <p>Nbr d'AO, sur nbr de marchés, par type de bailleur</p>
                            {{nomBailleurByAO(sourceFinnancement)}}
                        </a>
                    </li>

                    <li class="bg_ly span3 ">
                        <a href="#">
                            <i class="icon-inbox"></i><span class="label label-important" v-if="nbrMarcheByAdmin(unite_admin)">{{nbrMarcheByAdmin(unite_admin)}}</span>
                            <p>Nbr marche par structure</p>
                            {{nomUniteAdminByMarche(unite_admin)}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-fluid" >

            <div class="row-fluid">
                <div class="span12">
                    <download-excel
                            class="btn btn-default pull-right"
                            style="cursor:pointer;"
                            name="Liste des marches"
                            worksheet="liste des marches"
                            :fields = "json_fields"
                            title="Liste des marches"
                            :data="titreFiltres">
                        <i title="Exporter en excel" class="icon-table"></i>&nbsp; Exporter en excel
                    </download-excel>
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des marches et contrat en planification
                                </h5>
                            <div align="right">
                                Search: <input type="text" v-model="search">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <div class="" align="left" >
                                <div class="span3" align="right">
                                    <model-list-select  class="wide"   :list="sources_financements"
                                                       v-model="sourceFinnancement"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Le bailleur ==> saisissez"
                                    >
                                    </model-list-select>
                                </div>
                                <div class="span3" align="right">
                                    <model-list-select  class="wide"   :list="types_financements"
                                                        v-model="type_finnance"
                                                        option-value="id"
                                                        option-text="libelle"
                                                        placeholder="Type finnancement "
                                    >
                                    </model-list-select>
                                </div>
                                <div class="span3" align="right">
                                    <model-list-select  class="wide"   :list="type_marches"
                                                       v-model="typeMarche"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Type de marche ==> saisissez"
                                    >
                                    </model-list-select>
                                </div>
                                <div class="span3" align="right">
                                    <model-list-select  class="wide"   :list="dataDecision"
                                                       v-model="decision"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Decison ==> saisissez"
                                    >
                                    </model-list-select>
                                </div>


                            </div>
                            <div align="left">
                                <div class="span3" align="left">

                                    <model-list-select  class="wide"   :list="mode_passations"
                                                        v-model="passation"
                                                        option-value="id"
                                                        option-text="libelle"
                                                        placeholder="Type passation ==> saisissez"
                                    >
                                    </model-list-select>
                                </div>
                                <div class="span3" align="left">

                                    <model-list-select  class="wide"   :list="uniteAdministratives"
                                                        v-model="unite_admin"
                                                        option-value="id"
                                                        option-text="libelle"
                                                        placeholder="Ua ==> saisissez"
                                    >
                                    </model-list-select>
                                </div>
                            </div>

                            <table class="table table-bordered table-striped" style="" v-if="marche_contrat_personnalise">
                                <thead>
                                <tr>
                                    <th>Objet </th>
                                    <th>Code imputation</th>
                                    <th>Code activite </th>
                                    <th>Montant prevue</th>
                                    <th>Date demarage prvue</th>
                                    <th>Date fin execution prevue </th>
                                    <th>Unite admin</th>
                                    <th>Exercice</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in titreFiltres" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.objet || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.code_ligne_budgetaire || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.activite_id || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{ formatageSomme(parseFloat(item.montant_previsionnel)) || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.date_demarrage_prevue | moment("DD/MM/YYYY") || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.date_fin_execution_prevue | moment("DD/MM/YYYY") || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.exerciceBudgetaire.annee || 'Non renseigné'}}</td>
                                    <td>

                                        <span class="date badge badge-info" v-if="item.decison=='0'">En cours de traitement</span>
                                        <span class="date badge badge-success" v-if="item.decison=='1'">Valider</span>
                                        <span class="date badge badge-warning" v-if="item.decison=='2'">Difére</span>
                                        <span class="date badge badge-important" v-if="item.decison=='3'">Réjéte</span>


                                        <!--<div class="btn-group" v-if="item.decison=='0'">
                                            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">En cours <span class="caret"></span></button>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Valider</a></li>
                                                <li><a href="#">Difére</a></li>
                                                <li><a href="#">Réjeté</a></li>
                                            </ul>
                                        </div>
                                        <div class="btn-group" v-if="item.decison=='1'">
                                            <button data-toggle="dropdown" class="btn btn-success dropdown-toggle">Valider <span class="caret"></span></button>
                                            &lt;!&ndash;<ul class="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>&ndash;&gt;
                                        </div>
                                        <div class="btn-group" v-if="item.decison=='2'">
                                            <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle">Difére <span class="caret"></span></button>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Valider</a></li>
                                                <li><a href="#">Difére</a></li>
                                                <li><a href="#">Réjeté</a></li>
                                            </ul>
                                        </div>
                                        <div class="btn-group" v-if="item.decison=='3'">
                                            <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">Réjéte <span class="caret"></span></button>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Valider</a></li>
                                                <li><a href="#">Difére</a></li>
                                                <li><a href="#">Réjeté</a></li>
                                            </ul>
                                        </div>-->




                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'DetailMarcheContrat', params: { id: item.id }}" class="btn btn-default ">
                                                <span class=""><i class="icon-folder-open"></i></span>
                                            </router-link>
                                            <button @click.prevent="supprimerMarcheContrat(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span>
                                            </button>
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
                <h3>Ajouter fonctions</h3>
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




        <notifications />

    </div>

</template>

<script>

    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
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
                    // {
                    //     name: 'alertMe',
                    //     icon: 'add_alert'
                    // }
                ],
                sourceFinnancement:"",
                type_finnance:"",
                passation:"",
                decision:"",
                search:"",
                unite_admin:"",
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },
                json_fields: {
                    'NOM marche': 'objet',
                    'Inputation': 'code_ligne_budgetaire',
                    'Activite': 'activite_id',
                    'Montant previsionnel': 'montant_previsionnel',
                    'Livrable prevue': 'livrable_prevu',
                    'Date demarage prevue': 'date_demarrage_prevue',
                    'Date fin execution prevue': 'date_fin_execution_prevue',
                    'Unite': 'uniteAdmin.libelle',
                    'Exercice': 'exerciceBudgetaire.annee',
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                typeMarche:"",
                dataDecision:[
                    {
                        id:0,
                        libelle:"En cours de traitement"
                    }
                    ,
                    {
                       id:1,
                        libelle:"Valider"
                    }
                   ,
                    {
                        id:2,
                        libelle:"Difére"
                    }
                    ,
                    {
                        id:3,
                        libelle:"Réjéter"
                    }]
            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
            this.getMarcheContrat()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['marche_contrat_personnalise',"mode_passations","etape_marches","type_marches","marche_finnance_personnalises"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            titreFiltres() {

                const searchTerm = this.search.toLowerCase();

                return this.marche_contrat_personnalise.filter((item) => {
                        return item.objet.toLowerCase().includes(searchTerm)
                            || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                            || item.exerciceBudgetaire.annee.toLowerCase().includes(searchTerm)
                    }
                )

            },
            nbrMarche(){
                return this.marche_contrat_personnalise.length;
            }
            ,
            nbrMarcheByTypeProcedure(){
                return  id_mode_passation=>{
                    if (id_mode_passation!="") {
                        return this.marche_contrat_personnalise.filter( element=> element.modePassation.id == id_mode_passation).length
                    }

                }

            },
            nomProcedure(){
                return id_mode_passation=>{
                    if (id_mode_passation!="") {
                        var ObjetMarche=  this.mode_passations.find( element=> element.id == id_mode_passation)
                        return ObjetMarche.libelle
                    }

                }

            }
            ,
            nbrMarcheByRejeteOrValiderOrDifere(){
                return decision =>{
                    if (decision!=""){
                        return this.marche_contrat_personnalise.filter( element=> element.decison == decision).length
                    }
                }
            }
            ,nomDecision(){
                return decision =>{
                    if (decision!=""){
                       if(decision==1){
                           return "marché valider"
                       }
                       if(decision==2){
                           return "marché diféré"
                       }
                        if(decision==3){
                            return "marché réjéter"
                        }
                    }
                }
            },
            tauxMarchePrevisionnelByRejeteOrValiderDifer(){
                return decision =>{
                    if (decision!=""){
                        let nbr_marche=this.marche_contrat_personnalise.length
                        let nbr = this.marche_contrat_personnalise.filter( element=> element.decison == decision).length
                        let taux =(nbr * 100)/nbr_marche;
                        return taux.toFixed(2);
                    }
                }
            },
            nbrMarcheAOIandAON(){
                let nbrAOI = this.marche_contrat_personnalise.filter(element=> element.modePassation.code == "AOI").length
                let nbrAON=this.marche_contrat_personnalise.filter(element=> element.modePassation.code == "AON").length;
                let nbr= nbrAOI + nbrAON
                return nbr;
            },
            nbrMarcheByTypeMarche(){
                return typeMarche=>{
                    if (typeMarche!=""){
                        return this.marche_contrat_personnalise.filter( element=> element.typeMarches.id  == typeMarche).length
                    }
                }
            },
            nomTypeMarche(){
                return typeMarche=>{
                    if (typeMarche!="") {
                        var ObjetMarche=  this.type_marches.find( element=> element.id === typeMarche)
                        return ObjetMarche.libelle
                    }
                }
            },
            nbrAObyTypeFinnancement(){
                return typeFin=>{
                    if (typeFin!=="") {
                        let nbrAOI=  this.marche_finnance_personnalises.filter( element=> element.modePassation.code === "AOI" && element.finnancement.id=== typeFin).length
                        let nbrAON=  this.marche_finnance_personnalises.filter( element=> element.modePassation.code === "AON" && element.finnancement.id=== typeFin).length
                         let nbrMarcheByTypeFinnAndAO=nbrAON + nbrAOI
                        if(nbrMarcheByTypeFinnAndAO==0) return "O";
                        return nbrMarcheByTypeFinnAndAO
                    }
                }
            },
            nomTypeFinnancement(){
                return typeFin=>{
                    if (typeFin!="") {
                        var ObjetMarche=  this.types_financements.find( element=> element.id == typeFin)
                        return ObjetMarche.libelle
                    }
                }
            },
            nbrAObyBailleur(){
                return bailleur=>{
                    if (bailleur!="") {
                        let nbrAOI=  this.marche_finnance_personnalises.filter( element=> element.modePassation.code == "AOI" && element.bailleur.id== bailleur).length
                        let nbrAON=  this.marche_finnance_personnalises.filter( element=> element.modePassation.code == "AON" && element.bailleur.id== bailleur).length

                        let nbrMarcheByTypeFinnAndAO=nbrAON + nbrAOI
                        if (nbrMarcheByTypeFinnAndAO==0) return "O";
                        return nbrMarcheByTypeFinnAndAO
                    }
                }
            }
            ,
            nomBailleurByAO(){
                return bailleur=>{
                    if (bailleur!="") {
                        var ObjetMarche=  this.sources_financements.find( element=> element.id == bailleur)
                        return ObjetMarche.libelle
                    }
                }
            },
            nbrMarcheByAdmin(){
                return unite_admin=>{
                    if (unite_admin!=="") {
                        return this.marche_contrat_personnalise.filter( element=> element.uniteAdmin.id === unite_admin ).length
                    }
                }
            },
            nomUniteAdminByMarche(){
                return unite_admin=>{
                    if (unite_admin!=="") {
                        let objetAdmin=this.uniteAdministratives.find(element=> element.id === unite_admin);
                        return objetAdmin.libelle;
                    }
                }
            }

        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['supprimerMarcheContrat',"getMarcheContrat"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterMarcheContrat' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterFonction(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
            },

            searchForma(id_type_proced){
               // if (id_type_proced==null) return this.marche_contrat_personnalise
                this.marche_contrat_personnalise=this.marche_contrat_personnalise.filter( element=> element.modePassation.id == id_type_proced)

            },


// afficher modal
            afficherModalModifierTitre(index){

                this.$router.push({ name: 'EditeMarche', params: { id: index } })

            },
            modifier(){
                this.modifierFonction(this.editTitre)
                //this.getFonctions()
            },
            formatageSomme:formatageSomme,
        },
        components:{
            ModelListSelect,

        },
    };
</script>

<style>
    .order-card {
        color: #fff;
    }

    .bg-c-blue {
        background: linear-gradient(45deg,#4099ff,#73b4ff);
    }

    .bg-c-green {
        background: linear-gradient(45deg, #4dab51,#59e0c5);
    }

    .bg-c-yellow {
        background: linear-gradient(45deg,#FFB64D,#ffcb80);
    }

    .bg-c-pink {
        background: linear-gradient(45deg,#FF5370,#ff869a);
    }


    .card {

        -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        border: none;
        margin-bottom: 5px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .card .card-block {

    }

    .order-card i {
        font-size: 26px;
    }

    .f-left {
        float: left;
    }

    .f-right {
        float: right;
    }
</style>
