import uniteadministrative from "../../pages/unites_administratives/unite_administrative.vue";
import tableaudebord from "../../pages/unites_administratives/tableau_de_bord.vue";
import typetext from "../../pages/unites_administratives/type_texte.vue";
import archivagedocument from "../../pages/unites_administratives/archivage_document.vue";
import listeuniteadministrative from "../../pages/unites_administratives/liste_unite_administrative.vue";
import listetypetexte from "../../pages/unites_administratives/liste_type_texte.vue";
import ordonnedocua from "../../pages/unites_administratives/ordonne_doc_ua.vue";



const UniteAdministativeRoutes = [
  {
    path: "/unite-administrative",
    name: "uniteadministrative",
    component: uniteadministrative
  },
  {
    path: "/ordonne_doc_ua",
    name: "ordonnedocua",
    component: ordonnedocua
  },
  {
    path: "/liste-unite-administrative",
        name: "listeuniteadministrative",
        component: listeuniteadministrative
  },
  {
    path: "/liste_type_texte",
    name: "listetypetexte",
    component: listetypetexte
  },
  {
    path: "/tableau_de_bord",
    name: "tableaudebord",
    component: tableaudebord
  },

  {
    path: "/type-text",
    name: "typetext",
    component: typetext
  },
  {
    path: "/archivage_document",
    name: "archivagedocument",
    component: archivagedocument
  }
];

export default UniteAdministativeRoutes;
