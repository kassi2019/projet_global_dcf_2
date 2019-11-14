
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="container-fluid">
            <div class="quick-actions_homepage deplaceCar1">
              <ul class="quick-actions">
                <li class="bg_lb" title="nombre de famille d'immobilisation">
                  <a href="#">
                    <i class="icon-list-ol"></i>
                    <span class="label label-important">{{tauximmobilisationUa}}%</span> TAUX IMMOBILISATION DE UA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Voir le Taux Par Unité Administrative</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>
            <div class="widget-title">
              <div align="right">
                UA:
                <select>
                  <option value="Null"></option>
                  <!-- <option
                    v-for="uniteAdmin in uniteAdministratives"
                    :key="uniteAdmin.id"
                    :value="uniteAdmin.id"
                  >{{uniteAdmin.libelle}}</option>-->
                </select>
                Acteur Depense:
                <select>
                  <option value="Null"></option>
                  <!-- <option
                    v-for="acteurDepen in all_acteur_depense"
                    :key="acteurDepen.id"
                    :value="acteurDepen.id"
                  >{{acteurDepen.matricule}}</option>-->
                </select>
              </div>
            </div>
            <div class="table-responsive text-nowrap" v-if="all_acteur_depense.length">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>Code</th> -->
                    <th>Type</th>
                    <th>Designation</th>
                    <th>exercice</th>
                    <th>Etat Immo</th>
                    <th>Date Service</th>
                    <th>Date Acquis</th>

                    <th>Service</th>
                    <th title="Quantité">Qte</th>
                    <th>Prix Unitaire</th>
                    <th>Famille</th>
                    <th>Valeur Origine</th>
                    <th>Acteur Depense</th>
                    <th>ua</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="immo in filtre_immobilisation" :key="immo.id">
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.type || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.designation || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.exoBudgetaire.annee || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.etat_immobilisation || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{formaterDate(immo.date_mise_service) || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{formaterDate(immo.date_acquisition) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.relation_service.libelle || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.quantite || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.prix_unitaire || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.reletion_famille.libelle || 'Non renseigné'}}</td>

                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.valeur_origine || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.acteurDepense.matricule || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierImmobilisation(immo.id)"
                    >{{immo.acteurDepense.uniteAdmin.libelle || 'Non renseigné'}}</td>
                    <td>
                      <router-link
                        :to="{name : 'Detailimmobilisation', params: {id_immobilisation:immo.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun immobilisations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  name:'RechercheTauxUniteAd',
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
      formData: {},

      editImmobilisation: {},

      search: ""
    };
  },
  mounted() {
    this.formData = this.SuiviImmo.find(
      immo => immo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "SuiviImmo",
      "familles",
      "services",
      "tauximmobilisationUa"
    ]),
    // ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("personnelUA", ["all_acteur_depense"]),
    filtre_immobilisation() {
      const st = this.search.toLowerCase();
      return this.SuiviImmo.filter(immo => {
        return (
          immo.relation_service.libelle.toLowerCase().includes(st) ||
          immo.reletion_famille.libelle.toLowerCase().includes(st) ||
          immo.acteurDepense.uniteAdmin.libelle.toLowerCase().includes(st) ||
          immo.acteurDepense.matricule.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", ["getAllImmobilisation"]),

    // afficher modal de modification
    afficherModalModifierImmobilisation(id) {
      this.$router.push({
        path: "/Voir_immo/" + id
      });
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
  }
};
</script>

