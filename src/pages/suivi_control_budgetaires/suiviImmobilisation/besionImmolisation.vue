
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.typeuniteadminist_id" >
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in type_Unite_admins"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.uniteadmin_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(formData.typeuniteadminist_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="formData.epuipement_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="equipe in equipements"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Désignation:</label>
                <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="formData.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(formData.epuipement_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.quantite"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix Unitaire:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.prix_unitaire"
                    class="span"
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>

          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotal"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date:</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
                        <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterBesoinImmoLocal(formData)"
          class="btn btn-primary"
          href="#"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.typeuniteadminist_id" >
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in type_Unite_admins"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.uniteadmin_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(editBesoinImmo.typeuniteadminist_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.epuipement_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="equipe in equipements"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Désignation:</label>
                <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="editBesoinImmo.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(editBesoinImmo.epuipement_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.quantite"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix Unitaire:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.prix_unitaire"
                    class="span"
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>

          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotalmodif"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date:</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editBesoinImmo.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
                        <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="hidden"
                   :value="Historqtemodifier"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)">Modifier</a>
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
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Bessoins Immobilisations de UA</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Type Unite administrative</th>
                    <th>Unite administrative</th>
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix Unitaire</th>
                    <th>Montant Total</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo, index) in filtre_besoinImmo"
                    :key="BesoinImmo.id"
                  >
                   <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.uniteAdminist.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.famille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
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
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin d'Immobolisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name: 'besionImmolisation',
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
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      },
      editBesoinImmo: {
        uniteadmin_id: "",
        famille_id: "",
        epuipement_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "trieUaImmobilisation",
      "equipements",
      "familles"
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


     filtre_besoinImmo() {
      const st = this.search.toLowerCase();
      return this.trieUaImmobilisation.filter(type => {
        return (
          type.typeUniteAdmin.libelle.toLowerCase().includes(st) ||
          type.uniteAdminist.libelle.toLowerCase().includes(st)||
          type.famille.libelle.toLowerCase().includes(st)
        );
      });
    },

    fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id == id);
        }
      };
    },

uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },

 Historqte() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
Historqtemodifier() {
      const val = parseInt(this.editBesoinImmo.quantite);
      return parseInt(val).toFixed(0);
    },
    fammillesDynamiques1() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id);
        }
      };
    },

    veifEquipementExist() {
      return this.formData.epuipement_id == "" && this.formData.typeuniteadmin_id == "" ;
    },

    montantTotal() {
      const val =
        parseFloat(this.formData.quantite) *
        parseFloat(this.formData.prix_unitaire);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    montantTotalmodif() {
      const val =
        parseFloat(this.editBesoinImmo.quantite) *
        parseFloat(this.editBesoinImmo.prix_unitaire);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    }
    // filtre_famille() {
    //   const st = this.search.toLowerCase();
    //   return this.trieUaImmobilisation.filter(type => {
    //     return type.designation.toLowerCase().includes(st);
    //   });
    // }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterBesoinImmobilisation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterBesoinImmoLocal() {
      var nouvelObjet = {
        ...this.formData,
        montant_total: this.montantTotal,
        historiqueqte: this.Historqte
      };
      this.ajouterBesoinImmo(nouvelObjet);
      this.formData = {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      };
    },
    // afficher modal de modification
    afficherModalModifierBesoinImmo(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
      this.modifierBesoinImmo(this.editBesoinImmo);
      this.$("#modificationModal").modal('hide');
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
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
</style>
