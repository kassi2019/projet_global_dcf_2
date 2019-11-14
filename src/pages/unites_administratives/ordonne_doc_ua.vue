
<template>
  <div>
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="container-fluid">
            <div class="quick-actions_homepage deplaceCarre">
              <ul class="quick-actions">
               
                 <li class="bg_ls" title="Nombre de document par type text"  v-show="typeText_id.length !== 0" >
                  <a href="#">
                    Nombre de Document
                   
                    <i class="icon-th"></i>
                    <span class="label label-important">{{nbreDocumentParTypeTexte(typeText_id)}}</span>  {{nomTypeText(typeText_id)}}         </a>
                </li>
              </ul>
            </div>
          </div>
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste d'Archivages document"
            :data="archivageDocuments"
            name="Liste d'Archivages document"
            worksheet="Archivage de document"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <h5>Liste Documents</h5>
            <div class="widget-title">
              <div align="right">
                <div class="span3">
                  <model-list-select
                    v-model="typeText_id"
                    style="background-color: rgb(222, 222, 222);"
                    :list="typeTextes"
                    option-value="id"
                    option-text="libelle"
                    placeholder="Type text"
                  ></model-list-select>
                </div>
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Réference</th>
                    <th>Fichier</th>
                    <th>Date</th>
                    <th>Unite Administrative</th>
                    <th>Type Texte</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(archivagedocument) in archivageDocuments"
                    :key="archivagedocument.id"
                  >
                    <td>{{archivagedocument.reference || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.fichier || 'Non renseigné'}}</td>
                    <td>{{formaterDate(archivagedocument.date_jours) || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.unite_administrative.libelle || 'Non renseigné'}}</td>
                    <td>{{archivagedocument.type_texte.libelle|| 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="archivageDocuments.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name:'ordonnedocua',
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
      json_fields: {
        REFERENCE: "reference",
        UNITEADMINISTRATIVE: "unite_administrative.libelle",
        TYPETEXTE: "type_texte.libelle",
        FICHIER: "fichier_join",
        DATE: "date_jours"
      },
      search: "",

      typeText_id: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "archivageDocuments",
      "typeTextes",
      "uniteAdministratives"
    ]),
    nbreDocumentParTypeTexte() {
      return typeText_id => {
        if (typeText_id != "") {
          return this.archivageDocuments.filter(
            element => element.type_texte.id == typeText_id
          ).length;
        }
      };
    },
    nomTypeText(){
  return typeText_id =>{
    if(typeText_id !=""){
      var ObjetTypetext = this.typeTextes.find(element => element.id == typeText_id)
      return ObjetTypetext.libelle
    }
  }
    },
  },
  methods: {
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>