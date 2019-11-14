<template>
    <div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span4">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-eye-open"></i> </span>
                            <h5>Nombre de marchés prévisionnel par type de procédure</h5>
                        </div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Type procédure</th>
                                    <th>Nombre de marché</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in nbr_marche_by_procedure" :key="item.id" :value="item.id">
                                    <td>{{item.procedure}}</td>
                                    <td>{{item.nombre_marche}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="span4">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-arrow-right"></i> </span>
                            <h5>Website statistics</h5>
                        </div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Site</th>
                                    <th>Visits</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="#">Themeforest.com</a></td>
                                    <td>12444</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Themedesigner.in</a></td>
                                    <td>10455</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Themedesigner.in</a></td>
                                    <td>8455</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Themedesigner.in</a></td>
                                    <td>4456</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Themedesigner.in</a></td>
                                    <td>2210</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="span4">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-file"></i> </span>
                            <h5>Visited Pages</h5>
                        </div>
                        <div class="widget-content nopadding">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Page</th>
                                    <th>Visits</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="#">Freebies</a></td>
                                    <td>8550</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Blog</a></td>
                                    <td>7550</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Work</a></td>
                                    <td>5247</td>
                                </tr>
                                <tr>
                                    <td><a href="#">site template</a></td>
                                    <td>4880</td>
                                </tr>
                                <tr>
                                    <td><a href="#">All categories</a></td>
                                    <td>4801</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
   this.getNombreMarcheByProcedure()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['document_ptba_ppm',"mode_passations","type_marches","ptba_ppm_by_ua_exercie","nbr_marche_by_procedure"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters("parametreGenerauxProgrammeUnite", ["zones_geographiques"]),

        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['ajouterMarcheContrat',"ptbaPPMbyUaExercie","getNombreMarcheByProcedure"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                console.log(this.formData)
                this.ajouterMarcheContrat(this.formData)
                this.$router.push({ name: 'MarcheContrat' })
            },

            documentPTBA_PMM(){
                if (this.formData.unite_administrative_id!="" && this.formData.exercice_budgetaire_id!=""){
                    console.log(this.formData.exercice_budgetaire_id)
                    this.data.exercice_budgetaire_id=this.formData.exercice_budgetaire_id
                    this.data.unite_administrative_id=this.formData.unite_administrative_id
                    this.ptbaPPMbyUaExercie(this.data)
                }

            }
        }
    };
</script>

