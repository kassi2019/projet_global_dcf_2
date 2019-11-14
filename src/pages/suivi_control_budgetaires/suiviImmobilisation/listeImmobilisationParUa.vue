
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
           <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Immobilisations"
            :data="filtre_immobilisation"
            name="Liste des Immobilisations"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Immobilisations</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="UA ou Matricule ou Service" v-model="search" />
              </div>
            </div>

            <div class="table-responsive text-nowrap" v-if="SuiviImmo.length && familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Unite administrative</th>
                       <th>Service</th>
                       <th>Acteur Depense</th>
                    <th>Classe</th>
                    <th>Designation</th>
                    <th>Quantité Réel</th>
                    <th>Quantité afféctée</th>
                    <th>Quantité actuel</th>
                    <th>Prix Unitaire</th>
                    <th>Total Actuel</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in filtre_immobilisation" :key="immobilisat.id">
                       <td>{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                   <td>{{immobilisat.serviceImmo.libelle || 'Non renseigné'}}</td>
                    <td>{{immobilisat.acteurDepense.matricule || 'Non renseigné'}}</td>
                    <td>{{immobilisat.BesoinImmobilisation.famille.code || 'Non renseigné'}}</td>  
                   
                    <td>{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                    
                    <td
                      
                    >{{immobilisat.qte_reel}}</td>
                    <td
                      
                    >{{immobilisat.qte_affecte}}</td>
                    <td
                      
                    >{{immobilisat.qte_actuel}}</td>
                    <td
                      
                    >{{immobilisat.prixUnitaire || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.total_actuel }}</td>
                    <td>
                      <router-link
                        :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immobilisat.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Pas d'Immobilisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        TYPE_IMMOBILISATION: "type_immo",
        FAMILLE: "BesoinImmobilisation.famille.reletion__equipement.libelle",
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdministrative.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        NUMERO_IDENTIFICATION: "identification",
        ETAT_IMMOBILISATION: "etat_immobilisation",
        DATE_ACQUISITION: "date_acquisition",
        DATE_MISE_SERVICE: "date_mise_service",
        NUMERO_FACTURE: "numero_facture",
        QUANTITE_REEL: "qte_reel",
        QUANTITE_AFFECTE: "qte_affecte",
        QUANTITE_ACTUEL: "qte_actuel",
        PRIX_UNITAIRE: "prixUnitaire",
        TOTAL_ACTUEL: "total_actuel",
        TOTAL_REEL: "total_reel",
        DUREE: "duree",
        NUMERO_CC: "numero_CC",
        MATRICULE_ACTEUR: "acteurDepense.matricule",
        ANNEE_BUDGETAIRE: "exoBudgetaire.annee",
        SERVICE: "serviceImmo.libelle",
        NATURE_BIEN: "nature_bien",
        NATURE_ENTRE: "nature_dentree",
        MONTANT_EVALUATION: "montant_evaluation",
        DATE_EVALUATION: "date_evaluation",
        MONTANT_CESSION: "montant_cession",
        DATE_CESSION: "date_cession",
        CAUSE_INACTIVITE: "cause_inactivite",
        // TVA: "TVA_id",
        MONTANT_AMORTISSEMENT: "montant_amortissement_anterieur",
        DATE_AORTISSEMENT: "date_amortissement_anterieur"
      },
      formData: {},

      editImmobilisation: {},

      search: ""
    };
  },
  mounted() {
    this.formData = this.SuiviImmo.find(
      immobilisat => immobilisat.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "SuiviImmo",
      "familles",
      "services",
      "getPersonnaliseImmobilisation",
      "getPersonnalise",
      "getPersonnaliseSuivImmo"
    ]),
    filtre_immobilisation() {
      const st = this.search.toLowerCase();
      return this.SuiviImmo.filter(immo => {
        return immo.uniteAdminist.libelle.toLowerCase().includes(st)||
          immo.acteurDepense.matricule.toLowerCase().includes(st)||
          immo.BesoinImmobilisation.famille.libelle.toLowerCase().includes(st);
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$router.push({
        name: "formulaireimmobilisation"
      });
    },

    formatageSomme: formatageSomme,
    // fonction pour vider l'input ajouter
 
    
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

