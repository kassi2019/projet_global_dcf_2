import apiGuest from './urls/urlGuest'
import router from '../../../routes/index'
import axios from '../../../../urls/api_parametrage/api'
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
import { asyncLoading } from 'vuejs-loading-plugin'





export function login({commit}, user){
    if(user.email && user.password){
       // this.loader = true;
      // commit('SET_LOADER_TRUE')
    //  this.error = false
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
              asyncLoading( apiGuest.post('/login', {
                email: user.email,
                password: user.password
            })).then(response => {
              
                    commit('LOGIN_USER', response.data.user)
                    localStorage.setItem('token', response.data.access_token)
                   // localStorage.setItem('user', response.data.user)
                  // commit('SET_LOADER_FALSE')

                     router.push({ name: 'Titre' })                   
                   
               }).catch((error) => {
                  // this.loginError = true
                   if (error.response.status === 401 || error.response.status === 403) {
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    //this.$router.push({name: 'login'})
                }
               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

    export function logoutUser({commit}){
      localStorage.removeItem('token')
     // localStorage.removeItem('user')
      commit('LOGOUT_USER')
      router.push({ name: 'Login' })                   


    }


    export  function  getTypeUa({commit}) {

      queue.push(() =>  axios.get('/type_uas').then(response => {
              // console.log(response.data)
              commit('GET_TYPE_UA', response.data)
          }).catch(error => console.log(error))
      );
  
  
  }
  
  // ajouter type acte personnel
  export  function ajouterTypeUa({commit}, objetAjoute){
      axios.post('/ajouter_type_ua', objetAjoute ).then(res => {
          if(res.status == 201){
              commit('AJOUTER_TYPE_UA', res.data)
          }
      }).catch(error => console.log(error))
  }
  
  // supprimer type act
  export function supprimerTypeUa({commit}, id){
      let conf = confirm("Voulez vouz vraiment supprimer ?")
  
      if(conf){
          commit('SUPPRIMER_TYPE_UA', id)
          axios.delete('/supprimer_type_ua/' + id)
  
      }
  }
  
  export function modifierFonction({commit}, formData){
      axios.put('/modifier_type_ua' ,formData).then(response => {
          commit('MODIFIER_TYPE_UA', response.data)
      })
  
  }


