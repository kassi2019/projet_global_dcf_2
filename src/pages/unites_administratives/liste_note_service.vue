
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
              <h5>Liste des notes de services</h5>
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
                    <th>Objet</th>
                    <th>Date Signature</th>
                    <th>Date Publication</th>
                    <th>Unite Administrative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="noteservice in filtre_Note_service"
                    :key="noteservice.id"
                  >
                    <td>{{noteservice.code || 'Non renseigné'}}</td>
                    <td>{{noteservice.objet || 'Non renseigné'}}</td>

                    <td>{{noteservice.date_signature || 'Non renseigné'}}</td>
                    <td>{{noteservice.date_publication || 'Non renseigné'}}</td>
                    <td>{{noteservice.unite_administrative.libelle || 'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_Note_service.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:30px;color:red;">Aucune Note de Service</p>
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
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "noteServices",
      "uniteAdministratives",
      "nbreNoteServices"
    ]),
    filtre_Note_service() {
      const st = this.search.toLowerCase();
      return this.noteServices.filter(noteservice => {
        return noteservice.unite_administrative.libelle
          .toLowerCase()
          .includes(st);
      });
    }
  }
};
</script>

