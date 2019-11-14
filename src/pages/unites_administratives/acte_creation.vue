
<template>
  <div>
    <!--//////////////////////////// debut modal d ajout ///////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Acte de Création</h3>
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
            <label class="control-label">Type Texte</label>
            <div class="controls">
              <select v-model="formData.typetext_id">
                <option v-for="test in typeTextes" :key="test.id" :value="test.id">{{test.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">UA</label>
            <div class="controls">
              <select v-model="formData.uniteadministrative_id">
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
          @click.prevent="ajouterActeCreationLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--//////////////////////////// fin modal d ajout ///////////////////////-->
    <!--//////////////////////////// debut modal de modification ///////////////////////-->
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Acte de Création</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editActeCreation.code"
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
                v-model="editActeCreation.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Type Texte</label>
            <div class="controls">
              <select v-model="editActeCreation.typetext_id">
                <option v-for="test in typeTextes" :key="test.id" :value="test.id">{{test.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">UA</label>
            <div class="controls">
              <select v-model="editActeCreation.uniteadministrative_id">
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
          @click.prevent="modifierActeCreationLocal(editActeCreation)"
          class="btn btn-primary"
          href="#"
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
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
              <h5>Liste des acte de création</h5>
              <div align="right">
                Search:
                <input
                  type="search"
                  placeholder="Code ou libelle ou type texte ou ua"
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(actecreation, index) in filtreActeCreation"
                    :key="actecreation.id"
                  >
                    <td
                      @dblclick="afficherModalModifierActeCreation(index)"
                    >{{actecreation.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierActeCreation(index)"
                    >{{actecreation.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierActeCreation(index)"
                    >{{actecreation.type_text.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierActeCreation(index)"
                    >{{actecreation.unite_administrative.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerActeCreation(actecreation.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
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
        libelle: "",
        typetext_id: "",
        uniteadministrative_id: ""
      },
      editActeCreation: {
        code: "",
        libelle: "",
        typetext_id: "",
        uniteadministrative_id: ""
      },
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
        return (
          actecreation.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          actecreation.libelle.toLowerCase().includes(st) ||
          actecreation.code.toLowerCase().includes(st) ||
          actecreation.type_text.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllActeCreation",
      "ajouterActeCreation",
      "modifierActeCreation",
      "supprimerActeCreation"
    ]),

    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterActeCreationLocal() {
      this.ajouterActeCreation(this.formData);

      this.formData = {
        code: "",
        libelle: "",
        typetext_id: "",
        uniteadministrative_id: ""
      };
    },
    // fonction pour vider l'input ajouter
    modifierActeCreationLocal() {
      this.modifierActeCreation(this.editActeCreation);

      this.editActeCreation = {
        code: "",
        libelle: "",
        typetext_id: "",
        uniteadministrative_id: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierActeCreation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeCreation = this.acteCreations[index];
    },
    alert() {
      console.log("ok");
    }
  }
};
</script>