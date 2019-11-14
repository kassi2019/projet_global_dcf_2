/**
 * Mutation mode de passation
 */


const GET_MODE_PASSATION = (state, data) => {
    state.mode_passations = data
}


const AJOUTER_MODE_PASSATION = (state, nouvel_objet) => {
    state.mode_passations.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_MODE_PASSATION= (state, id) => {
    state.mode_passations = state.mode_passations.filter(titre => titre.id != id)
}


const MODIFIER_MODE_PASSATION = (state, objetModifie) => {
    state.mode_passations = state.mode_passations.map(mode_passation => {
        if(mode_passation.id == objetModifie.id){
            mode_passation = {...objetModifie}
        }
        return mode_passation
    })
}
/**
 * Fin mode de passation
 */


/**
 * Mutation type marche
 */
const GET_TYPE_MARCHE = (state, data) => {
    state.type_marches = data
}


const AJOUTER_TYPE_MARCHE = (state, nouvel_objet) => {
    state.type_marches.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_TYPE_MARCHE= (state, id) => {
    state.type_marches = state.type_marches.filter(titre => titre.id != id)
}


const MODIFIER_TYPE_MARCHE= (state, objetModifie) => {
    state.type_marches = state.type_marches.map(type_marche => {
        if(type_marche.id == objetModifie.id){
            type_marche = {...objetModifie}
        }
        return type_marche
    })
}

/**
 * Fin mutation type marche
 */

/**
 * Secteur activite
 */

const GET_SECTEUR_ACTIVITE = (state, data) => {
    state.secteur_activites = data
}


const AJOUTER_SECTEUR_ACTIVITE = (state, nouvel_objet) => {
    state.secteur_activites.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_SECTEUR_ACTIVITE= (state, id) => {
    state.secteur_activites = state.secteur_activite.filter(titre => titre.id != id)
}


const MODIFIER_SECTEUR_ACTIVITE= (state, objetModifie) => {
    state.secteur_activites = state.secteur_activites.map(secteur_activite => {
        if(secteur_activite.id == objetModifie.id){
            secteur_activite = {...objetModifie}
        }
        return secteur_activite
    })
}
/**
 * Fin secteur activite
 */

/**
 * Entreprise
 */
const GET_ENTREPRISE = (state, data) => {
    state.entreprises = data
}


const AJOUTER_ENTREPRISE = (state, nouvel_objet) => {
    state.entreprises.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_ENTREPRISE= (state, id) => {
    state.entreprises = state.entreprises.filter(titre => titre.id != id)
}


const MODIFIER_ENTREPRISE= (state, objetModifie) => {
    state.entreprises = state.entreprises.map(entreprise => {
        if(entreprise.id == objetModifie.id){
            entreprise = {...objetModifie}
        }
        return entreprise
    })
}
/**
 * Fin entreprise
 */


/**
 * Etape marche
 */
const GET_ETAPE_MARCHE = (state, data) => {
    state.etape_marches = data
}


const AJOUTER_ETAPE_MARCHE = (state, nouvel_objet) => {
    state.etape_marches.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_ETAPE_MARCHE= (state, id) => {
    state.etape_marches = state.etape_marches.filter(titre => titre.id != id)
}


const MODIFIER_ETAPE_MARCHE= (state, objetModifie) => {
    state.etape_marches = state.etape_marches.map(etape_marche => {
        if(etape_marche.id == objetModifie.id){
            etape_marche = {...objetModifie}
        }
        return etape_marche
    })
}
/**
 * Fin etape
 */


/**
 * Document PTBA-PPM
 */
const GET_DOCUMENT_PTBA_PPM = (state, data) => {
    state.document_ptba_ppm = data
}


const AJOUTER_DOCUMENT_PTBA_PPM = (state, nouvel_objet) => {
    state.document_ptba_ppm.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_DOCUMENT_PTBA_PPM= (state, id) => {
    state.document_ptba_ppm = state.document_ptba_ppm.filter(titre => titre.id != id)
}


const MODIFIER_DOCUMENT_PTBA_PPM= (state, objetModifie) => {
    state.document_ptba_ppm = state.document_ptba_ppm.map(document_ptba_pp => {
        if(document_ptba_pp.id == objetModifie.id){
            document_ptba_pp = {...objetModifie}
        }
        return document_ptba_pp
    })
}
/**
 * Fin document PTBA-PPM
 */



const GET_MARCHE_CONTRAT = (state, data) => {
    state.marche_contrats = data
}


const AJOUTER_MARCHE_CONTRAT = (state, nouvel_objet) => {
    state.marche_contrats.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}


const SUPPRIMER_MARCHE_CONTRAT= (state, id) => {
    state.marche_contrats = state.marche_contrats.filter(titre => titre.id != id);

}


const MODIFIER_MARCHE_CONTRAT= (state, objetModifie) => {
    state.marche_contrats = state.marche_contrats.map(marche_contrat => {
        if(marche_contrat.id == objetModifie.id){
            marche_contrat = {...objetModifie}
        }
        return marche_contrat
    })
}
const DETAIL_MARCHE_CONTRAT=(state,{getters,id})=>{

   state.detail_marche_contrat= getters.marche_contrat_personnalise.find(marche_contrat=> {
       console.log("hhdhd",id)
       if (marche_contrat.id==id) {
           return marche_contrat;
       }
   });
}


const GET_PRESENCE_CF = (state, data) => {
    state.presence_cfs = data
}


const AJOUTER_PRESENCE_CF = (state, nouvel_objet) => {
    state.presence_cfs.unshift(nouvel_objet)

}


const SUPPRIMER_PRESENCE_CF= (state, id) => {
    state.presence_cfs = state.presence_cfs.filter(titre => titre.id != id)
    state.presence_cf_marche=state.presence_cf_marche.filter(titre => titre.id != id)
}


const MODIFIER_PRESENCE_CF= (state, objetModifie) => {
    state.presence_cfs = state.presence_cfs.map(presence_cf => {
        if(presence_cf.id == objetModifie.id){
            presence_cf = {...objetModifie}
        }
        return presence_cf
    })

}

const PRESENCE_CF_MARCHE_DETAIL=(state,{getters,id})=>{
    state.presence_cf_marche=[]
     getters.presenceCFPersonnalise.map(presence_cf=> {
        if (presence_cf.marche_contrat_id==id) {
            state.presence_cf_marche.push(presence_cf)
        }
    });
}

const MODIFIER_PRESENCE_MARCHE_CF= (state, objetModifie) => {
    state.presence_cfs = state.presence_cfs.map(presence_cf => {
        if(presence_cf.id == objetModifie.id){
            presence_cf = {...objetModifie}
        }
        return presence_cf
    })
}



const GET_DOCUMENT = (state, data) => {
    state.documents = data
}


const AJOUTER_DOCUMENT= (state, nouvel_objet) => {
    state.documents.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


const SUPPRIMER_DOCUMENT= (state, id) => {
    state.documents = state.documents.filter(titre => titre.id != id)
}


const MODIFIER_DOCUMENT= (state, objetModifie) => {
    state.documents = state.documents.map(document => {
        if(document.id == objetModifie.id){
            document = {...objetModifie}
        }
        return document
    })

}


const PTBA_PPM_BY_UA_AND_EXERCICE=(state,{getters,data})=>{
    state.ptba_ppm_by_ua_exercie=[]
    getters.document_ptba_ppm.map(doc_ptba_ppm=> {
        if (doc_ptba_ppm.exercice_budgetaire_id==data.exercice_budgetaire_id && doc_ptba_ppm.unite_administrative_id==data.unite_administrative_id) {
            state.ptba_ppm_by_ua_exercie.push(doc_ptba_ppm)
        }
    });
}

const DECISION_MARCHE_CF = (state, data) => {
    state.decision_marche_cf=[]
    state.decision_marche_cf = data
}

const NBR_MARCHE_BY_PROCEDURE= (state, data) => {
    state.nbr_marche_by_procedure=[]
    state.nbr_marche_by_procedure = data
}

const DOCUMENT_PRESENCE_BY_MARCHE_CF=(state,data)=>{
    state.document_presence_by_marche=[]
    state.document_presence_by_marche=data
}

const SUPPRIMER_DOCUMENT_PRESENCE= (state, id) => {
    state.documents = state.document_presence_by_marche.filter(titre => titre.id != id)
}
const DETAIL_MARCHE_BACK_END=(state,data)=>{
    state.deatil_marche_back_end=[]
    state.deatil_marche_back_end=data
}
const SOURCE_PERSONNALISE=(state,data)=>{
    state.source_personnalise=data
}



const GET_FINANCEMENT_BY_MARCHE = (state, data) => {
    state.financement_by_marche = data
}


const AJOUTER_FINANCEMENT_BY_MARCHE= (state, nouvel_objet) => {
    state.financement_by_marche.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


const SUPPRIMER_FINANCEMENT_BY_MARCHE= (state, id) => {
    state.financement_by_marche = state.financement_by_marche.filter(titre => titre.id != id)
}


const MODIFIER_FINANCEMENT_BY_MARCHE= (state, objetModifie) => {
    state.financement_by_marche = state.financement_by_marche.map(document => {
        if(document.id == objetModifie.id){
            document = {...objetModifie}
        }
        return document
    })

}

const DETAIL_MARCHE_FINNANCEMENT=(state,{getters,id})=>{
    state.detail_marche_finance=[]
    getters.marche_finnance_personnalises.map(finnance=> {
        if (finnance.marche_contrat_id==id) {
            state.detail_marche_finance.push(finnance)
        }
    });
}

export {
    GET_MODE_PASSATION,
    AJOUTER_MODE_PASSATION,
    MODIFIER_MODE_PASSATION,
    SUPPRIMER_MODE_PASSATION,
    GET_TYPE_MARCHE,
    AJOUTER_TYPE_MARCHE,
    SUPPRIMER_TYPE_MARCHE,
    MODIFIER_TYPE_MARCHE,
    GET_SECTEUR_ACTIVITE,
    AJOUTER_SECTEUR_ACTIVITE,
    SUPPRIMER_SECTEUR_ACTIVITE,
    MODIFIER_SECTEUR_ACTIVITE,
    GET_ENTREPRISE,
    AJOUTER_ENTREPRISE,
    SUPPRIMER_ENTREPRISE,
    MODIFIER_ENTREPRISE,
    GET_ETAPE_MARCHE,
    MODIFIER_ETAPE_MARCHE,
    SUPPRIMER_ETAPE_MARCHE,
    AJOUTER_ETAPE_MARCHE,
    GET_DOCUMENT_PTBA_PPM,
    AJOUTER_DOCUMENT_PTBA_PPM,
    MODIFIER_DOCUMENT_PTBA_PPM,
    SUPPRIMER_DOCUMENT_PTBA_PPM,
    GET_MARCHE_CONTRAT,
    MODIFIER_MARCHE_CONTRAT,
    SUPPRIMER_MARCHE_CONTRAT,
    AJOUTER_MARCHE_CONTRAT,
    DETAIL_MARCHE_CONTRAT,
    GET_PRESENCE_CF,
    MODIFIER_PRESENCE_CF,
    SUPPRIMER_PRESENCE_CF,
    AJOUTER_PRESENCE_CF,
    PRESENCE_CF_MARCHE_DETAIL,
    MODIFIER_PRESENCE_MARCHE_CF,
    GET_DOCUMENT,
    MODIFIER_DOCUMENT,
    AJOUTER_DOCUMENT,
    SUPPRIMER_DOCUMENT,
    PTBA_PPM_BY_UA_AND_EXERCICE,
    DECISION_MARCHE_CF,
    NBR_MARCHE_BY_PROCEDURE,
    DOCUMENT_PRESENCE_BY_MARCHE_CF,
    SUPPRIMER_DOCUMENT_PRESENCE,
    DETAIL_MARCHE_BACK_END,
    SOURCE_PERSONNALISE,
    GET_FINANCEMENT_BY_MARCHE,
    AJOUTER_FINANCEMENT_BY_MARCHE,
    MODIFIER_FINANCEMENT_BY_MARCHE,
    SUPPRIMER_FINANCEMENT_BY_MARCHE,
    DETAIL_MARCHE_FINNANCEMENT
}
