import Vue from "vue";
import VueRouter from "vue-router";
import store from '../vuex/store'


import ActeurDepenseRoutes from "./acteur_depense/ActeurDepenseRoutes"


// les routes module unite administrative = gestion unite administrative
import UniteAdministativeRoute from "./unite_administrative/UniteAdministativeRoute";



// les routes de parametres generaux admoinistratifs
import AdministratifRoutesAdoni from './parametres_generaux/AdministratifRoutesAdoni'
// les routes de parametre generaux source de financements
import SourceFinancementRoutesAdoni from './parametres_generaux/SourceFinancementRoutesAdoni'

// les routes de parametre generaux unite
import parametreUniteRoutesAdoni from './parametres_generaux/ParametreUniteRoutesAdoni'
// routes fonctionnelle
import FonctionnelleRoutesAdoni from './parametres_generaux/FonctionnelleRoutesAdoni'
// route budgetaire
import BudgetaireRoutesAdoni from './parametres_generaux/BudgetaireRoutesAdoni'
// route activite
import ActiviteRoutesAdoni from './parametres_generaux/ActiviteRoutesAdoni'

//gestion des marches
import GestionMarcheRoutes from "./gestion_marche/GestionMarcheRoutes"

// suivi des immo
import suiviImmobilisationRoute from "./suiviImmobilisation/suiviImmobilisationRoute";

// route suivi mission
import MissionRoutes from './suivi_control/MissionRoutes';





// authentitification 
import AuthRoutes from './auth/AuthRoutes' 


Vue.use(VueRouter);


const regroupementDesRoutes = [
  AuthRoutes,
  ActeurDepenseRoutes,


  UniteAdministativeRoute,





  AdministratifRoutesAdoni,
  SourceFinancementRoutesAdoni,
  parametreUniteRoutesAdoni,
  FonctionnelleRoutesAdoni,
  BudgetaireRoutesAdoni,
  ActiviteRoutesAdoni,
  GestionMarcheRoutes,
  suiviImmobilisationRoute,
  MissionRoutes

];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
 // console.log(store)
  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.Utilisateurs.isLoggedIn) {
      // redirect to login page
      next({ name: 'Login' })
      return
  }

  // if logged in redirect to dashboard
  if(to.path === '/' && store.state.Utilisateurs.isLoggedIn) {
     next({ name: 'ExerciceBudgetaire' })
      return
  }

  next()
})

export default router;
