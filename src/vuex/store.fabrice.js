import Vue from "vue";
import Vuex from "vuex";

import ModuleParametrageMenu from "./modules/parametrage_menu/index";
import Moduleuniteadministrative from "./modules/fabrice/uniteadministrative/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    parametrageMenu: ModuleParametrageMenu,
    uniteadministrative: Moduleuniteadministrative
  }
});
