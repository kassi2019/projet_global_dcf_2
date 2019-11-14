
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
            title="Liste des Structures plus équipés"
            :data="afficheStructurePlusEquipe"
            name="Liste des Structures plus équipés"
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
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div>
                 
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
                    
                 
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immobilisat in afficheStructurePlusEquipe" :key="immobilisat.id">
                   
                   <td
                      
                    >{{immobilisat.typeUniteAdministrative.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.reletion__equipement.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.famille.libelle || 'Non renseigné'}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.historiqueqte}}</td>
                    <td
                      
                    >{{immobilisat.BesoinImmobilisation.historiqueqte || 'Non renseigné'}}</td>
                    
                    
                  
                   
                  </tr>
                </tbody>
              </table>
              <!-- <div v-if="filtre_immobilisation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucune Immobilisations</p>
              </div>-->
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucune structure Equipé</p>
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

export default {
  name:'listeStructurePlusEquipe',
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
         TYPE_EQUIPEMENT: "BesoinImmobilisation.famille.reletion__equipement.libelle",
        DESIGNATION: "BesoinImmobilisation.famille.libelle",
        QUANTITE_PREVUE: "BesoinImmobilisation.historiqueqte",
        QUANTITE_REALISE: "BesoinImmobilisation.historiqueqte",
      
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
      "afficheStructurePlusEquipe"
      // "getPersonnaliseImmobilisation",
     
      // "getPersonnaliseSuivImmo"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
 filtrestructurePlusEquipe() {
      const st = this.search.toLowerCase();
      return this.afficheStructurePlusEquipe.filter(type => {
        return (
          type.uniteAdminist.libelle.toLowerCase().includes(st) ||
          type.typeUniteAdministrative.libelle.toLowerCase().includes(st)
        );
      });
    }

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
