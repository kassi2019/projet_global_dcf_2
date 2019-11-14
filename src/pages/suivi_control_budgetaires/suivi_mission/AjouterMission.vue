<template>
   <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Ajouter mission</a></li>
              <!-- <li><a data-toggle="tab" href="#tab2">Description</a></li> -->
              <!-- <li><a data-toggle="tab" href="#tab3">Decision de cf</a></li> -->
            </ul>
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">

                  
                  <table border="0px">
               
                      
                          <tr>
                  <td> 
            <div class="control-group">
              <label class="control-label">Unite administrative:</label>
              <div class="controls">
           <select v-model="formData.ua_id" class="span">
               <option v-for="plans in uniteAdministratives" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
                  <td> 
            <div class="control-group">
              <label class="control-label">Acteur de depense:</label>
              <div class="controls">
           <select v-model="formData.acte_personnel_id" class="span" :readOnly="veifEquipementExist">
               <option v-for="depense in acteurDepenseDynamiques(formData.ua_id )" :key="depense.id" 
               :value="depense.id">{{depense.matricule}}</option>
           </select>
              </div>
            </div>
             </td>
               

                          <td> 
            <div class="control-group">
              <label class="control-label">Fonction:</label>
              <div class="controls">
     <input type="text" class="span" :value="afficherLaFonctionDActeurDepenseDynamique(formData.acte_personnel_id)" readonly >
      
              </div>
            </div>
                          </td>


                                    <!-- <td> 
            <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
     <input type="text" class="span" :value="afficherLaFonctionDActeurDepenseDynamique(formData.acte_personnel_id)" readonly >
      
              </div>
            </div>
                          </td> -->

      <td> 
            <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
           <select v-model="formData.source_financement_id" class="span">
               <option v-for="sourceFinancement in sources_financements" :key="sourceFinancement.id" 
               :value="sourceFinancement.id">{{sourceFinancement.libelle}}</option>
           </select>
              </div>
            </div>
             </td>

                  <td> 
            <div class="control-group">
              <label class="control-label">Exercice budgetaire:</label>
              <div class="controls">
           <select v-model="formData.exercice_budgetaire_id" class="span">
               <option v-for="budget in exercices_budgetaires" :key="budget.id" 
               :value="budget.id">{{budget.annee}}</option>
           </select>
              </div>
            </div>
             </td>

              <td> 
            <div class="control-group">
              <label class="control-label">Cat. mission:</label>
              <div class="controls">
           <select v-model="formData.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
                    
                          </tr>

                          <tr>


            
                               <td>           
               <div class="control-group">
              <label class="control-label">Type de mission:</label>
              <div class="controls">
                <select v-model="formData.type_mission" class="span">
       
                  <option value="mission civ">Mission en cote d'ivoire</option>
                  <option value="mission hors civ">Mission hors cote d'ivoire</option>
                  
                </select>
              </div>
            </div> 
                    </td>   
                                 <td>         
                  
                <div class="control-group">
              <label class="control-label">Moyen de transport:</label>
              <div class="controls">
                <select v-model="formData.moyen_transport" class="span">
        
                <option value="vehicule">Vehicule</option>
                  <option value="avion">Avion</option>
                  <option value="train">Train</option>
                  
                </select>
              </div>
            </div>
                    </td>  

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Destination:</label>
              <div class="controls">
                <input type="text" v-model="formData.destination" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Itineraire retenu:</label>
              <div class="controls">
                <input type="text" v-model="formData.itineraire_retenu" 
                class="span"/>
              </div>
                </div>
                </td>
                   

                   
                           <td>
                             <div class="control-group">
              <label class="control-label"> Signataire:</label>
              <div class="controls">
     <input type="text" v-model="formData.signataire" class="span" 
     placeholder="Saisir le nom du signataire" />
              </div>
            </div>
                      </td>
                     </tr>

                       <tr>
                         


                          <td>         
                  
               <div class="control-group">
              <label class="control-label">Class voyage:</label>
              <div class="controls">
                <input type="text" v-model="formData.classe_voyage" 
                class="span"  />
                </div>
                  </div>
                        </td>

         

                             <td>           
               <div class="control-group">
              <label class="control-label">Date de mission:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_mission" class="span"/>
              </div>
                </div>
                </td>
                        
                         <td>         
                  
               <div class="control-group">
              <label class="control-label">Numero autorisation:</label>
              <div class="controls">
                <input type="text" v-model="formData.numero_autorisation" 
                class="span"  />
                </div>
                  </div>
                              </td>


                                        <td> 
            <div class="control-group">
              <label class="control-label">N°ccm:</label>
              <div class="controls">
     <input type="text" v-model="formData.numero_ccm" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                      </td>


             
            
                    
                             
                 <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                            
                   
                       </tr>




                            <tr>

                            <td>         
                  
               <div class="control-group"> 
              <label class="control-label">Frais de deplacement:</label>
              <div class="controls">
           <input type="text"   :value="afficherSourceFinancement(formData.source_financement_id)" readonly
                                     class="span"  />
                </div>
                  </div>
                              </td>
                                    

                                    
                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">frais d'hebergement:</label>
              <div class="controls">
                <input type="text" v-model="formData.frais_hebergement" 
                class="span"/>
              </div>
                </div>
                </td>
                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Frais de restauration:</label>
              <div class="controls">
                <input type="number" v-model="formData.frais_restauration" 
                class="span"  />
                </div>
                  </div>
                              </td>

                                <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Autre frais:</label>
              <div class="controls">
                <input type="text" v-model="formData.autre_frais" 
                class="span"/>
              </div>
                </div>
                </td>

                 
                 <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Cout total de la mission:</label>
              <div class="controls">
                <input type="text" readonly :value="calculDuCoutTotal" 
                class="span"/>
              </div>
                </div>
                </td> 
                          </tr>



                             <tr>


         
              
                              <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Date depart:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_depart" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Date retour:</label>
              <div class="controls">
                <input type="date" :min="formData.date_depart" :readonly="getDateRetourValue" v-model="formData.date_retour" 
                class="span"  />
                </div>
                  </div>
                              </td>


                     <td> 
            <div class="control-group">
              <label class="control-label">Durée:</label>
              <div class="controls">
     <input type="text" readonly :value="nombreJourCalucle" class="span" 
     placeholder="Saisir la durée" />
              </div>
            </div>
                     </td>

                     

                     <td> 
            <div class="control-group">
              <label class="control-label">Cout du billet d'avion:</label>
              <div class="controls">
     <input type="text" v-model="formData.cout_billet_avion" class="span" 
     placeholder="Saisir la cout du billet avion" />
              </div>
            </div>
                     </td>

                     
             <td> 
            <div class="control-group">
              <label class="control-label">Objet de missions:</label>
              <div class="controls">
     <input type="text" v-model="formData.objet" class="span" 
     placeholder="Saisir l'objet" />
              </div>
            </div>
                      </td>

          
                          </tr>

                          <tr>
                  
                          </tr>
                       </table> 
         
              
                 
            
                </div>
            <!-- <div id="tab2" class="tab-pane">
                  <table border="0px">
    
                

                     
                           <tr>

                        
                           </tr>
       
            </table> 
            </div> -->
            <div id="tab3" class="tab-pane">
                  
                  <table border="0px">
                          <tr>

                         
                    

                      

                          </tr>
                          
                             
                
       
                      </table> 

                    </div>

         

              </div>
               </div>

             </div>

                </div>
           <div align="right">
             <button
              @click.prevent="ajouterMissionLocal" class="btn btn-primary"
              href="#">Valider</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent="AllerAPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>


<!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="tab()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="tab"
        bg-color="green"

  ></fab> -->

<notifications  />


               
   </div>
</template>

   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
export default {
  
  data() {

    
    return {
      
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        formData : {},
        fonctionActeur:""
        
             
         
    };
  },

 
  created() {
    //  this.getStructureActivite()
   // console.log(this.formData.ua_id)
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions','missions','getNormeMissionPersonnaliser']) ,
  ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
  ...mapGetters('personnelUA', ['all_acteur_depense',  'fonctions']),
   ...mapGetters('uniteadministrative', ['uniteAdministratives']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

   nombreJourCalucle(){
     const form = this.formData
     if(form.date_depart == form.date_retour && form.date_retour !== "" && form.date_depart !== "") return 1 
        if( form.date_retour == "" && form.date_depart == "") return null 
   var dateR = new Date(form.date_retour).getTime()
    var dateD = new Date(form.date_depart).getTime()
    var diffTime = dateR - dateD

    var diffJours = diffTime / (1000 * 3600 * 24)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return "durée invalide"

      return diffJours;
   },

   getDateRetourValue(){
     return !this.formData.date_depart != ""
   },


   afficherLaFonctionDActeurDepenseDynamique(){
     return acte_personnel_id => {
       if( acte_personnel_id != undefined) {
    var acteur = this.all_acteur_depense.find(acteur => acteur.id == acte_personnel_id  )
    
       this.fonctionActeur = acteur.fonction.id
       
    // console.log(acteur)
     return acteur.fonction.libelle
       }
    return null
     }
  
   },



   // afficher la source de financement

    afficherSourceFinancement(){

     return source_financement_id => {
       if( source_financement_id != undefined && this.fonctionActeur !=="") {


    var norme = this.getNormeMissionPersonnaliser.find(norme => norme.objetSourceFinancement.id == source_financement_id  && norme.objetFonction.id == this.fonctionActeur)
    
if(norme !=="") return norme.perdiem


       
    console.log(norme)
     return norme   
       }
    return null
     }

    },

 veifEquipementExist() {
      return this.formData.ua_id == undefined;
    },



//calcul du cout total

calculDuCoutTotal(){
  const coutTotal = parseFloat(this.afficherSourceFinancement(this.formData.source_financement_id)) + parseFloat(this.formData.frais_hebergement)
  + parseFloat(this.formData.frais_restauration) + parseFloat(this.formData.autre_frais)
  if(isNaN(coutTotal)) return null
  return parseFloat(coutTotal).toFixed(2)
     
  //console.log(coutTotal)
},

acteurDepenseDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.unite_administrative_id == id);
        }
      };
    },


  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'ajouterMission', 
   'modifierMission','supprimerMission']),  


  

    onFichierChange(e){
      this.formData.fichier_joint = e.target.files[0]
    },
   
  //      afficherFonction(){
  //        if(this.formData.acte_personnel_id !==""){
  //  var acteur =  this.all_acteur_depense.find(acteur => acteur.id == this.formData.acte_personnel_id  )

  //        }
        
  //      },
   
  // fonction pour aller a la page de la liste
    AllerAPageListe(){
  
    this.$router.push({
        name: 'Mission'
    })
    },
    
   // fonction pour vider l'input
     ajouterMissionLocal () {
       var nouvelObjet = {
         ...this.formData,
         duree: this.nombreJourCalucle,

        //  cout_total: this.calculDuCoutTotal,

        //  frais_deplacement: this.afficherSourceFinancement

            }
     this.ajouterMission(nouvelObjet)

        this.formData = {
          // cout_billet_avion:"",
               objet:"",
             date_mission: "",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             montant:"",
             mode_paiement:"",
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             fichier_joint:"",
             signataire:"",
             decision_cf:"",
             date_visa_cf:"",
             motif:"",
             fonction:"",
             frais_restauration:"",
             autre_frais:"",
             exercice_budgetaire_id:""
            
         }
     },


  }
};
</script>