
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
            title="Liste type texte"
            :data="filtre_archivage_document"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des type text</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie Code ou libelle" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in filtre_type_teste" :key="type.id">
                    <td>{{type.code || 'Non renseigné'}}</td>
                    <td>{{type.libelle || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_type_teste.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Type de texte</p>
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
export default {
  name:'listetypetexte',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),

    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.typeTextes.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
   
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

