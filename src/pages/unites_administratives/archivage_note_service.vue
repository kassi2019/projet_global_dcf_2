
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Archivage des notes de services</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Fichier Join</label>
            <div class="controls">
              <input type="file" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Note Service</label>
            <div class="controls">
              <select v-model="formData.noteservice_id">
                <option
                  v-for="noteservice in noteServices"
                  :key="noteservice.id"
                  :value="noteservice.id"
                >{{noteservice.objet}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterArchivageNoteServiceLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Archivage des notes de services</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editArchivageNoteService.code"
                class="span"
                placeholder="Saisir le code"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editArchivageNoteService.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Fichier</label>
            <div class="controls">
              <input type="text" v-model="editArchivageNoteService.fichier" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Note Service</label>
            <div class="controls">
              <select v-model="editArchivageNoteService.noteservice_id">
                <option
                  v-for="noteservice in noteServices"
                  :key="noteservice.id"
                  :value="noteservice.id"
                >{{noteservice.objet}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierArchivageNoteServiceLocal(editArchivageNoteService)"
          class="btn btn-primary"
          href="#"
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Archivage des notes de service</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Libelle</th>
                    <th>Fichier</th>
                    <th>Note Service</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(archivagenoteservice, index) in filtre_archivage_note"
                    :key="archivagenoteservice.id"
                  >
                    <td
                      @dblclick="afficherArchivageNoteServiceLocal(index)"
                    >{{archivagenoteservice.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageNoteServiceLocal(index)"
                    >{{archivagenoteservice.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageNoteServiceLocal(index)"
                    >{{archivagenoteservice.fichier || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageNoteServiceLocal(index)"
                    >{{archivagenoteservice.note_service.objet || 'Non renseigné'}}</td>

                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerArchivageNoteService(archivagenoteservice.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_archivage_note.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:30px;color:red;">Aucun Archivage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
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
        //   icon: "add_alert"
        // }
      ],
      formData: {
        code: "",
        libelle: "",
        fichier: "",
        noteservice_id: ""
      },
      editArchivageNoteService: {
        code: "",
        libelle: "",
        fichier: "",
        noteservice_id: ""
      },
      search: "",
      file: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "archivageNoteServices",
      "noteServices",
      "uniteAdministratives"
    ]),
    filtre_archivage_note() {
      const st = this.search.toLowerCase();
      return this.archivageNoteServices.filter(archivagenoteservice => {
        return (
          archivagenoteservice.code.toLowerCase().includes(st) ||
          archivagenoteservice.libelle.toLowerCase().includes(st) ||
          archivagenoteservice.note_service.objet.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllArchivageNoteService",
      "ajouterArchivageNoteService",
      "modifierArchivageNoteService",
      "supprimerArchivageNoteService"
    ]),

    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterArchivageNoteServiceLocal() {
      this.ajouterArchivageNoteService(this.formData);

      this.formData = {
        code: "",
        libelle: "",
        fichier: "",
        noteservice_id: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierArchivageNoteServiceLocal() {
      this.modifierArchivageNoteService(this.editArchivageNoteService);

      this.editArchivageNoteService = {
        code: "",
        libelle: "",
        fichier: "",
        noteservice_id: ""
      };
    },
    // afficher modal de modification
    afficherArchivageNoteServiceLocal(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editArchivageNoteService = this.archivageNoteServices[index];
    },
    alert() {
      console.log("ok");
    },
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
    }
  }
};
</script>