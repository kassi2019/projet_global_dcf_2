
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Famille</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d'équipement:</label>
            <div class="controls">
              <select v-model="formData.equipemt_id">
                <option
                  v-for="equip in equipements"
                  :key="equip.id"
                  :value="equip.id"
                >{{equip.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Classe:</label>
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
        <h3>Modifier Famille</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type d' équipement:</label>
            <div class="controls">
              <select v-model="editFamille.equipemt_id">
                <option
                  v-for="equip in equipements"
                  :key="equip.id"
                  :value="equip.id"
                >{{equip.libelle}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Classe:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editFamille.code"
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
                v-model="editFamille.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editFamille)"
          class="btn btn-primary"
          href="#"
          v-show="editFamille.code.length && editFamille.libelle.length"
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
            title="Liste des Articles"
            :data="filtre_famille"
            name="Liste des Articles"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Articles</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="equipements.length && persoEquipement.length">
              <ArticleItemComponent v-for="equipement in equipements"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierFamille" 
                @suppression="supprimerArticle"
                >
              </ArticleItemComponent>

              <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div>

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>

    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import ArticleItemComponent from './ArticleItemComponent'
export default {
  name: 'Famille',
 components: {
      ArticleItemComponent
  },
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
        TYPE_EQUIPEMENT: "equipemt.libelle",
        CODE: "code",
        LIBELLE: "libelle"
      },

      formData: {
        code: "",
        libelle: "",
        equipemt_id: ""
      },
      editFamille: {
        code: "",
        libelle: "",
        equipemt_id: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "familles",
      "equipements",
      "persoEquipement"
    ]),
    filtre_famille() {
      const st = this.search.toLowerCase();
      return this.persoEquipement.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllFamille",
      "ajouterFamille",
      "modifierFamille",
      "supprimerFamille"
    ]),

    supprimerArticle(id){
      this.supprimerFamille(id)
    },
    
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
      this.ajouterFamille(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(article) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editFamille = article;
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      this.modifierFamille(this.editFamille);
this.$("#modificationModal").modal('hide');
      // this.editFamille = {
      //   code: "",
      //   libelle: ""
      // };
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

