
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
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des unité d'administrative</h5>
              <div align="right">
                Recherche:
                <input
                  type="search"
                  v-model="search"
                  placeholder="Saisie unites administratives"
                />
              </div>
            </div>

            <div
              class="widget-content nopadding"
              v-if="type_Unite_admins.length && sections.length && chapitres.length "
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Type unite administrative</th>
                    <th>Section</th>
                    <th>Chapitre</th>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Date création</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="uniteadministrative in filtre_unite_admin"
                    :key="uniteadministrative.id"
                  >
                    <td>{{uniteadministrative.typeua.libelle || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.secti.nom_section || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.chpitr.libelle || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td>{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td>{{ formaterDate(uniteadministrative.date_creation) || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p>
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
export default {
  name:'listeuniteadministrative',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        CHAPITRE: "chpitr.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection"
      // "chapitres",
      // "sections"
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins"
    ]),

    filtre_unite_admin() {
      const st = this.search.toLowerCase();
      return this.jointureUaChapitreSection.filter(items => {
        return (
          items.code.toLowerCase().includes(st) ||
          items.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
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
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>