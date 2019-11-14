<template>
    <div>
        <notifications />
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Modification de marche</h5>
                        </div>

                        <div class="widget-content nopadding">
                            <form action="#" method="get" class="form-horizontal" enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Objet:</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="formData.objet" class="span8" placeholder="Objet du marche" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Code imputation budgetaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code_ligne_budgetaire" class="span8" placeholder="Imputation budgetaire" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date demarage prevue:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_demarrage_prevue" class="span8" placeholder="Date de demarage prevue" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date fin execution prevue:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_fin_execution_prevue" :min="formData.date_demarrage_prevue" :readonly="getDateFinExecution" class="span8" placeholder="Date de demarage prevue" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Delait d'execution prevue:</label>
                                                    <div class="controls">
                                                        <input type="text"  class="span8" placeholder="Delait execution prevu" :value="delaiLivraisonPrevue" disabled/>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Montant prevue:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.montant_previsionnel" class="span8" placeholder="Montant prevue" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Livrable prevue:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.livrable_prevu" class="span8" placeholder="Livrable prevue" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Lotissement:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.lotissement" class="span8" placeholder="Lotissement" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nature du prix:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nature_prix" class="span8" placeholder="Nature du prix" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">L'unite administrative:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.unite_administrative_id" @change="documentPTBA_PMM">
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
                                                        <select v-model="formData.exercice_budgetaire_id" @change="documentPTBA_PMM">
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.annee}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">PTBA PPM:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.document_ptbappm_id">
                                                            <option v-for="item in document_ptba_ppm" :key="item.id" :value="item.id">
                                                                {{item.code}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Plan d'ativite</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.activite_id" class="span8" placeholder="Activite" />
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Zone Geographique:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.zone_geographique_id">
                                                            <option v-for="item in zones_geographiques" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Longitude:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.longitude" class="span8" placeholder="Longitude" />
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Latitude:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.latitude" class="span8" placeholder="Latitude" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Type marche:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_marche_id">
                                                            <option v-for="item in type_marches" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Type passation:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.mode_passation_id">
                                                            <option v-for="item in mode_passations" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
                                               href="#">Valider</a>
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

</template>
<script>
    /* import {  ModelListSelect } from 'vue-search-select'
     import _ from 'lodash'
     import { MultiSelect } from 'vue-search-select'*/
    import {mapGetters, mapActions} from 'vuex'
    /*  import 'vue-search-select/dist/VueSearchSelect.css'*/
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                options: [
                    { id: '1', text: 'aa' + ' - ' + '1' },
                    { id: '2', text: 'ab' + ' - ' + '2' },

                ],
                type_finnancement:[],
                searchText: '', // If value is falsy, reset searchText & searchItem
                items: [],
                lastSelectItem: {},
                liste:[],
                formData : {
                    objet: "",
                    montant_previsionnel: "",
                    livrable_prevu: "",
                    date_demarrage_prevue: "",
                    delai_execution_prevu: "",
                    lotissement: "",
                    nature_prix: "",
                    type_marche_id: "",
                    mode_passation_id:"",
                    longitude:"",
                    latitude:"",
                    document_ptbappm_id:"",
                    code_ligne_budgetaire:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    activite_id:"",
                    zone_geographique_id:"",
                    date_fin_execution_prevue:"",
                    id:"",
                },

                editTitre: {
                    code: "",
                    libelle: ""
                },
                data:{
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                }

            };
        },

        created() {
            var ObjetMarcheContrat =this.marche_contrat_personnalise.find( element=> element.id === this.$route.params.id);
            this.formData = {
                objet: ObjetMarcheContrat.objet,
                    montant_previsionnel: ObjetMarcheContrat.montant_previsionnel,
                    livrable_prevu: ObjetMarcheContrat.livrable_prevu,
                    date_demarrage_prevue: ObjetMarcheContrat.date_demarrage_prevue,
                    delai_execution_prevu: ObjetMarcheContrat.delai_execution_prevu,
                    lotissement: ObjetMarcheContrat.lotissement,
                    nature_prix: ObjetMarcheContrat.nature_prix,
                    type_marche_id: ObjetMarcheContrat.type_marche_id,
                    mode_passation_id:ObjetMarcheContrat.mode_passation_id,
                    longitude:ObjetMarcheContrat.longitude,
                    latitude:ObjetMarcheContrat.latitude,
                    document_ptbappm_id:ObjetMarcheContrat.document_ptbappm_id,
                    code_ligne_budgetaire:ObjetMarcheContrat.code_ligne_budgetaire,
                    exercice_budgetaire_id:ObjetMarcheContrat.exercice_budgetaire_id,
                    unite_administrative_id:ObjetMarcheContrat.unite_administrative_id,
                    activite_id:ObjetMarcheContrat.activite_id,
                    zone_geographique_id:ObjetMarcheContrat.zone_geographique_id,
                    date_fin_execution_prevue:ObjetMarcheContrat.date_fin_execution_prevue,
                    id:ObjetMarcheContrat.id,
            }
            console.log(this.formData)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['document_ptba_ppm',"mode_passations",
                "type_marches","ptba_ppm_by_ua_exercie","source_personnalise","marche_contrat_personnalise","document_ptba_ppm"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters("parametreGenerauxProgrammeUnite", ["zones_geographiques"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),
            getDateFinExecution(){
                return !this.formData.date_demarrage_prevue !=""
            },
            delaiLivraisonPrevue(){
                if (this.formData.date_demarrage_prevue!="" && this.formData.date_fin_execution_prevue!=""){
                    let date_demarageTable=this.formData.date_demarrage_prevue.split("-")
                    let date_livraisoTable=this.formData.date_fin_execution_prevue.split("-")
                    // console.log(date_livraisoTable)
                    let date01=date_demarageTable[1]+"/"+date_demarageTable[2]+"/"+date_demarageTable[0]
                    let date02=date_livraisoTable[1]+"/"+date_livraisoTable[2]+"/"+date_livraisoTable[0]
                    //  console.log(date01)
                    let date1 = new Date(date01);
                    let date2 = new Date(date02);
                    let diffTime = Math.abs(date2 - date1);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays==0){
                        return  this.formData.delai_execution_prevu=1
                    } else return  this.formData.delai_execution_prevu=diffDays +1


                }

            }

        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['ajouterMarcheContrat',"ptbaPPMbyUaExercie","sourcePersonnalise","modifierTypeMarche","modifierMarcheContrat"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                console.log(this.formData)
                this.modifierMarcheContrat(this.formData)
                this.$router.push({ name: 'MarcheContrat' })
            },

            documentPTBA_PMM(){
                if (this.formData.unite_administrative_id!="" && this.formData.exercice_budgetaire_id!=""){
                    console.log(this.formData.exercice_budgetaire_id)
                    this.data.exercice_budgetaire_id=this.formData.exercice_budgetaire_id
                    this.data.unite_administrative_id=this.formData.unite_administrative_id
                    this.ptbaPPMbyUaExercie(this.data)
                }

            },

        }
        /* ,
         components: {
             MultiSelect,
             ModelListSelect
         }*/
    };
</script>

