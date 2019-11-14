import Famille from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Famille.vue";
import Service from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Service.vue";
import Amortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Amortissement.vue";
import Immobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Immobilisation.vue";
import AjouterImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AjouterImmobilisation.vue";
import ModifierImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ModifierImmobilisation.vue";
// import immobilisationParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/immobilisationParService.vue";
// import VoirImmoParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/VoirImmoParService.vue";
import TableauBordImmo from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo.vue";
import RechercheTauxParUniteAdm from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RechercheTauxParUniteAdm.vue";
import DetailImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/DetailImmobilisation.vue";
import besionImmolisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/besionImmolisation.vue";
import listeEquipement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeEquipement.vue";
import listeBesoinParUniteAdmin from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeBesoinParUniteAdmin.vue";
import listeImmobilisationParUa from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeImmobilisationParUa.vue";
// import listeImmoParServiceParAgent from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeImmoParServiceParAgent.vue";
// import TauxEquipementMinistère from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TauxEquipementMinistère.vue";
import listeActeurEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeActeurEquipe.vue";
import listeStructurePlusEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructurePlusEquipe.vue";
import listeStructureMoinEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructureMoinEquipe.vue";
import simulationAmortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/simulationAmortissement.vue";
const suiviImmobilisationRoutes = [
  {
    path: "/simulationAmortissement",
    name: "simulationAmortissement",
    component: simulationAmortissement
  },
  {
    path: "/liste-Structure-Moin-Equipe",
    name: "listeStructureMoinEquipe",
    component: listeStructureMoinEquipe
  },
  {
    path: "/liste-Structure-Plus-Equipe",
    name: "listeStructurePlusEquipe",
    component: listeStructurePlusEquipe
  },
  {
    path: "/listeActeurEquipe", 
    name: "listeActeurEquipe",
    component: listeActeurEquipe
  },
  // {
    
  //   path: "/Taux-Equipement-Ministère",
  //   name: "TauxEquipementMinistère",
  //   component: TauxEquipementMinistère
  // },
  // {
  //   path: "/liste-immo-par-service-et-agent",
  //   name: "listeImmoParServiceParAgent",
  //   component: listeImmoParServiceParAgent
  // },
  {
    path: "/liste-immo-par-ua",
    name: "listeImmobilisationParUa",
    component: listeImmobilisationParUa
  },
  {
    path: "/liste-Besoin-par-ua",
    name: "listeBesoinParUniteAdmin",
    component: listeBesoinParUniteAdmin
  },
  {
    path: "/liste-Equipement",
    name: "listeEquipement",
    component: listeEquipement
  },
  {
    path: "/besion-Immolisation",
    name: "besionImmolisation",
    component: besionImmolisation
  },
  {
    path: "/famille",
    name: "famille",
    component: Famille
  },

  {
    path: "/service",
    name: "service",
    component: Service
  },
  {
    path: "/amortissement/:id",
    name: "amortissement",
    component: Amortissement
  },
  {
    path: "/immobilisation",
    name: "immobilisation",
    component: Immobilisation
  },
  {
    path: "/Ajouter_immobilisation",
    name: "AjouterImmobilisation",
    component: AjouterImmobilisation
  },
  {
    path: "/Modifier_immobilisation/:id",
    name: "formulaireModifierImmobilisation",
    component: ModifierImmobilisation
  },
  // {
  //   path: "/Recherche_immo_par_service",
  //   name: "RechercheImmoParService",
  //   component: immobilisationParService
  // },
  // {
  //   path: "/Voir_immo/:id",
  //   name: "afficherImmobilisation",
  //   component: VoirImmoParService
  // },
  
  {
    path: "/TableauBordImmo",
    name: "TableauBordImmo",
    component: TableauBordImmo
  },

  {
    path: "/Recherche-Taux-UniteAd",
    name: "RechercheTauxUniteAd",
    component: RechercheTauxParUniteAdm
  },
  
  
  //detail immobilisation
  {
    path: "/Detail-Immobilisation/:id_immobilisation",
    name: "Detailimmobilisation",
    component: DetailImmobilisation
  }
];

export default suiviImmobilisationRoutes;
