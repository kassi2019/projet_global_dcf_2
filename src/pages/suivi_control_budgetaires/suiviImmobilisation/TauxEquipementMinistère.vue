
<template>
  <div>
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="container-fluid">
            <div class="quick-actions_homepage deplaceCarre">
              <ul class="quick-actions">
                <li class="bg_lr">
                  <a href="#">
                    {{nomUniteAdministrative(uniteadmin_id)}}
                    <i class="icon-list-ol"></i>
                    <span class="label label-success">{{nbreacteurEquipeParUA(uniteadmin_id)}}</span> Nbre Acteurs Equipée
                  </a>
                </li>
                 <li class="bg_ls">
                  <a href="#">
                    <i class="icon-list-ol"></i>
                    <span class="label label-important"></span> Nbre Acteurs non Equipée              </a>
                </li>
                 <li class="bg_lg">
                  <a href="#">
                    <i class="icon-list-ol"></i>
                    <span class="label label-primary">{{nbreTotalacteurEquipeParUA(uniteadmin_id)}}</span> Taux équipement
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste d'Archivages document"
            :data="archivageDocuments"
            name="Liste d'Archivages document"
            worksheet="Archivage de document"
          >
            <i title="Exporter en excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <h5>Recherche de taux</h5>
            <div class="widget-title">
              <div align="right">
                <div class="span3">
                  <model-list-select
                    v-model="typeUniteAdmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Type Unite Administrative"
                  ></model-list-select>
                   
                </div>
              </div>
                <div align="right">
                <div class="span3">
                 
                   <model-list-select
                    v-model="uniteadmin_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="uniteAdministratives"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Unite Administrative"
                  ></model-list-select>
                </div>
              </div>
            </div>

            <div class="widget-content nopadding">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert"
        // }
      ],
      // json_fields: {
      //   REFERENCE: "reference",
      //   UNITEADMINISTRATIVE: "unite_administrative.libelle",
      //   TYPETEXTE: "type_texte.libelle",
      //   FICHIER: "fichier_join",
      //   DATE: "date_jours"
      // },
      search: "",

      typeUniteAdmin_id: "",
      uniteadmin_id:"",
      decision_equipe:""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "archivageDocuments",
      "typeTextes",
      "uniteAdministratives"
      
    ]),
 ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
  ...mapGetters("SuiviImmobilisation", [
     "getPersonnaliseActeurEquipeNonEquipe",
      "SuiviImmo"
     
    ]),
    ...mapGetters("personnelUA", ["getPersonnaliseActeurEquipeNonEquipe"]),
    ...mapGetters("personnelUA", ["personnaliseActeurDepense"]),

    nbreacteurEquipeParTypeUA() {
      return typeUniteAdmin_id => {
       
 if (typeUniteAdmin_id != "") {
          return this.SuiviImmo.filter(
            element => element.typeUniteAdministrative.id == typeUniteAdmin_id
           
          ).length;
        }
        
      
      };
    },
     nomTypeUA(){
  return typeUniteAdmin_id =>{
    if(typeUniteAdmin_id !=""){
      var ObjetUA = this.type_Unite_admins.find(element => element.id == typeUniteAdmin_id)
      return ObjetUA.libelle
    }
  }
    },
    nbreacteurEquipeParUA() {
      return uniteadmin_id => {
       
 if (uniteadmin_id != "") {
          return this.SuiviImmo.filter(
            element => element.uniteAdminist.id == uniteadmin_id
           
          ).length;
        }
        
       
      };
    },
    nbreTotalacteurEquipeParUA() {
      return uniteadmin_id => {
       
 if (uniteadmin_id != "") {
          return this.personnaliseActeurDepense.filter(
            element => element.uniteAdmin.id == uniteadmin_id
           
          ).length;
        }
        
       
      };
    },
    nomUniteAdministrative(){
  return uniteadmin_id =>{
    if(uniteadmin_id !=""){
      var ObjetUA = this.uniteAdministratives.find(element => element.id == uniteadmin_id)
      return ObjetUA.libelle
    }
  }
    },
    // nomDocumentParTypeTexte() {
    //   return typeText_id => {
    //     if (typeText_id != "") {
    //       var ObjetTYPTEXT = this.typeTextes.find(
    //         element => element.type_texte.id == typeText_id
    //       );
    //       return ObjetTYPTEXT.libelle;
    //     }
    //   };
    // }

    //     NomDeMissionParUA(){
    // return ua_id =>{
    //   if(ua_id !=""){
    //     var ObjetUA = this.uniteAdministratives.find(element => element.id == ua_id)
    //     return ObjetUA.libelle
    //   }
    // }
    //   },
    // filtre_archivage_document() {
    //   const st = this.search.toLowerCase();
    //   return this.archivageDocuments.filter(archivagedocument => {
    //     return (
    //       archivagedocument.reference.toLowerCase().includes(st) ||
    //       archivagedocument.unite_administrative.libelle
    //         .toLowerCase()
    //         .includes(st) ||
    //       archivagedocument.type_texte.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>