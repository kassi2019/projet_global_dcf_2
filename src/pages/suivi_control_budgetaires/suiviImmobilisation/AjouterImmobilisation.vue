
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
              <h5>Ajouter Immobilisation</h5>
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
                              <select v-model="formData.exercice_budgetaire_id">
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
                              <select v-model="formData.typeuniteadminis_id">
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
                              <select v-model="formData.uniteadministrative_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="ua in typeUniteAdministrativeDynamiques(formData.typeuniteadminis_id)"
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
                              <select v-model="formData.besoinimmo_id" :readOnly="veifEquipementExist">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="desig in designationDynamiques(formData.uniteadministrative_id)"
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
                                :value="AffichierQuantiteteReel"
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
                                :value="AffichierprixUnitaire"
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
                                :max="AffichierQuantiteteReel"
                                v-model="formData.qte_affecte"
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
                                :value="valeurOrigine"
                                readonly
                              />
                            </div>
                          </div>
                        </td>

                        
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="AfficheQteActuel" readonly />
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
                                :value="AffichierTotalActuel"
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
                                v-model="formData.acteurdepense_id"
                                :readOnly="veifEquipementExist"
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="acteurDep in acteurDepenseDynamiques(formData.uniteadministrative_id)"
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
                                v-model="formData.service_id"
                              
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
                       

                           <div class="control-group">
                            <label class="control-label">N°Identification:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Num identification"
                                v-model="formData.identification"
                              />
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
                              v-model="formData.numero_CC"
                            />
                          </div>
                         
                        </td>
                        
  <td>
                          <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_mise_service" />
                            </div>
                          </div>

                          <input
                    type="hidden"
                   :value="totalqteRealise"
                    
                    class="span"
                    
                  />
                   <input
                    type="hidden"
                   :value="AffichierQuantiteRealise"
                    
                    class="span"
                    
                  />
                        </td>
<!-- <label class="control-label">Taux:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Taux"
                              v-model="formData.TVA_id"
                            />
                          </div>



                 
                        </td> -->
                        
               
                      </tr>

                      <tr>
                          <td>
                            <div class="control-group">
                            <label class="control-label">Etat Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.etat_immobilisation">
                              <option value="1">neuf(ve)</option>
    <option value="2">Seconde Main</option>
    <option value="3">Bon</option>
    </select>
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="formData.cause_inactivite">
                            
    <option value="1">Vendue</option>
    <option value="2">Mise en hors service</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                                   <div class="control-group">
                            <label class="control-label">Type Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.type_immo">
                              
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
                                v-model="formData.duree"
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
                              v-model="formData.numero_facture"
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
                                v-model="formData.montant_amortissement_anterieur"
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
                                v-model="formData.montant_evaluation"
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
                                v-model="formData.montant_cession"
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
                                  v-model="formData.date_amortissement_anterieur"
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
                                v-model="formData.date_evaluation"
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
                              <input type="date" class="span" v-model="formData.date_cession" />
                            </div>
                          </div>
                        </td>
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date d'acquisition:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_acquisition" />
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
                                v-model="formData.nature_dentree"
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
                                v-model="formData.nature_bien"
                              />
                            </div>
                          </div>
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
                          @click.prevent="ajouterImmobilisationLocal(formData)"
                        >Valider</a>
                        <a
                          @click.prevent="afficherTableauImmobilisation()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  
  
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AjouterImmobilisation',
  data() {
    return {
      formData: {
        // valeur_origine = this.ValeurOrigine(),

        exercice_budgetaire_id: "",
        besoinimmo_id: "",
        uniteadministrative_id: "",
        
        acteurdepense_id:""

      },

      // stats: ["neuf(ve)", "Seconde Main", "Bon"],
      // typeImmo: ["Corporelle", "Incorporelle"],
      // causeInactivite: ["Vendue", "Mise en hors service"],
      search: ""
    };
  },
  // mounted() {
  //   this.formData = this.immobilisations.find(
  //     immo => immo.id == this.$route.params.id
  //   );

  //   //console.log(this.$router);
  // },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "trieUaImmobilisation",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo"
      
    ]),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),

    AfficheQteActuel() {
      const form = this.formData;

      if (form.qte_affecte <= this.AffichierQuantiteteReel)
        var val =
          parseInt(this.AffichierQuantiteteReel) -
          parseInt(this.formData.qte_affecte);
      if (isNaN(val)) return null;

      if (form.qte_affecte < 0) return (form.qte_affecte = "");

      return parseInt(val).toFixed(0);
    },

    designationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.trieUaImmobilisation.filter(
            element => element.uniteadmin_id == id
          );
        }
      };
    },

typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.trieUaImmobilisation.filter(
            element => element.typeuniteadminist_id == id
          );
        }
      };
    },
// Historqteafecter() {
//       const val = parseInt(this.formData.qte_affecte);
//       return parseInt(val).toFixed(0);
//     },

    acteurDepenseDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.unite_administrative_id == id);
        }
      };
    },
    veifEquipementExist() {
      return this.formData.uniteadministrative_id == "";
    },

    // AfficheQteActuel() {
    //   const val =
    //     parseInt(this.AffichierQuantiteteReel) -
    //     parseInt(this.formData.qte_affecte);
    //   return parseInt(val).toFixed(0);
    // },

    AffichierQuantiteteReel() {
      const qtereel = this.trieUaImmobilisation.find(qtreel => qtreel.id == this.formData.besoinimmo_id);

      if (qtereel) {
        return qtereel.quantite;
      }
      return 0
    },
    AffichierQuantiteRealise() {
      const qtereali = this.trieUaImmobilisation.find(Qreal => Qreal.id == this.formData.besoinimmo_id);

      if (qtereali) {
        return qtereali.qterealise;
      }
      return 0
    },

    idObjetBesoinImmoAModifierLaQuantite() {
      const qtereel = this.trieUaImmobilisation.find(
        qtreel => qtreel.id == this.formData.besoinimmo_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },
    idObjetBesoinImmoAModifierMontantActuel() {
      const montantActuel = this.trieUaImmobilisation.find(
        totalActuel => totalActuel.id == this.formData.besoinimmo_id,
      );

      if (montantActuel) {
        return montantActuel.id;
      }
      return 0
    },
    idObjetBesoinImmoAModifierQteRealise() {
      const qte_affecte = this.trieUaImmobilisation.find(
        quantRealise => quantRealise.id == this.formData.besoinimmo_id,
      );

      if (qte_affecte) {
        return qte_affecte.id;
      }
      return 0
    },

    AffichierprixUnitaire(){
      const prixUnitaire = this.trieUaImmobilisation.find(prixUnit => prixUnit.id == this.formData.besoinimmo_id)
      if (prixUnitaire) 
      {
        return prixUnitaire.prix_unitaire
        }
        return 0
    },
    
    valeurOrigine() {
      const val = parseFloat(this.formData.qte_affecte) * parseFloat(this.AffichierprixUnitaire);
      return parseFloat(val).toFixed(2);
    },

totalqteRealise() {
      const val = parseFloat(this.formData.qte_affecte) + parseFloat(this.AffichierQuantiteRealise);
      return parseFloat(val).toFixed(2);
    },



    AffichierTotalActuel() {
      const val = parseFloat(this.AfficheQteActuel) * parseFloat(this.AffichierprixUnitaire);
      return parseFloat(val).toFixed(2);
    },
      AffichierTypeUa() {
      const typeUniteA = this.trieUaImmobilisation.find(typeUa=> typeUa.id == this.formData.uniteadministrative_id);

      if (typeUniteA) {
        return typeUniteA.typeuniteadminist_id;
      }
      return 0
    },
    
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "ajouterImmobilisation",
      "modifierQuantiteReel",
      "modifierMontantActuel",
      "modifierQteRealisebesoin"
    ]),

    // changerUniteAdmin(event) {
    //   this.designation = event.target.value;
    // },
    // changerdesignation(event) {
    //   this.qte = event.target.value;
    //   this.prix_unitaire = event.target.value;
    // },
    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input ajouter

    ajouterImmobilisationLocal() {
    
      var objetPourModifierQuantiteReel = {
        id: this.idObjetBesoinImmoAModifierLaQuantite,
        qte_actu: this.AfficheQteActuel
      }
      var objetPourModifierMontantActuel = {
        id: this.idObjetBesoinImmoAModifierMontantActuel,
        montant_actu: this.AffichierTotalActuel
      }
     var objetPourModifierQteRealise = {
        id: this.idObjetBesoinImmoAModifierQteRealise,
         qte_real: this.totalqteRealise
      }

      //console.log(objetPourModifierpersoEquipe)

     this.modifierQuantiteReel(objetPourModifierQuantiteReel);
     this.modifierMontantActuel(objetPourModifierMontantActuel);
    this.modifierQteRealisebesoin(objetPourModifierQteRealise);
      var nouvelObjet = {
        ...this.formData,
        qte_reel: this.AffichierQuantiteteReel,
        prixUnitaire: this.AffichierprixUnitaire,
        valeurorigine: this.valeurOrigine,
        total_actuel: this.AffichierTotalActuel,
        qte_actuel: this.AfficheQteActuel
      };

      this.ajouterImmobilisation(nouvelObjet);

      this.formData = {
        valeurorigine: "",
        type_immo: "",
       
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        qte_reel: "",
        qte_affecte: "",
        qte_actuel: "",


        prixUnitaire: "",
        total_actuel: "",
        besoinimmo_id: "",

        duree: "",
        numero_CC: "",
        acteurdepense_id: "",
        exercice_budgetaire_id: "",
        service_id: "",
        nature_bien: "",
        nature_dentree: "",
        // acteurdepense_id: "",
        TVA_id: "",
        montant_evaluation: "",
        date_evaluation: "",
        montant_cession: "",
        date_cession: "",
        cause_inactivite: "",
        montant_amortissement_anterieur: "",
        date_amortissement_anterieur: ""
      };
    },

    // // fonction pour vider l'input modification
    // modifierFamilleLocal() {
    //   this.modifierFamille(this.editFamille);

    //   this.editFamille = {
    //     code: "",
    //     libelle: ""
    //   };
    // },
    alert() {
      console.log("ok");
    }
  }
};
</script>

<style>
.tail {
  width: 20px;
}
</style>