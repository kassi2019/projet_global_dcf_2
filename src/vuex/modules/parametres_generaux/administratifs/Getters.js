const titres = state => state.titres

const exercices_budgetaires = state => state.exercices_budgetaires

const natures_sections = state => state.natures_sections
const sections = state => state.sections
const structures_programmes = state=>state.structures_programmes
const structures_administratives = state => state.structures_administratives
const plans_programmes = state => state.plans_programmes
const services_gestionnaires = state => state.services_gestionnaires
const chapitres = state => state.chapitres
const grandes_natures = state => state.grandes_natures
const structures_geographiques = state => state.structures_geographiques
const localisations_geographiques = state => state.localisations_geographiques
const type_Unite_admins = state => state.type_Unite_admins
// export const titreFiltres = (state, search) => {

// const searchTerm = search.toLowerCase();

// return state.titres.filter((item) => {
  
//     return item.code.toLowerCase().includes(searchTerm) 
//     // || item.prenom.toLowerCase().includes(searchTermPrenom) 
//     || item.libelle.toLowerCase().includes(searchTerm) 

//    }
// )

// }


export {
    titres,
    exercices_budgetaires,
    natures_sections,
    sections,
    structures_programmes,
    structures_administratives,
    plans_programmes,
    services_gestionnaires,
    chapitres,
    grandes_natures,
    structures_geographiques,
    localisations_geographiques,
 type_Unite_admins
}






