import axios from "./url/api"
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
/**
 *Action mode de passation
 */
export async function  getModePassation({commit}) {
    queue.push(() =>  axios.get('/liste_mode_passation').then(response => {
        commit('GET_MODE_PASSATION', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterModePassation({commit}, objetAjoute){
    this.$app.$loading(true)

    axios.post('/add_mode_passation', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_MODE_PASSATION', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerModePassation({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_MODE_PASSATION', id)
        axios.delete('/delete_mode_passation/' + id).then(() => dialog.close() )
    })
}

export function modifierModePassation({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_mode_passation' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_MODE_PASSATION', response.data)
        this.$app.$loading(false)
    })
}

/**
 * Fin mode de passation
 */
/**
 *
Type de marche
 */

export async function  getTypeMarche({commit}) {

    queue.push(() =>  axios.get('/liste_type_marche').then(response => {
        commit('GET_TYPE_MARCHE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterTypeMarche({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_type_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_TYPE_MARCHE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerTypeMarche({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_TYPE_MARCHE', id)
        axios.delete('/delete_type_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierTypeMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_type_marche' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_TYPE_MARCHE', response.data)
        this.$app.$loading(false)
    })
}
/** Fin type marche
 **/

/**Debut Secteur**/

export async function  getSecteurActivite({commit}) {

    queue.push(() =>  axios.get('/liste_secteur_activite').then(response => {
        commit('GET_SECTEUR_ACTIVITE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterSecteurActivite({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_secteur_activite', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_SECTEUR_ACTIVITE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerSecteurActivite({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_SECTEUR_ACTIVITE', id)
        axios.delete('/delete_secteur_activite/' + id).then(() => dialog.close() )
    })
}

export function modifierSecteurActivite({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_secteur_activite' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_SECTEUR_ACTIVITE', response.data)
        this.$app.$loading(false)
    })
}
/**Fin secteur**/


/**Entreprise**/
export async function  getEntreprise({commit}) {

    queue.push(() =>  axios.get('/liste_entreprise').then(response => {
        commit('GET_ENTREPRISE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterEntreprise({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_entreprise', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_ENTREPRISE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerEntreprise({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_ENTREPRISE', id)
        axios.delete('/delete_entreprise/' + id).then(() => dialog.close() )
    })

}

export function modifierEntreprise({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_entreprise' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_ENTREPRISE', response.data)
        this.$app.$loading(false)
    })
}


/**Fin entreprise**/

/**
 * Etape Marche
 * */

export async function  getEtapeMarche({commit}) {

    queue.push(() =>  axios.get('/liste_etape_marche').then(response => {
        commit('GET_ETAPE_MARCHE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterEtapeMarche({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_etape_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_ETAPE_MARCHE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerEtapeMarche({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_ETAPE_MARCHE', id)
        axios.delete('/delete_etape_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierEtapeMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_etape_marchee' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_ETAPE_MARCHE', response.data)
        this.$app.$loading(false)
    })
}

/**
 *Fin etape marche
 * */


/**
 * Document PTBA-PPM
 * */


export async function getDocumentPTBAPPM({commit}) {

    queue.push(() =>  axios.get('/liste_docs_ptba_ppm').then(response => {
        commit('GET_DOCUMENT_PTBA_PPM', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterDocumentPTBAPPM({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_docs_ptba_ppm', objetAjoute ,config).then(res => {
        if(res.status == 201 || res.status == 200){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_DOCUMENT_PTBA_PPM', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerDocumentPTBAPPM({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_DOCUMENT_PTBA_PPM', id)
        axios.delete('/delete_docs_ptba_ppm/' + id).then(() => dialog.close() )
    })
}

export function modifierDocumentPTBAPPM({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_docs_ptba_ppm' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_DOCUMENT_PTBA_PPM', response.data)
        this.$app.$loading(false)
    })
}


/**
 *Fin Document PTBA-PPM
 * */


export async function getMarcheContrat({commit}) {
    queue.push(() =>  axios.get('/liste_marche_previsionnel').then(response => {
        commit('GET_MARCHE_CONTRAT', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterMarcheContrat({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_marche_contrat', objetAjoute ,config).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_MARCHE_CONTRAT', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerMarcheContrat({commit}, id){


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_MARCHE_CONTRAT', id)
        axios.delete('/delete_marche_contrat/' + id).then(() => dialog.close() )
    })
}

export function modifierMarcheContrat({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_marche_contrat' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_MARCHE_CONTRAT', response.data)
        this.$app.$loading(false)
    })
}

export function detailMarcheContrat({commit,getters}, id){
        commit('DETAIL_MARCHE_CONTRAT', {getters,id})
}




export async function getPresenceCF({commit}) {
    queue.push(() =>  axios.get('/liste_presense_cf').then(response => {
        commit('GET_PRESENCE_CF', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterPresenceCF({commit} , objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_presense_cf', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_PRESENCE_CF', res.data)
            this.$app.$loading(false)

        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerPresenceCF({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_PRESENCE_CF', id)
        axios.delete('/delete_presense_cf/' + id).then(() => dialog.close() )
    })
}

export function modifierPresenceCF({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_presense_cf' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_PRESENCE_CF', response.data)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}


export function marchePresenceCf({commit,getters}, id){
    commit('PRESENCE_CF_MARCHE_DETAIL', {getters,id})

}



export async function getDocumentPresence({commit}) {
    queue.push(() =>  axios.get('/liste_document_presence').then(response => {
        commit('GET_DOCUMENT', response.data)
    }).catch(error => console.log(error)));
}

export  function ajouterDocumentPresence({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_document_presence', objetAjoute ,config).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_DOCUMENT', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerDocumentPresence({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_DOCUMENT', id)
        axios.delete('/delete_document_presence/' + id).then(() => dialog.close() )
    })
}


export function supprimeDocumentPresenceCF({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        commit('SUPPRIMER_DOCUMENT_PRESENCE', id)
        axios.delete('/delete_document_presence/' + id).then(() => dialog.close() )
    })
}



export function modifierDocumentPresence({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_document_presence' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_DOCUMENT', response.data)
        this.$app.$loading(false)
    })
}

export function ptbaPPMbyUaExercie({commit,getters}, data){
    commit('PTBA_PPM_BY_UA_AND_EXERCICE', {getters,data})
}

export async function getDecisionMarche({commit},id) {
    axios.get('/dernier_decision_marche/'+id).then(response => {
        commit('DECISION_MARCHE_CF', response.data)
    }).catch(error => console.log(error));
}

export async function getNombreMarcheByProcedure({commit}) {
    queue.push(() =>  axios.get('/nombrMarchePrevisionnelByTypeProcedure').then(response => {
        commit('NBR_MARCHE_BY_PROCEDURE', response.data)
    }).catch(error => console.log(error)));
}


export async function sourcePersonnalise({commit}) {
    queue.push(() =>  axios.get('/source_financement_coustomise').then(response => {
        commit('SOURCE_PERSONNALISE', response.data)
    }).catch(error => console.log(error)));
}


export async function getDocumentByPresenceOfMarche({commit},id) {
    axios.get('/liste_document_by_presence_and_marche/'+id).then(response => {
        commit('DOCUMENT_PRESENCE_BY_MARCHE_CF', response.data)
    }).catch(error => console.log(error));
}


export async function detailMarcheBack_end({commit},id) {
    axios.get('/show_marche_contrat/'+id).then(response => {
        commit('DETAIL_MARCHE_BACK_END', response.data)
    }).catch(error => console.log(error));

}

export async function getSourceFinnancementByMarche({commit}) {
    queue.push(() =>  axios.get('/liste_finnancement_marche').then(response => {
        commit('GET_FINANCEMENT_BY_MARCHE', response.data)
    }).catch(error => console.log(error)));
}


export  function ajouterSourceFinnancementByMarche({commit} , objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_finnancement_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_FINANCEMENT_BY_MARCHE', res.data)
            this.$app.$loading(false)

        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerSourceFinnancementByMarche({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_FINANCEMENT_BY_MARCHE', id)
        axios.delete('/delete_finnancement_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierSourceFinnancementByMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_finnancement_marche' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_FINANCEMENT_BY_MARCHE', response.data)
        this.$app.$loading(false)
    })
}

export function detailMarcheFinnance({commit,getters}, id){
    commit('DETAIL_MARCHE_FINNANCEMENT', {getters,id})

}
/*export const formatageSomme = ({commit},montant) => {
    var p = montant.toFixed(2).split(".");
    return p[0].split("").reverse().reduce( (acc, montant, i) => {
        return montant == "-" ? acc : montant + (i && !(i % 3) ? "." : "") + acc;
    }, "") + " F CFA";
}*/


