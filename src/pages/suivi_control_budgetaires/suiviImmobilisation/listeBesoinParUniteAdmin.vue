
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
           <!-- <div class="container-fluid">
            <div class="quick-actions_homepage deplaceCarre">
              <ul class="quick-actions">
                <li class="bg_ls">
                  <a href="#">
                    <i class="icon-list-ol"></i>
                    <span class="label label-important"></span> Nbre de Document
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Bessoins Immobilisations</h5>
              <div align="right">
                 Recherche:
                <input type="search" placeholder="Saisir Unite Administrative" v-model="search" />
              <!-- <div class="control-group">
             
                <div class="controls">
                  <select v-model="uniteadmin_id">
                    <option
                      v-for="ua in uniteAdministratives"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                                

                </div>
              </div> -->
              </div>
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>UA</th>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix Unitaire</th>
                    <th>Montant Total</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in filtreBesoinParUa"
                    :key="BesoinImmo.id"
                  >
                    <td>{{BesoinImmo.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td>{{BesoinImmo.famille.libelle || 'Non renseigné'}}</td>
                    <td>{{BesoinImmo.quantite || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td>{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
                
              </table>
            </div>
            
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin d'Immobolisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name:'listeBesoinParUniteAdmin',
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

      search: "",
      uniteadmin_id:""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "trieUaImmobilisation",
      "equipements",
      "familles"
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
     filtreBesoinParUa() {
      const st = this.search.toLowerCase();
      return this.trieUaImmobilisation.filter(BesoinImmo => {
        return (
          BesoinImmo.uniteAdminist.libelle.toLowerCase().includes(st) 
        );
      });
    },
    //  computed_items: function() {
    //   let filteruniteAdministrative = this.uniteadmin_id
          
    //   return this.trieUaImmobilisation.filter(BesoinImmo=>{

    //   let filtered = true
    //     if(filteruniteAdministrative && filteruniteAdministrative.length > 0){
    //   filtered = BesoinImmo.uniteAdminist.libelle == filteruniteAdministrative
    //    }
    //     // if(filtered){
    //     //   if(filterSize && filterSize.length > 0){
    //     //     filtered = item.size == filterSize
    //     //   }
    //     // }
    //     return filtered
    //   })
    // }

    // filtreBesoinImmoParUa() {
    //   const st = this.search.toLowerCase();
    //   return this.trieUaImmobilisation.filter(BesoinImmo => {
    //     return BesoinImmo.uniteAdminist.libelle.toLowerCase().includes(st);
    //   });
    // },
    // nombreBesoinParUa() {
    //  return uniteadmin_id => {
    //     if (uniteadmin_id != "") {
    //       return this.trieUaImmobilisation.filter(
    //         BesoinImmo => BesoinImmo.uniteAdminist.id == uniteadmin_id
    //       ).length;
    //     }
    //   };
    // },
    
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo"
    ]),
    // nbreDocumentParTypeTexte() {
    //   return uniteadmin_id => {
    //     if (uniteadmin_id != "") {
    //       return this.trieUaImmobilisation.filter(
    //         element => element.uniteAdminist.id == uniteadmin_id
    //       );
    //     }
    //   };
    // },
   
    // cascade(){
      
		//   this.trieUaImmobilisation.filter( BesoinImmo => {
		// 		return BesoinImmo.uniteAdminist.id == uniteadmin_id; //???????
		// 	});			
		// },
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },

    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
</style>
