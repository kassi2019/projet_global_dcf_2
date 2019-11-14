<template>
  
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Modifier Immobilisation</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Identification</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Descriptif</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li>
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.exercice_budgetaire_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="exoBudget in exercices_budgetaires"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                >{{exoBudget.annee}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type Unite administrative:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.typeuniteadminis_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="typeua in groupTriUaImmo"
                                  :key="typeua[0].id"
                                  :value="typeua[0].typeUniteAdmin.id"
                                >{{typeua[0].typeUniteAdmin.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Unite administrative:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.uniteadministrative_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="ua in trieUaImmobilisation"
                                  :key="ua.id"
                                  :value="ua.uniteAdminist.id"
                                >{{ua.uniteAdminist.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Désignation:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.besoinimmo_id" >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="desig in trieUaImmobilisation"
                                  :key="desig.id"
                                  :value="desig.id"
                                >{{desig.famille.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Réel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                 v-model="editImmobilisation.qte_reel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>

                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Prix unitaire:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                              v-model="editImmobilisation.prixUnitaire"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Afféctée:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                
                                v-model="editImmobilisation.qte_affecte"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Valeur d'origine:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                 v-model="editImmobilisation.valeurorigine"
                                readonly
                              />
                            </div>
                          </div>
                        </td>

                        
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span"  v-model="editImmobilisation.qte_actuel" readonly />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Total Actuel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                              v-model="editImmobilisation.total_actuel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      <tr>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Acteur Depense:</label>
                            <div class="controls">
                              <select
                                v-model="editImmobilisation.acteurdepense_id"
                               
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="acteurDep in all_acteur_depense"
                                  :key="acteurDep.id"
                                  :value="acteurDep.id"
                                >{{acteurDep.matricule}}</option>
                              </select>
                        
                              
                            </div>
                          </div>
                           </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Service:</label>
                            <div class="controls">
                              <select
                                v-model="editImmobilisation.service_id"
                              
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="serviceimmo in services"
                                  :key="serviceimmo.id"
                                  :value="serviceimmo.id"
                                >{{serviceimmo.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td>
                           <label class="control-label">Numero CC:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero CC"
                              v-model="editImmobilisation.numero_CC"
                            />
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">N°Identification:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Num identification"
                                v-model="editImmobilisation.identification"
                              />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="editImmobilisation.date_mise_service" />
                            </div>
                          </div>
                        </td>
                        <!-- <td>

<label class="control-label">Taux:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Taux"
                              v-model="editImmobilisation.TVA_id"
                            />
                          </div>



                 
                        </td> -->
                       
                      </tr>

                      <tr>
                          <td>
                              <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.cause_inactivite">
                            
    <option value="1">Vendue</option>
    <option value="2">Mise en hors service</option>
                              </select>
                            </div>
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Etat Immobilisation</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.etat_immobilisation">
                              <option value="1">neuf(ve)</option>
    <option value="2">Seconde Main</option>
    <option value="3">Bon</option>
    </select>
                            </div>
                          </div>
                        </td>
                        <td>
                                   <div class="control-group">
                            <label class="control-label">Type Immobilisation</label>
                            <div class="controls">
                              <select v-model="editImmobilisation.type_immo">
                              
    <option value="1">Corporelle</option>
    <option value="0">Incorporelle</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Duree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                v-model="editImmobilisation.duree"
                                placeholder="Saisir durée"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <label class="control-label">N°facture:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero facture"
                              v-model="editImmobilisation.numero_facture"
                            />
                          </div>
                        </td>
                        
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <div id="tab3" class="tab-pane">
                      <tr>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Amorti:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="editImmobilisation.montant_amortissement_anterieur"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Evaluation:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="editImmobilisation.montant_evaluation"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Cession:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant Cession"
                                v-model="editImmobilisation.montant_cession"
                              />
                            </div>
                          </div>
                        </td>
                        <div class="control-group">
                          <td>
                            <div class="control-group">
                              <label class="control-label">Date Amort Anterieur:</label>
                              <div class="controls">
                                <input
                                  type="date"
                                  class="span"
                                  v-model="editImmobilisation.date_amortissement_anterieur"
                                />
                              </div>
                            </div>
                          </td>
                        </div>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Evaluation:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="editImmobilisation.date_evaluation"
                                placeholder="Date dernière evaluation"
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Date cession:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="editImmobilisation.date_cession" />
                            </div>
                          </div>
                        </td>
                      
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date d'acquisition:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="editImmobilisation.date_acquisition" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Nature d'Entree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Nature entree"
                                v-model="editImmobilisation.nature_dentree"
                              />
                            </div>
                          </div>
                        </td>
                       <td>
                            <div class="control-group">
                            <label class="control-label">Nature du Bien:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir la Nature"
                                v-model="editImmobilisation.nature_bien"
                              />
                            </div>
                          </div>
                        </td>
                          <td>
                         
                        </td>
                      </tr>
                    </div>








                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="modifierImmobilisationLocal(editImmobilisation)"
                        >Modifier</a>
                        <a @click.prevent="afficherTableauImmobilisation()" class="btn">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications  />
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  
  
</template>
 
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'formulaireModifierImmobilisation',
  data() {
    return {
      editImmobilisation: {},
     
    };
  },
 
  created() {
    this.editImmobilisation = this.immobilisations.find(
      immo => immo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "immobilisations",
      "familles",
      "services",
    "trieUaImmobilisation",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo"
      
    ]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense"]),




typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.trieUaImmobilisation.filter(
            element => element.typeuniteadminist_id == id
          );
        }
      };
    },




    ValeurOrigine() {
      const val =
        parseFloat(this.editImmobilisation.quantite) *
        parseFloat(this.editImmobilisation.Prix_unitaire);
      // parseFloat(this.editImmobilisation.TVA_id);
      return parseFloat(val).toFixed(2);
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", ["modifierImmobilisation"]),

    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input modification
    modifierImmobilisationLocal() {
      this.modifierImmobilisation(this.editImmobilisation);
      // this.$("#modificationModal").modal('hide');
      // this.$router.push({name: "immobilisation"});
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>

