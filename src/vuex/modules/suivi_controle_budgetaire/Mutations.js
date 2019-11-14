
 // get all categorie mission
 export const GET_CATEGORIE_MISSION = (state, tableau_categorie_mission) => {

    state.categories_missions = tableau_categorie_mission
} 


// ajouter categorie mission
 export const AJOUTER_CATEGORIE_MISSION = (state, nouveau_element) => {
    state.categories_missions.unshift(nouveau_element)
}

// modifier categorie mission
 export const MODIFIER_CATEGORIE_MISSION = (state, element_ajout) =>{
    state.categories_missions = state.categories_missions.map(response =>{
      if(  response.id == element_ajout.id){
          response = {...element_ajout}

      }
      return response

    })
}

// supprimer categorie mission
export const SUPPRIMER_CATEGORIE_MISSION = (state, id) => {

    state.categories_missions = state.categories_missions.filter(mission => mission.id !=id)
}




 // get all  mission
 export const GET_MISSION = (state, tableau_mission) => {

    state.missions = tableau_mission
} 


// ajouter  mission
 export const AJOUTER_MISSION = (state, nouveau_element) => {
    state.missions.unshift(nouveau_element)
}

// modifier  mission
 export const MODIFIER_MISSION = (state, element_ajout) =>{
    state.missions = state.missions.map(response =>{
      if(  response.id == element_ajout.id){
          response = {...element_ajout}

      }
      return response

    })
}

export const MODIFIER_STATUS_MISSION = (state, nouvelObjet) =>{
    state.missions = state.missions.map(mission =>{
      if(  mission.id == nouvelObjet.id){
          mission.decision_cf = nouvelObjet.decision_cf

      }
      return mission

    })
}

// supprimer mission
export const SUPPRIMER_MISSION = (state, id) => {

    state.missions = state.missions.filter(mission => mission.id !=id)
}

// get all imputation mission

export const GET_IMPUTATION = (state, tableau_imputation) => {

    state.imputations = tableau_imputation
}

// ajouter imputation
export const AJOUTER_IMPUTATION = (state ,elementAjout) => {
    state.imputations.unshift(elementAjout)
}

// modifier imputation

export const MODIFIER_IMPUTATION = (state, elementModifie)=> {
    state.imputations = state.imputations.map(response =>{
        if(response.id == elementModifie.id){
            response = {...elementModifie}
        }
         return response
    })
}

// supprimer imputation

export const SUPPRIMER_IMPUTATION = (state, id) => {
    state.imputations = state.imputations.filter( res => res.id !=id)
}






// get all norme de mission 

export const GET_NORME_MISSION = (state, tableau_norme_mission) => {

    state.normes_missions = tableau_norme_mission
}

// ajouter norme de mission
export const AJOUTER_NORME_MISSION = (state ,elementAjout) => {
    state.normes_missions.unshift(elementAjout)
}

// modifier norme de mission

export const MODIFIER_NORME_MISSION = (state, elementModifie)=> {
    state.normes_missions = state.normes_missions.map(normeMission =>{
        if(normeMission.id == elementModifie.id){
            normeMission = {...elementModifie}
        }
         return normeMission
    })
}

// supprimer norme de mission

export const SUPPRIMER_NORME_MISSION = (state, id) => {
    state.normes_missions = state.normes_missions.filter( res => res.id !=id)
}


// ma mutation de mon historique mission
// get all historique mission

export const GET_HISTORIQUE_MISSION = (state , tableau_historique_mission) => {

    state.historiques_missions = tableau_historique_mission
}


// ajouter historique mission
export const AJOUTER_HISTORIQUE_MISSION = (state, missionDontOnEstEntrainDeChangerLaDecision) => {
   // state.historiques_missions.unshift(objetAjout)

    state.missions = state.missions.map(mission => {
        if(mission.id == missionDontOnEstEntrainDeChangerLaDecision.id){
          mission = {...missionDontOnEstEntrainDeChangerLaDecision}
        } 
        return mission
      })
}

//modifier historique mission
export const MODIFIER_HISTORIQUE_MISSION = (state, objetModifie) => {
    state.historiques_missions = state.historiques_missions.map(historiqueMission => {
      if(historiqueMission.id == objetModifie.id){
        historiqueMission = {...objetModifie}
      } 
      return historiqueMission 
    })
}

//supprimer historque mission
export const SUPPRIMER_HISTORIQUE_MISSION = (state , id) => {
    state.historiqueMission = state.historiqueMission.filter(history => history.id != id)
}



