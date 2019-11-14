
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <div align="right">
            <div class="controls">
              <div data-toggle="buttons-checkbox" class="btn-group">
                <button class="btn btn-primary" type="button">Imprimer</button>
                <button class="btn btn-success" type="button">Exporter Excel</button>
              </div>
            </div>
          </div>-->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des acte de création</h5>
              <div align="right">
                Search:
                <input
                  type="search"
                  placeholder="Saisir Unite Administrative"
                  v-model="search"
                />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Type texte</th>
                    <th>Unité Administrative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="actecreation in filtreActeCreation"
                    :key="actecreation.id"
                  >
                    <td>{{actecreation.code || 'Non renseigné'}}</td>
                    <td>{{actecreation.libelle || 'Non renseigné'}}</td>
                    <td>{{actecreation.type_text.libelle || 'Non renseigné'}}</td>
                    <td>{{actecreation.unite_administrative.libelle || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtreActeCreation.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:30px;color:red;">Aucun Acte Creation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives"
    ]),

    filtreActeCreation() {
      const st = this.search.toLowerCase();
      return this.acteCreations.filter(actecreation => {
        return actecreation.unite_administrative.libelle
          .toLowerCase()
          .includes(st);
      });
    }
  }
};
</script>