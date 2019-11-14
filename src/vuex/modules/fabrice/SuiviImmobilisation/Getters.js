import { groupBy } from "../../../../Repositories/Repository";

const familles = state =>
  state.familles.sort((a, b) => (a.code > b.code ? 1 : -1));

const services = state =>
  state.services.sort((a, b) => (a.code > b.code ? 1 : -1));
const amortissements = state =>
  state.amortissements.sort((a, b) => (a.code > b.code ? 1 : -1));
const immobilisations = state =>
  state.immobilisations.sort((a, b) => (a.id > b.id ? 1 : -1));
const besoinImmobilisations = state =>
  state.besoinImmobilisations.sort((a, b) =>
    a.quantite > b.quantite ? 1 : -1
  );

const equipements = state =>
  state.equipements.sort((a, b) => (a.code > b.code ? 1 : -1));

export const listeImmoRealise = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service !== null
  );
export const listeImmoPrevue = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service == null
  );

////////////getter des migration des cle etrangere/////////

export const SuiviImmo = (state, getters, rootState, rootGetters) =>
  state.immobilisations.map(element => {
    if (
      element.familleimmo_id !== null &&
      element.acteurdepense_id !== null &&
      element.acteurdepense_id !== null &&
      element.uniteadministrative_id !== null &&
      element.typeuniteadminis_id !== null &&
      element.besoinimmo_id !== null
    ) {
      element = {
        ...element,
        exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(exercice => exercice.id == element.exercice_budgetaire_id),
        acteurDepense: rootGetters["personnelUA/personnaliseActeurDepense"].find(auteurDep => auteurDep.id == element.acteurdepense_id),
          uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),
          
        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(Famileimmo => Famileimmo.id == element.familleimmo_id),

        serviceImmo: rootGetters["SuiviImmobilisation/services"].find(servImmo => servImmo.id == element.service_id),
        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminis_id        
        ),
        BesoinImmobilisation: rootGetters["SuiviImmobilisation/trieUaImmobilisation"].find(besoinimmo => besoinimmo.id == element.besoinimmo_id)
      
      };
    }

    return element;
  });

groupTriUaImmo
//////////////////////////////////////fin///////////////


export const getPersonnaliseSuivImmo = (state, getters, rootState, rootGetters) =>
  state.immobilisations.map(element => {
    if (element.famille_id !== null) {
      element = {
        ...element,
        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(familImmo => familImmo.id == element.famille_id)
      };
    }

    return element;
  });

export const personBesoinImmo = (state, getters, rootState, rootGetters) =>
  state.besoinImmobilisations.map(element => {
    if (element.uniteadmin_id !== null && element.typeuniteadminist_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )
      };
    }

    return element;
  });
  
export const trieUaBesoinImmo = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.quantite !== 0
  );

export const trieUaImmobilisation = (state, getters, rootState, rootGetters) =>
  state.besoinImmobilisations.map(element => {
    if (element.uniteadmin_id !== null && element.famille_id !== null && element.typeuniteadminist_id !==null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamille => equipefamille.id == element.famille_id
        ),
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )
      };
    }

    return element;
  });
export const trieUaImmo = (state, getters, rootState, rootGetters) =>
  getters.trieUaBesoinImmo.map(element => {
    if (element.uniteadmin_id !== null && element.famille_id !== null && element.typeuniteadminist_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamille => equipefamille.id == element.famille_id
        ),
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )
      };
    }

    return element;
  });

export const groupTriUaImmo = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.trieUaImmo, "typeuniteadminist_id");
};

// export const groupTriUa = (state, getters) => {
//   //delete getters.trieUaImmobilisation.
//   return groupBy(getters.trieUaImmobilisation, "typeuniteadminist_id");
// };


//////////////// getter calcul des nombre////////////////
export const nombreTotalBesoinImmoUa = state =>
  state.besoinImmobilisations.length;
export const nombreFamilleArticle = state => state.familles.length;
export const nombreServices = state => state.services.length;
export const nombreAmortissement = state => state.amortissements.length;
export const nombreImmobilisation = state => state.besoinImmobilisations.length;
export const nbreImmoRealise = state =>
  state.besoinImmobilisations.filter(Immrealise => Immrealise.quantite == 0)
    .length;

export const NbreImmobilisationPrevue = state =>
  state.besoinImmobilisations.filter(
    immobilisationPrevu => immobilisationPrevu.quantite !== 0
  );

export const SommeEquipementPrevue = (state, getters) =>
  getters.NbreImmobilisationPrevue.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.quantite),
    0
  );

export const SommeEquipementActuel = (state, getters) =>
  getters.SuiviImmo.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.qte_actuel),
    0
  ); 

export const SommeEquipementRealise = (state, getters) =>
  getters.SuiviImmo.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.qte_affecte),
    0
  );


export const nombreTotalEquipement = (state, getters) =>
  getters.besoinImmobilisations.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.historiqueqte),
    0
  );




// export const nombreTotalEquipement = (state, getters) => {
//   const val = parseInt(
//     getters.SommeEquipementPrevue + getters.SommeEquipementRealise
//   ).toFixed(0);
//   if (isNaN(val)) return null;
//   return val;
// };

export const tauxEquipementRealise = (state, getters) => {
  const val = parseFloat(
    (getters.SommeEquipementRealise / getters.nombreTotalEquipement) * 100
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};
export const tauxEquipementPrevue = (state, getters) => {
  const val = parseFloat(
    (getters.SommeEquipementPrevue / getters.nombreTotalEquipement) * 100
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};

export const tauxGlobalEquipement = (state, getters) => {
  const val = parseFloat(
    (getters.tauxEquipementRealise - getters.tauxEquipementPrevue) 
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};

////////////////////getter calcul pourcentage///////////////
// export const volumeImmoPrevu = (state, getters) => {
//   const val = parseFloat(
//     getters.SommeEquipementPrevue / getters.nombreEquipement
//   ).toFixed(2);
//   if (isNaN(val)) return null;
//   return val;
// };

// export const tauximmobilisationUa = (state, getters) => {
//   const val = parseFloat((1 / getters.nombreImmobilisation) * 100).toFixed(2);
//   if (isNaN(val)) return null;
//   return val;
// };



export const persoEquipement = (state, getters, rootState, rootGetters) =>
  state.familles.map(element => {
    if (element.equipemt_id !== null) {
      element = {
        ...element,
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(
          typequipe => typequipe.id == element.equipemt_id
        )
      };
    }

    return element;
  });








export const getPersonnaliseImmobilisation = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.immobilisations.map(element => {
    if (
      element.famille_id !== null &&
      element.uniteadministrative_id !== null &&
      element.service_id !== null &&
      element.exercice_budgetaire_id !== null &&
      element.acteurdepense_id !== null &&
      element.equipemt_id !== null
    ) {
      element = {
        ...element,
        uniteAdministrative: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamill => equipefamill.id == element.famille_id
        ),
        service: rootGetters["SuiviImmobilisation/services"].find(
          equipeservice => equipeservice.id == element.service_id
        ),
        acteurDepen: rootGetters["personnelUA/personnaliseActeurDepense"].find(
          acteurDepenUA => acteurDepenUA.id == element.acteurdepense_id
        ),
        exercBudget: rootGetters[
          "parametreGenerauxAdministratif/exercices_budgetaires"
        ].find(tempBudget => tempBudget.id == element.exercice_budgetaire_id),
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(
          equipe => equipe.id == element.equipemt_id
        )
      };
    }

    return element;
  });

// afficher les structure les moin equipe

export const StructureMoinEquipe = getters =>
  getters.besoinImmobilisations.filter(
    structureMoin => structureMoin.quantite !== 0
  );


export const afficheStructureMoinEquipe = (state, getters, rootState, rootGetters) =>
  getters.StructureMoinEquipe.map(element => {
    if (
      element.famille_id !== null &&
      element.acteurdepense_id !== null &&
     
      element.uniteadmin_id !== null &&
      element.typeuniteadminist_id !== null
    ) {
      element = {
        ...element,
       
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),

        famillebesoin: rootGetters["SuiviImmobilisation/familles"].find(FamileB => FamileB.id == element.famille_id),

        
        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )

      };
    }

    return element;
  });











// afficher les structure les plus équipe

export const StructurePlusEquipe = getters =>
  getters.immobilisations.filter(
    structureMoin => structureMoin.qte_actuel == 0
  );



export const afficheStructurePlusEquipe = (state, getters, rootState, rootGetters) =>
  getters.StructurePlusEquipe.map(element => {
    if (
      element.familleimmo_id !== null &&
      element.acteurdepense_id !== null &&
      element.acteurdepense_id !== null &&
      element.uniteadministrative_id !== null &&
      element.typeuniteadminis_id !== null &&
      element.besoinimmo_id !== null
    ) {
      element = {
        ...element,
        exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(exercice => exercice.id == element.exercice_budgetaire_id),
        acteurDepense: rootGetters["personnelUA/personnaliseActeurDepense"].find(auteurDep => auteurDep.id == element.acteurdepense_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),

        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(Famileimmo => Famileimmo.id == element.familleimmo_id),

        serviceImmo: rootGetters["SuiviImmobilisation/services"].find(servImmo => servImmo.id == element.service_id),
        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminis_id
        ),
        BesoinImmobilisation: rootGetters["SuiviImmobilisation/trieUaImmobilisation"].find(besoinimmo => besoinimmo.id == element.besoinimmo_id)

      };
    }

    return element;
  });




export {
  familles,
  services,
  amortissements,
  immobilisations,
  besoinImmobilisations,
  equipements
};
