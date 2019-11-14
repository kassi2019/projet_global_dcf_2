
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter une Note de service</h3>
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
            <label class="control-label">Objet:</label>
            <div class="controls">
              <input type="text" v-model="formData.objet" class="span" placeholder="Saisir l'Objet" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date Signature:</label>
            <div class="controls">
              <div data-date="12-02-2012">
                <input
                  type="date"
                  v-model="formData.date_signature"
                  value="12-02-2012"
                  data-date-format="mm-dd-yyyy"
                  class="span"
                />
              </div>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date Publication:</label>
            <div class="controls">
              <div data-date="12-02-2012">
                <input
                  type="date"
                  v-model="formData.date_publication"
                  value="12-02-2012"
                  data-date-format="mm-dd-yyyy"
                  class="span"
                />
              </div>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Unite Administrative:</label>
            <div class="controls">
              <select v-model="formData.unite_administrative_id">
                <option
                  v-for="administrative in uniteAdministratives"
                  :key="administrative.id"
                  :value="administrative.id"
                >{{administrative.libelle}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterNoteService(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.objet.length && formData.date_signature.length && formData.date_publication.length "
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier une Note de service</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editNoteService.code"
                class="span"
                placeholder="Saisir le code"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Objet:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editNoteService.objet"
                class="span"
                placeholder="Saisir l'Objet"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date Signature:</label>
            <div class="controls">
              <div data-date="12-02-2012">
                <input
                  type="date"
                  v-model="editNoteService.date_signature"
                  value="12-02-2012"
                  data-date-format="mm-dd-yyyy"
                  class="span"
                />
              </div>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date Publication:</label>
            <div class="controls">
              <div data-date="12-02-2012">
                <input
                  type="date"
                  v-model="editNoteService.date_publication"
                  value="12-02-2012"
                  data-date-format="mm-dd-yyyy"
                  class="span"
                />
              </div>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Unite Administrative:</label>
            <div class="controls">
              <select v-model="editNoteService.unite_administrative_id">
                <option
                  v-for="administrative in uniteAdministratives"
                  :key="administrative.id"
                  :value="administrative.id"
                >{{administrative.libelle}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierNoteServiceLocal(editNoteService)"
          class="btn btn-primary"
          href="#"
          v-show="editNoteService.code.length && editNoteService.objet.length && editNoteService.date_signature.length && editNoteService.date_publication.length "
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
              <h5>Liste des notes de services</h5>
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
                    <th>Objet</th>
                    <th>Date Signature</th>
                    <th>Date Publication</th>
                    <th>Unite Administrative</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(noteservice, index) in filtre_Note_service"
                    :key="noteservice.id"
                  >
                    <td
                      @dblclick="afficherModalModifierNoteService(index)"
                    >{{noteservice.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierNoteService(index)"
                    >{{noteservice.objet || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierNoteService(index)"
                    >{{noteservice.date_signature || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierNoteService(index)"
                    >{{noteservice.date_publication || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierNoteService(index)"
                    >{{noteservice.unite_administrative.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerNoteService(noteservice.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
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
      ],
      formData: {
        code: "",
        objet: "",
        date_signature: "",
        date_publication: "",
        unite_administrative_id: ""
      },
      editNoteService: {
        code: "",
        objet: "",
        date_signature: "",
        date_publication: "",
        unite_administrative_id: ""
      },
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
        return (
          noteservice.unite_administrative.libelle.toLowerCase().includes(st) ||
          noteservice.objet.toLowerCase().includes(st) ||
          noteservice.code.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "supprimerNoteService"
    ]),

    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterNoteServiceLocal() {
      this.ajouterNoteService(this.formData);

      this.formData = {
        code: "",
        objet: "",
        date_signature: "",
        date_publication: "",
        unite_administrative_id: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierNoteServiceLocal() {
      this.modifierNoteService(this.editNoteService);

      this.editNoteService = {
        code: "",
        objet: "",
        date_signature: "",
        date_publication: "",
        unite_administrative_id: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierNoteService(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editNoteService = this.noteServices[index];
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>

