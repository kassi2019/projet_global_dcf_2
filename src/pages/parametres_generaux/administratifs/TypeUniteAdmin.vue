
<template>
  <div>
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
              <h5>Liste des type unite d'administrative</h5>
              <div align="right">
                Rechercher:
                <input type="text" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(titre, index) in type_Unite_admins"
                    :key="titre.id"
                  >
                    <td
                      @dblclick="afficherModalModifierTitre(index)"
                    >{{titre.libelle || 'Non renseigné'}}</td>
                    <td>
                      <div class="btn-group">
                        <button
                          @click.prevent="supprimerTypeUniteAdministrative(titre.id)"
                          class="btn btn-danger"
                        >
                          <span class>
                            <i class="icon-trash"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>

    <!----- ajouter modal   ---->

    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter type Unite administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
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
        </form>
      </div>
      <div class="modal-footer">
        <button
          v-show="formData.libelle.length"
          @click.prevent="ajouterTitreLocal"
          class="btn btn-primary"
          href="#"
        >Valider</button>
        <button data-dismiss="modal" class="btn" href="#">Fermer</button>
      </div>
    </div>

    <!----- fin modal  ajouter  ---->

    <!----- modifier modal debut  ---->

    <div id="modifierModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier type unite administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input type="text" v-model="editTitre.libelle" class="span" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a @click.prevent="modifierTitreLocal(editTitre)" class="btn btn-primary" href="#">Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <!----- fin modifier modal  ---->
  </div>
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import { mapGetters, mapActions } from "vuex";
//import Filtrer from '../../../../utils/filtre'
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //     name: 'alertMe',
        //     icon: 'add_alert'
        // }
      ],

      formData: {
        libelle: ""
      },

      editTitre: {
        libelle: ""
      },
      search: ""
    };
  },

  created() {
    // this.getTitres()
  },
  computed: {
    // methode pour maper notre guetter
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"])

    // titreFiltres() {
    //   const searchTerm = this.search.toLowerCase();

    //   return this.type_Unite_admins.filter(item => {
    //     item.libelle.toLowerCase().includes(searchTerm);
    //   });
    // }
  },
  methods: {
    // methode pour notre action
    ...mapActions("parametreGenerauxAdministratif", [
      "ajouterTypeUniteAdministrative",
      "supprimerTypeUniteAdministrative",
      "modifierTypeUniteAdministrative"
    ]),

    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input
    ajouterTitreLocal() {
      this.ajouterTypeUniteAdministrative(this.formData);

      this.formData = {
        libelle: ""
      };
    },
    // afficher modal
    afficherModalModifierTitre(index) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTitre = this.type_Unite_admins[index];
    },
    // vider l'input modifier

    modifierTitreLocal() {
      this.modifierTypeUniteAdministrative(this.editTitre);
      this.$("#modifierModal").modal('hide');
      // this.editTitre = {
      //   libelle: ""
      // };
    }
  }
};
</script>

