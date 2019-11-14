
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Archivage Document</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Réference:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference"
                class="span"
                placeholder="Saisir la Réference"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date:</label>
            <div class="controls">
              <input type="date" v-model="formData.date_jours" class="span" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Fichier Join</label>
            <div class="controls">
              <!-- <input type="file" @change="onFichierChange"/> -->
                <input type="file" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Unite Administrative</label>
            <div class="controls">
              <select v-model="formData.uniteadministrative_id">
                <option
                  v-for="uniteadministrative in uniteAdministratives"
                  :key="uniteadministrative.id"
                  :value="uniteadministrative.id"
                >{{uniteadministrative.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Type Texte</label>
            <div class="controls">
              <select v-model="formData.typetexte_id">
                <option
                  v-for="typetexte in typeTextes"
                  :key="typetexte.id"
                  :value="typetexte.id"
                >{{typetexte.libelle}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterArchivageDocumentLocal(formData)"
          class="btn btn-primary"
          v-show="formData.reference.length && formData.uniteadministrative_id && formData.typetexte_id"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Archivage Document</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Réference:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editArchivageDocument.reference"
                class="span"
                placeholder="Saisir la Réference"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Date:</label>
            <div class="controls">
              <input type="date" v-model="editArchivageDocument.date_jours" class="span" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Fichier Join</label>
            <div class="controls">
              <input type="file" />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Unite Administrative</label>
            <div class="controls">
              <select v-model="editArchivageDocument.uniteadministrative_id">
                <option
                  v-for="uniteadministrative in uniteAdministratives"
                  :key="uniteadministrative.id"
                  :value="uniteadministrative.id"
                >{{uniteadministrative.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Type Texte</label>
            <div class="controls">
              <select v-model="editArchivageDocument.typetexte_id">
                <option
                  v-for="typetexte in typeTextes"
                  :key="typetexte.id"
                  :value="typetexte.id"
                >{{typetexte.libelle}}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierArchivageDocumentLocal(editArchivageDocument)"
          class="btn btn-primary"
          v-show="editArchivageDocument.reference.length && editArchivageDocument.uniteadministrative_id && editArchivageDocument.typetexte_id"
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
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Archivages document"
            :data="filtre_archivage_document"
            name="Liste des Archivages document"
          
            worksheet="Archivage de document"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes Archivages Documents</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie ua ou type texte" v-model="search" />
              </div>
            </div>

            <div
              class="widget-content nopadding"
              v-if="uniteAdministratives.length &&  filtre_archivage_document.length"
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Réference</th>
                    <th>Fichier</th>
                    <th>Date</th>
                    <th>Unite Administrative</th>
                    <th>Type Texte</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(archivagedocument, index) in filtre_archivage_document"
                    :key="archivagedocument.id"
                  >
                    <td
                      @dblclick="afficherArchivageDocumentLocal(index)"
                    >{{archivagedocument.reference || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageDocumentLocal(index)"
                    >{{archivagedocument.fichier || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageDocumentLocal(index)"
                    >{{formaterDate(archivagedocument.date_jours) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageDocumentLocal(index)"
                    >{{archivagedocument.unite_administrative.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherArchivageDocumentLocal(index)"
                    >{{archivagedocument.type_texte.libelle|| 'Non renseigné'}}</td>

                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerArchivageDocument(archivagedocument.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Document</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterArchivage" main-icon="apps" bg-color="green"></fab>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterArchivage()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  name:'archivagedocument',
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
      formData: {
        reference: "",
        uniteadministrative_id: "",
        typetexte_id: "",
        fichier_join: "",
        date_jours: ""
       
      },
      editArchivageDocument: {
        reference: "",
        uniteadministrative_id: "",
        typetexte_id: "",
        fichier_join: "",
        date_jours: ""
      
      },
      search: "",
      files: []
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "archivageDocuments",
      "typeTextes",
      "uniteAdministratives"
    ]),
    filtre_archivage_document() {
      const st = this.search.toLowerCase();
      return this.archivageDocuments.filter(archivagedocument => {
        return (
          archivagedocument.reference.toLowerCase().includes(st) ||
          archivagedocument.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          archivagedocument.type_texte.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllArchivageDocument",
      "ajouterArchivageDocument",
      "modifierArchivageDocument",
      "supprimerArchivageDocument"
    ]),

    //fichier joint
 onFichierChange(e){
      this.formData.fichier_join = e.target.files[0]
    },
    afficherModalAjouterArchivage() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterArchivageDocumentLocal() {
      this.ajouterArchivageDocument(this.formData);

      this.formData = {
        reference: "",
        uniteadministrative_id: "",
        typetexte_id: "",
        fichier_join: "",
        date_jours: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierArchivageDocumentLocal() {
      this.modifierArchivageDocument(this.editArchivageDocument);
      this.$("#modificationModal").modal('hide');
      // this.editArchivageDocument = {
      //   reference: "",
      //   uniteadministrative_id: "",
      //   typetexte_id: "",
      //   fichier_join: "",
      //   date_jours: ""
      // };
    },
    // afficher modal de modification
    afficherArchivageDocumentLocal(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editArchivageDocument = this.archivageDocuments[index];
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