import axios from "../../fabrice/SuiviImmobilisation/urls/api";
import { asyncLoading } from 'vuejs-loading-plugin'
var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });

//////////////////////////*debut action famille */////////////////////////////

// afficher liste famille
export function getAllFamille({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_famille")
      .then(response => {
        commit("GET_ALL_FAMILLE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterFamille({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_famille", {
      code: nouveau.code,
      libelle: nouveau.libelle,
      equipemt_id: nouveau.equipemt_id
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FAMILLE", response.data);
        dispatch('getAllEquipement')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}


// modifier
export function modifierFamille({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_famille/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle,
      equipemt_id: nouveau.equipemt_id
    }))
    .then(response => {
      commit("MODIFIER_FAMILLE", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerFamille({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_FAMILLE", id);
      dispatch('getAllEquipement')

      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_famille/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

//////////////////////////*debut action service */////////////////////////////

// afficher
export function getAllService({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_service")
      .then(response => {
        commit("GET_ALL_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterService({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_service", {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierService({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_service/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      commit("MODIFIER_SERVICE", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerService({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_SERVICE", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_service/" + id).then(() => dialog.close());
    });
}

/*fin action SERVICE */

//////////////////////////*debut action immobilisation*/////////////////////////////

// afficher
export function getAllImmobilisation({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_immobilisation")
      .then(response => {
        commit("GET_ALL_IMMOBILISATION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterImmobilisation({ commit }, formData) {
  asyncLoading(axios.post("/ajouter_immobilisation", formData)).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_IMMOBILISATION", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Enregistrement Effectué avec Succès!',
        type: "success"
      })
    }
  });
}

// modifier
export function modifierImmobilisation({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_immobilisation/" + nouveau.id, {
      type_immo: nouveau.type_immo,
      besoinimmo_id: nouveau.besoinimmo_id,
      identification: nouveau.identification,
      etat_immobilisation: nouveau.etat_immobilisation,
      date_acquisition: nouveau.date_acquisition,
      date_mise_service: nouveau.date_mise_service,
      numero_facture: nouveau.numero_facture,
      qte_reel: nouveau.qte_reel,
      qte_affecte: nouveau.qte_affecte,
      prixUnitaire: nouveau.prixUnitaire,
      total_actuel: nouveau.total_actuel,
      valeurorigine: nouveau.valeurorigine,
      duree: nouveau.duree,
      numero_CC: nouveau.numero_CC,
      acteurdepense_id: nouveau.acteurdepense_id,
      exercice_budgetaire_id: nouveau.exercice_budgetaire_id,
      service_id: nouveau.service_id,
      nature_bien: nouveau.nature_bien,
      nature_dentree: nouveau.nature_dentree,
      acteur_depense_id: nouveau.acteur_depense_id,
      // TVA_id: nouveau.TVA_id,
      montant_evaluation: nouveau.montant_evaluation,
      date_evaluation: nouveau.date_evaluation,
      montant_cession: nouveau.montant_cession,
      date_cession: nouveau.date_cession,
      cause_inactivite: nouveau.cause_inactivite,
      montant_amortissement_anterieur: nouveau.montant_amortissement_anterieur,
      date_amortissement_anterieur: nouveau.date_amortissement_anterieur
    }))
 
    .then(response => {
      commit("MODIFIER_IMMOBILISATION", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerImmobilisation({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_IMMOBILISATION", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_immobilisation/" + id)
        .then(() => dialog.close());
    });
}
export function afficherUnSeulImmobilisation({ commit }, id) {
  commit("GET_SEUL_IMMOBILISATION", id);

  axios.get("/seul_immobilisation/" + id);
}
/*fin action Immobilisation */

//////////////////////////*debut action amortissement */////////////////////////////

// afficher
export function getAllAmortissement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_amortissement")
      .then(response => {
        commit("GET_ALL_AMORTISSEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// // ajouter
// export function ajouterAmortissement({ commit }, nouveau) {

//   axios
//     .post("/ajouter_amortissement", {
//       type: nouveau.type,
//       immobilisation_id: nouveau.immobilisation_id,
//       taux: nouveau.taux,
//       valeur_origine: nouveau.valeur_origine,
//       dure: nouveau.dure,
//       exercice_budgetaire: nouveau.exercice_budgetaire,
//       mois: nouveau.mois,
//       jour: nouveau.jour,
//       annee: nouveau.annee,
//       annuite: nouveau.annuite
//     })
//     .then(response => {
//       if (response.status == 201) {
//         commit("AJOUTER_AMORTISSEMENT", response.data);
//         this.$app.$notify({
//           title: 'Success',
//           text: 'Enregistrement Effectué avec Succès!',
//           type: "success"
//         })
//       }
//     });
// }

// // modifier
// export function modifierAmortissement({ commit }, nouveau) {
//   axios
//     .put("/modifier_amortissement/" + nouveau.id, {
//       type: nouveau.type,
//       immobilisation_id: nouveau.immobilisation_id,
//       taux: nouveau.taux,
//       valeur_origine: nouveau.valeur_origine,
//       dure: nouveau.dure,
//       exercice_budgetaire: nouveau.exercice_budgetaire,
//       mois: nouveau.mois,
//       jour: nouveau.jour,
//       annee: nouveau.annee,
//       annuite: nouveau.annuite
//     })
//     .then(response => {
//       commit("MODIFIER_AMORTISSEMENT", response.data);
//       this.$app.$notify({
//         title: 'Success',
//         text: 'Modification Effectué avec Succès!',
//         type: "success"
//       })
//     });
// }
//supprimer
// export function supprimerAmortissement({ commit }, id) {
//   this.$app.$dialog
//     .confirm("Voulez vouz vraiment supprimer ?.")
//     .then(dialog => {
//       commit("SUPPRIMER_AMORTISSEMENT", id);
//       // // dialog.loading(false) // stops the proceed button's loader
//       axios.delete("/supprimer_amortissement/" + id).then(() => dialog.close());
//     });
// }

/*fin action amortissement */
// afficher liste besoin immo
export function getAllBesoinImmo({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_besoin_immo")
      .then(response => {
        commit("GET_ALL_BESOIN_IMMO", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterBesoinImmo({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_besoin_immo", {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour,
      historiqueqte: nouveau.historiqueqte
    }))
     .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BESOIN_IMMO", response.data);
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierBesoinImmo({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_besoin_immo/" + nouveau.id, {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour,
      historiqueqte: nouveau.historiqueqte
    }))
    .then(response => {
      commit("MODIFIER_BESOIN_IMMO", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}

export function modifierQuantiteReel({ commit }, objet) {
 // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
      quantite: objet.qte_actu
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_QUANTITE_REEL", response.objet)
    });
}
export function modifierMontantActuel({ commit }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
    montant_total : objet.montant_actu
    
  })
    .then(response => {
      commit("MODIFIER_MONTANT_ACTUEL", response.objet);
    });
}
export function modifierQteRealisebesoin({ commit }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
    qterealise: objet.qte_real
    // ,
    // montant_total = objet.montant_actu
  })
    .then(response => {
      commit("MODIFIER_QTE_REALISE_BESOIN", response.objet)
    });
}
// export function modifierActeurDepenses({ commit }, objet) {
//    axios.put("/update_act_personnel/" + objet.id, {
//      equipe_immo: objet.equipemt
//   })
//     .then(response => {
//       commit("MODIFIER_ACT_PERSONNEL", objet);
//     });
// }

//supprimer
export function supprimerBesoinImmo({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BESOIN_IMMO", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_besoin_immo/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

// afficher liste famille
export function getAllEquipement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_equipement")
      .then(response => {
        commit("GET_ALL_EQUIPEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterEquipement({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_equipement", {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
 
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EQUIPEMENT", response.data);
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierEquipement({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_equipement/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      commit("MODIFIER_EQUIPEMENT", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerEquipement({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_EQUIPEMENT", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_equipement/" + id).then(() => dialog.close());
    });
}

/*fin action famille */
