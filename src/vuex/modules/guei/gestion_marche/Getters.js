const mode_passations = state => state.mode_passations;
const source_personnalise=state =>state.source_personnalise
const type_marches = state => state.type_marches;
const secteur_activites=state=>state.secteur_activites;
const entreprises=state=>state.entreprises;
const etape_marches=state=>state.etape_marches;
const document_ptba_ppm=state=>state.document_ptba_ppm;
const marche_contrats=state=>state.marche_contrats;
const detail_marche_contrat=state=>state.detail_marche_contrat;
const presence_cfs =state=>state.presence_cfs;
const presence_cf_marche=state=>state.presence_cf_marche;
const documents=state=>state.documents;
const ptba_ppm_by_ua_exercie=state=>state.ptba_ppm_by_ua_exercie;
const decision_marche_cf=state=>state.decision_marche_cf;
const nbr_marche_by_procedure =state=>state.nbr_marche_by_procedure;
const document_presence_by_marche=state =>state.document_presence_by_marche;
const deatil_marche_back_end=state =>state.deatil_marche_back_end;
const financement_by_marche =state =>state.financement_by_marche;
const detail_marche_finance=state =>state.detail_marche_finance;
const document_pyba_ppm_personnalise=(state, getters, rootState, rootGetters) =>
    state.document_ptba_ppm.map(element => {
        if (element.unite_administrative_id !== null && element.exercice_budgetaire_id!==null ) {
            element = {
                ...element,
                uniteAdmin: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    section => section.id == element.unite_administrative_id
                ),
                exerciceBudgetaire: rootGetters['parametreGenerauxAdministratif/exercices_budgetaires'].find(
                    exercice => exercice.id == element.exercice_budgetaire_id
                ),
            };
        }

        return element;
    });




const marche_contrat_personnalise = (state, getters, rootState, rootGetters) =>
    state.marche_contrats.map(element => {
        if (element.unite_administrative_id !== null && element.exercice_budgetaire_id!==null && element.entreprise_id==null ) {
            element = {
                ...element,
                uniteAdmin: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    section => section.id == element.unite_administrative_id
                ),
                exerciceBudgetaire: rootGetters['parametreGenerauxAdministratif/exercices_budgetaires'].find(
                    exercice => exercice.id == element.exercice_budgetaire_id
                ),
                modePassation: rootGetters['gestionMarche/mode_passations'].find(
                    mode_passation => mode_passation.id == element.mode_passation_id
                )
                ,
                typeMarches: rootGetters['gestionMarche/type_marches'].find(
                    type_marche => type_marche.id == element.type_marche_id
                ),

            };
        }

        return element;
    });


const marche_finnance_personnalises = (state, getters, rootState, rootGetters) =>
    state.financement_by_marche.map(element => {
        if (element.sources_financement_id !== null && element.types_financement_id!==null) {
            element = {
                ...element,
                bailleur: rootGetters['parametreGenerauxSourceDeFinancement/sources_financements'].find(
                    source => source.id == element.sources_financement_id
                ),
                finnancement: rootGetters['parametreGenerauxSourceDeFinancement/types_financements'].find(
                    type_fin => type_fin.id == element.types_financement_id
                ) ,
                marchePersonnalise: rootGetters['gestionMarche/marche_contrat_personnalise'].find(
                    marche => marche.id == element.marche_contrat_id
                ),

            };
        }

        return element;
    });

const presenceCFPersonnalise =(state, getters, rootState, rootGetters) =>
    state.presence_cfs.map(element => {
        if (element.etapes_marche_id !== null ) {
            element = {
                ...element,
                etapeMarche: rootGetters['gestionMarche/etape_marches'].find(
                    section => section.id == element.etapes_marche_id
                )
            };
        }

        return element;
    });


export {
    mode_passations,
    type_marches,
    secteur_activites,
    entreprises,
    etape_marches,
    document_ptba_ppm,
    marche_contrats,
    detail_marche_contrat,
    marche_contrat_personnalise,
    presence_cfs,
    presence_cf_marche,
    presenceCFPersonnalise,
    documents,
    document_pyba_ppm_personnalise,
    ptba_ppm_by_ua_exercie,
    decision_marche_cf,
    nbr_marche_by_procedure,
    document_presence_by_marche,
    deatil_marche_back_end,
    source_personnalise,
    financement_by_marche,
    marche_finnance_personnalises,
    detail_marche_finance

}

