const typeTextes = state =>
  state.typeTextes.sort((a, b) => (a.code > b.code ? 1 : -1));

const uniteAdministratives = state =>
  state.uniteAdministratives.sort((a, b) => (a.code > b.code ? 1 : -1));
const archivageDocuments = state =>
  state.archivageDocuments.sort((a, b) => (a.reference > b.reference ? 1 : -1));

export const nombreUniteAdministratives = state =>
  state.uniteAdministratives.length;
export const nombreArchivageDocument = state => state.archivageDocuments.length;
export const nombreTypeText = state => state.typeTextes.length;
// const listeDocUniteAdministratives = state =>
//   state.listeDocUniteAdministratives;
// const nbreUniteAdministratives = state => state.nbreUniteAdministratives;
// const nbreTypeTextes = state => state.nbreTypeTextes;

export const nbreNouveauProjet = state =>
  state.uniteAdministratives.filter(
    nouveauProjet => nouveauProjet.date_creation == null
  ).length;

export const jointureUaChapitreSection = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.uniteAdministratives.map(element => {
    if (
      element.chapitre_id !== null &&
      element.section_id !== null &&
      element.type_ua_id !== null
    ) {
      element = {
        ...element,
        chpitr: rootGetters["parametreGenerauxAdministratif/chapitres"].find(
          chapitre1 => chapitre1.id == element.chapitre_id
        ),
        secti: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        typeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.type_ua_id)
      };
    }
    return element;
  });
export {
  typeTextes,
  uniteAdministratives,
  archivageDocuments

  // listeDocUniteAdministratives,
  // nbreUniteAdministratives,
  // nbreTypeTextes
};
