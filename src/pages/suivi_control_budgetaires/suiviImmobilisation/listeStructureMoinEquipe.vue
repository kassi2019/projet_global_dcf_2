
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
            title="Liste des Structures moin équipés"
            :data="afficheStructureMoinEquipe"
            name="Liste des Structures moin équipés"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
           

            <br>
             
              
             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste structures plus équipé</h5>
              
                 
            </div>
            <div class="table-responsive text-nowrap" v-if="familles.length && services.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>type Unité Administrative</th> 
                    <th>Unité Administrative</th> 
                    <th>type equipement</th> 
                    <th>Designation</th>
                    <th>Quantité Prévue</th>
                    <th>Quantité Réalisé</th>
                    <th>Quantité Restant</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in afficheStructureMoinEquipe" :key="immobilisat.id">
                   
                    <td
                      
                    >{{immobilisat.typeUniteAdministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.famillebesoin.reletion__equipement.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.famillebesoin.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.historiqueqte}}</td>
                    <td
                      
                    >{{immobilisat.qterealise}}</td>
                    <td
                      
                    >{{immobilisat.quantite}}</td>
                    
                  
                   
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Pas de structure Equipé pour le moment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import { formatageSomme } from "../../../Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  //  components: {
  //   ModelListSelect
  // },
  name:'listeStructureMoinEquipe',
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
       
       
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdministrative.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
         TYPE_EQUIPEMENT: "famillebesoin.reletion__equipement.libelle",
        DESIGNATION: "famillebesoin.libelle",
        QUANTITE_PREVUE: "historiqueqte",
        QUANTITE_REALISE: "qterealise",
        QUANTITE_RESTANT: "quantite"
        
      },
      formData: {},

      editImmobilisation: {},

      search: "",
      typeUniteAdmin_id: "",
      uniteadmin_id:"",
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
      "afficheStructureMoinEquipe",
      
      // "getPersonnaliseImmobilisation",
     
      // "getPersonnaliseSuivImmo"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives"]),


  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllImmobilisation",

      "supprimerImmobilisation"
    ]),

    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style>
.deplaceCarre{
  margin: 0 250px;
}
</style>
