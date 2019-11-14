
<template>
  <div>
  
       
    
                                          <!-- End Page Header -->
                                                <!-- Default Light Table -->
                                              <div class="container-fluid">
                                            <hr>
                                        <div class="row-fluid">
                                          <div class="span12">
                                              <div>

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des normes de missions "
                                              name ="Liste des norme de missions "
                                              worksheet = "Normes de missions"
                                            :data="getNormeMissionPersonnaliser">
                        <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des normes de missions</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Source de financement</th>
                  <th>Fonction</th>
                <th>Perdiem</th>
                   <th>Zone</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(norme_mission, index) in 
                getNormeMissionPersonnaliser"
                 :key="norme_mission.id">
                  <td @dblclick="afficherModalModifierNormeMission(index)">
                      {{norme_mission.objetSourceFinancement.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierNormeMission(index)">
                      {{norme_mission.objetFonction.libelle || 'Non renseigné'}}</td>
                   
                    <td @dblclick="afficherModalModifierNormeMission(index)">
                      {{norme_mission.perdiem || 'Non renseigné'}}</td>

                  <td  @dblclick="afficherModalModifierNormeMission(index)">
                      {{norme_mission.zone || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNormeMission(norme_mission.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="getNormeMissionPersonnaliser.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune norme de mission enregistrée </h6>
              </div>
            </div>
          </div>
        </div>
      </div>                    
              </div>
            </div>

    

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter norme de missions</h3>
              </div>
            

              <div class="modal-body">
                <form class="form-horizontal">
                
           
              <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="formData.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
         
            <div class="control-group">
              <label class="control-label">Fonction:</label>
              <div class="controls">
           <select v-model="formData.fonction_id" class="span">
               <option v-for="norme in fonctions" :key="norme.id" 
               :value="norme.id">{{norme.libelle}}</option>
           </select>
              </div>
            </div>      
    
              <div class="control-group">
              <label class="control-label">Zone:</label>
              <div class="controls">
                <select v-model="formData.zone" class="span">
              
                  <option value="Cote d'ivoire">Cote d'ivoire</option>
                  <option value="Afrique">Afrique</option>
                   <option value="hors Afrique">hors Afrique</option>
                </select>
              </div>
            </div>
           
                  
              <div class="control-group">
              <label class="control-label">Perdiem:</label>
              <div class="controls">
                <input type="text" v-model="formData.perdiem" 
                class="span"  /> 
                  
                </div>
                
                  </div>
                             
                <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                   

           
        <!-- <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
          
                </div>
                  </div>  -->
               


          </form>
          </div>

 




           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterNormeMissionLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier norme de mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

           
              <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="editNormeMission.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
              
            <div class="control-group">
              <label class="control-label">Acteur de depense:</label>
              <div class="controls">
           <select v-model="editNormeMission.fonction_id" class="span">
               <option v-for="norme in fonctions" :key="norme.id" 
               :value="norme.id">{{norme.libelle}}</option>
           </select>
              </div>
            </div>
            


    <div class="control-group">
              <label class="control-label">Zone:</label>
              <div class="controls">
                <select v-model="editNormeMission.zone" class="span">
              
                  <option value="Cote d'ivoire">Cote d'ivoire</option>
                  <option value="Afrique">Afrique</option>
                   <option value="hors Afrique">hors Afrique</option>
                </select>
              </div>
            </div>

              <div class="control-group">
              <label class="control-label">Perdiem:</label>
              <div class="controls">
                <input type="text" v-model="editNormeMission.perdiem" 
                class="span"  />
                </div>
                  </div>
                   
                   
                 
              
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editNormeMission.source_financement_id  && editNormeMission.fonction_id && 
             editNormeMission.perdiem.length && editNormeMission.zone "
             @click.prevent="modifierModalNormeMissionLocal(editNormeMission)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->

  <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterFinancement()">Open</button>
              <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalAjouterFinancement"
        bg-color="green"

  ></fab>
<notifications  />




  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
export default {
  
  data() {
    return {
      json_fields:{
             
      },
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
     
        formData : {

        fonction_id:"",
     source_financement_id: "",
      perdiem:"",
      zone:""
            
        },

        editNormeMission: {
    fonction_id:"",
     source_financement_id: "",
      perdiem:"",
      zone:""
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
//  parcourir le getters personnaliser
   ...mapGetters('suivi_controle_budgetaire', ['getNormeMissionPersonnaliser']) ,




   // appel des getters personnaliser
   ...mapGetters('personnelUA', ['fonctions']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']) ,
  
   
    // methode pour trier un item
//            normeMissionFiltre(){

//       const searchTerm = this.search.toLowerCase();

// return this.getNormeMissionPersonnaliser.filter((item) => {
  
//      return item.zone.toLowerCase().includes(searchTerm) 
    

   
  

//    }
// )
//    }
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getNormeMission', 'ajouterNormeMission', 
   'modifierNormeMission','supprimerNormeMission']),   
   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
// uploader ficheir
    onFichierChange(e){
      this.formData.fichier_joint = e.target.files[0]
    },
   // fonction pour vider l'input
     ajouterNormeMissionLocal () {
     this.ajouterNormeMission(this.formData)

        this.formData = {
             fonction_id:"",
        source_financement_id: "",
        perdiem:"",
        zone:""
            
         }
     },
// afficher modal
afficherModalModifierNormeMission(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editNormeMission = this.getNormeMissionPersonnaliser[index];


        
 },  
// 
modifierModalNormeMissionLocal(){
  this.modifierNormeMission(this.editNormeMission)
  this.editNormeMission = {
     fonction_id:"",
        source_financement_id: "",
        perdiem:"",
        zone:""
  }
}

  }
};
</script>

