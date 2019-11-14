import Vue from "vue";
import Vuex from "vuex";

import ModuleParametrageMenu from './modules/parametrage_menu/index'
import UtilisateursModule from './modules/auth/index'

import ModulePersonnelUniteAdmin from "./modules/guei/personnel_ua/index"

import Moduleuniteadministrative from "./modules/fabrice/uniteadministrative/index";

import ModuleParametreGenerauxAdmnistratif from './modules/parametres_generaux/administratifs/index'
import SousModuleParametreGenerauxSourceDeFinancement from './modules/parametres_generaux/souce-de-financement/index'
import SousModuleParametreGenerauxProgrammeUnite from './modules/parametres_generaux/parametre_unite/index'
import SousModuleParametreGenerauxFonctionnelle from './modules/parametres_generaux/plan-fonctionnelle/index'
import SousModuleParametreGenerauxBudgetaire from './modules/parametres_generaux/nature_depense/index'
import SousModuleParametreGenerauxActivite from './modules/parametres_generaux/activite/index'
//gestion des marches
import ModuleGestionMarche from "./modules/guei/gestion_marche/index"
// suivi des immo
import ModuleSuiviImmobilisation from "./modules/fabrice/SuiviImmobilisation/index";

// suivi des missions
import ModuleSuiviMission from './modules/suivi_controle_budgetaire/index'





Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      parametrageMenu: ModuleParametrageMenu,
      Utilisateurs: UtilisateursModule,
      personnelUA:ModulePersonnelUniteAdmin,
      uniteadministrative: Moduleuniteadministrative,
      parametreGenerauxAdministratif: ModuleParametreGenerauxAdmnistratif,
      parametreGenerauxSourceDeFinancement: SousModuleParametreGenerauxSourceDeFinancement,
      parametreGenerauxProgrammeUnite: SousModuleParametreGenerauxProgrammeUnite,
      parametreGenerauxFonctionnelle: SousModuleParametreGenerauxFonctionnelle ,
      parametreGenerauxBudgetaire: SousModuleParametreGenerauxBudgetaire,
      parametreGenerauxActivite:SousModuleParametreGenerauxActivite,
      gestionMarche:ModuleGestionMarche,
      SuiviImmobilisation: ModuleSuiviImmobilisation,
      suivi_controle_budgetaire : ModuleSuiviMission


      


    }
  })
