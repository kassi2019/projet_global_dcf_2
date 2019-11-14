
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true


/**
 * Recuperation des type act
 * @param state
 * @param tableau_type_uas
 * @constructor
 */
export const GET_TYPE_UA = (state, tab_type_uas) => {
    state.type_uas = tab_type_uas
}

/**
 * Ajouter type act personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_type_uas = (state, nouvel_objet) => {
    state.type_uas.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_type_uas= (state, id) => {
    state.type_uas = state.type_uas.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_type_uas = (state, objetModifie) => {
    state.type_uas = state.type_uas.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}

