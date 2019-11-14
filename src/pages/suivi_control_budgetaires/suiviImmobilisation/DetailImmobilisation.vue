<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Immobilisations</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Classe</th>
                  <th>type equipement</th>
                  <th>Designation</th>
                  <th>Quantité Réel</th>
                  <th>Quantité afféctée</th>
                  <th>Quantité actuel</th>
                  <th>Prix Unitaire</th>
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{immobilisat.BesoinImmobilisation.famille.code || 'Non renseigné'}}</td>  
                    <td>{{immobilisat.BesoinImmobilisation.famille.reletion__equipement.libelle || 'Non renseigné'}}</td>
                    <td>{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_reel || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_affecte || 'Non renseigné'}}</td>
                  <td>{{immobilisat.qte_actuel || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(immobilisat.prixUnitaire)|| 'Non renseigné'}}</td>
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                   <th>Total Actuel</th>
                  <th>Type immobilisation</th>
                  <th>Service</th>
                  <th>Durée</th>
                  <th>Numero CC</th>

                  <th>Acteur Depense</th>

                  <th title="Exercice Budgetaire">Exercice Budget</th>
                 
                 
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td>{{formatageSomme(immobilisat.total_actuel) || 'Non renseigné'}}</td>
                  <td v-if="immobilisat.type_immo == 1" >Corporelle</td>
                  <td v-else>Incorporelle</td>
                  <td>{{immobilisat.serviceImmo.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.duree || 'Non renseigné'}} ans</td>
                  <td>{{immobilisat.numero_CC || 'Non renseigné'}}</td>

                  <td>{{immobilisat.acteurDepense.matricule|| 'Non renseigné'}}</td>

                  <td>{{immobilisat.exoBudgetaire.annee || 'Non renseigné'}}</td>
                 

                  <!-- <td>{{immobilisat.unitePara.libelle || 'Non renseigné'}}</td> -->
                 
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                   <th>Nature de Bien</th>
                  <th>Nature Entrée</th>
                  <!-- <th>Unite</th> -->
                   <th>Tva</th>
                  <th>Montant Evaluation</th>
                  <th>Date Evaluation</th>
                  <th>Montant Cession</th>
                  <th>Date Cession</th>

                 
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                   <td>{{immobilisat.nature_bien || 'Non renseigné'}}</td>
                  <td>{{immobilisat.nature_dentree || 'Non renseigné'}}</td>
                   <td>{{immobilisat.TVA_id || 'Non renseigné'}} %</td>
                  <td>{{formatageSomme(immobilisat.montant_evaluation) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(immobilisat.date_evaluation) || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(immobilisat.montant_cession)|| 'Non renseigné'}}</td>
                  <td>{{formaterDate(immobilisat.date_cession) || 'Non renseigné'}}</td>

                 
                </tr>
              </tbody>
            </table>
             <!---/////////////////////// 4 PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Etat Immobilisation</th>
                  <th>Cause Inactive</th>

                  <th title="montant amortissement anterieur">Montant Amorti Anteri</th>
                  <th title="date amortissement anterieur">Date Amort Anter</th>
                   <th title="">Valeur origine</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">

 <td v-if="immobilisat.etat_immobilisation == 1" >neuf(ve)</td>
                  <td v-else-if="immobilisat.etat_immobilisation == 2">Seconde Main</td>
 <td v-else>Bon</td>
                 <td v-if="immobilisat.cause_inactivite == 1" >Vendue</td>
                  <td v-else>Mise en hors service</td>
 
                   
                   

                  <td>{{formatageSomme(immobilisat.montant_amortissement_anterieur) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(formaterDate(immobilisat.date_amortissement_anterieur)) || 'Non renseigné'}}</td>
                   <td>{{formatageSomme(immobilisat.valeurorigine) || 'Non renseigné'}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  
  data() {
    return {
      immobilisat: undefined
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
    ...mapGetters("SuiviImmobilisation", ["SuiviImmo"])
  },
  methods: {
    getDetail(){
        this.immobilisat = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id_immobilisation
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,
  }
};
</script>