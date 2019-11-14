
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Equipement</h3>
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
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFamilleLocal(formData)"
          class="btn btn-primary"
          href="#"
          v-show="formData.code.length && formData.libelle.length"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Equipement</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editEquipement.code"
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
                v-model="editEquipement.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editEquipement)"
          class="btn btn-primary"
          href="#"
          v-show="editEquipement.code.length && editEquipement.libelle.length"
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
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste Types équipements</h5>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(equipement, index) in filtre_equipement"
                    :key="equipement.id"
                  >
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{equipement.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{equipement.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerEquipement(equipement.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_equipement.length"></div>
              <div v-else>
                <p
                  style="text-align:center;font-size:20px;color:red;"
                >Aucun type equipement disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'listeEquipement',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },

      formData: {
        code: "",
        libelle: ""
      },
      editEquipement: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["equipements"]),
    filtre_equipement() {
      const st = this.search.toLowerCase();
      return this.equipements.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllEquipement",
      "ajouterEquipement",
      "modifierEquipement",
      "supprimerEquipement"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
      this.ajouterEquipement(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editEquipement = this.equipements[index];
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      this.modifierEquipement(this.editEquipement);
      this.$("#modificationModal").modal('hide');
    },
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

