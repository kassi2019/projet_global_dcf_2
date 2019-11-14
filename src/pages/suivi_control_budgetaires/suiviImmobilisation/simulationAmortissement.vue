<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
         

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Valeur Origine</th>
                
                  <th>Duree</th>
                 
                  <th>Date de mise en service</th>
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  <td> <div class="control-group">
           
            <div class="controls">
              <input type="number" v-model="immobilisat.valeurorigine" class="span" placeholder="Saisir la Valeur Origine" />
            </div>
          </div>
          </td> 
                  <td> <div class="control-group">
           
            <div class="controls">
              <input type="number" v-model="immobilisat.duree"  class="span" placeholder="Saisir le Duree" />
            </div>
          </div></td>
                  <td><div class="control-group">
           
            <div class="controls">
              <input type="date" v-model="immobilisat.date_mise_service"  class="span"  />
            </div>
          </div></td>
                   
        
                  
                </tr>
              </tbody>
            </table>
             <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Simulation Amortissement</h5>
          </div>
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Amortissement linéaire simple</a></li>
              <li v-if="immobilisat.date_mise_service != '' && getNombreDeMois != 12"><a data-toggle="tab" href="#tab2">Amortissement linéaire au prorata temporis</a></li>
              
            </ul>
            <div class="widget-content tab-content">
                <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Année </th>
                  <th>Montant de l'amortissement (Annuité)</th>
                   <th>Cumul des annuités</th> 
                  <th>Valeur Net Comptable au 31/12</th>
                  
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="amort in Amortissement" :key="amort.annee">
                  <td>{{amort.annee }}</td> 
                  <td>{{formatageSomme( Number (amort.anuite) ) }}</td>
                    <td>{{formatageSomme(Number(amort.cumul) ) }}</td>

                  <td>{{formatageSomme( Number (amort.valeurNette) ) }}</td>
                   
                  
                </tr>
               
              </tbody>
            </table>
                </div>
                <div id="tab2" class="tab-pane">
                       <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                  <th>Année </th>
                  <th>Montant de l'amortissement (Annuité)</th>
                   <th>Cumul des annuités</th> 
                  <th>Valeur Net Comptable au 31/12</th>
                  
                  
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="amort in AmortissementProrataTemporis" :key="amort.annee">
                  <td>{{amort.annee }}</td> 
                  <td>{{formatageSomme( Number (amort.anuite) ) }}</td>
                    <td>{{formatageSomme(Number(amort.cumul) ) }}</td>

                  <td>{{formatageSomme( Number (amort.valeurNette) ) }}</td>
                   
                  
                </tr>
               
              </tbody>
            </table>
                </div>
                
            </div>
          
         
         
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name:'simulationAmortissement',
  data() {
    return {
        immobilisat: {
            valeurorigine: "",
            duree: "",
            date_mise_service: ""
        }
    };
  },
created() {
   // this.getDetail()
  },

 
   computed: {

    calculAnnuite(){
      const immobilisat = this.immobilisat
      if(immobilisat.duree != "" && immobilisat.date_mise_service != "" && immobilisat.valeurorigine != ""){
        return  parseFloat(immobilisat.valeurorigine) / parseFloat(immobilisat.duree)
      }
      return null
    },

    getAnnee(){
        const immobilisat = this.immobilisat
      if(immobilisat.duree != "" && immobilisat.date_mise_service != "" && immobilisat.valeurorigine != ""){
        var annee = new Date(immobilisat.date_mise_service).getFullYear()
        return parseFloat(annee) 
      }
      return null
    },

      getNombreDeMois(){
        const immobilisat = this.immobilisat
      if(immobilisat.duree != "" && immobilisat.date_mise_service != "" && immobilisat.valeurorigine != ""){
        var annee = new Date(immobilisat.date_mise_service).getMonth() + 1
        return 13 - parseFloat(annee) 
       
      }
      return null
    },

    Amortissement(){
        const immobilisat = this.immobilisat
      if(immobilisat.duree != "" && immobilisat.date_mise_service != "" && immobilisat.valeurorigine != ""){
        var tableauAmortissement = []
        var tailleDuTableau = this.immobilisat.duree
         var valeurNettActuelle = immobilisat.valeurorigine
          var cumulActuel = this.calculAnnuite
              for(var i = 0; i < tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : this.calculAnnuite,
          valeurNette : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)

          }
    
        return tableauAmortissement
      }
      return null

      
    },

       AmortissementProrataTemporis(){
        const immobilisat = this.immobilisat
      if(immobilisat.duree != "" && immobilisat.date_mise_service != "" && immobilisat.valeurorigine != ""){
        var tableauAmortissement = []
        var tailleDuTableau = this.immobilisat.duree
         var valeurNettActuelle = immobilisat.valeurorigine
          var cumulActuel = this.calculAnnuite

        if(this.getNombreDeMois === 12){
        //       for(var i = 0; i < tailleDuTableau; i++){
        //     let objet = {
        //     annee : this.getAnnee + i,
        //   anuite : this.calculAnnuite,
        //   valeurNette : parseFloat(valeurNettActuelle) - this.calculAnnuite,
        //     cumul: cumulActuel
        //     }
        //     valeurNettActuelle = objet.valeurNette
        //     cumulActuel = this.calculAnnuite + objet.cumul
        //     tableauAmortissement.push(objet)
        //   // i++

        //   }
        return null
        }else{
            for(var i = 0; i <= tailleDuTableau; i++){
            let objet = {
            annee : this.getAnnee + i,
          anuite : i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? this.calculAnnuite - tableauAmortissement[0].anuite : this.calculAnnuite,
          valeurNette : i == 0 ?  parseFloat(valeurNettActuelle) - ( ((valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau) : i == tailleDuTableau ? 0 : parseFloat(valeurNettActuelle) - this.calculAnnuite,
            cumul: i == 0 ? ( (valeurNettActuelle * this.getNombreDeMois) / 12 ) / tailleDuTableau : i == tailleDuTableau ? immobilisat.valeurorigine : cumulActuel
            }
            valeurNettActuelle = objet.valeurNette
            cumulActuel = this.calculAnnuite + objet.cumul
            tableauAmortissement.push(objet)
          // i++

          }
        }
      

        return tableauAmortissement
      }
      return null

      
    },

 
  },
  methods: {
    formatageSomme: formatageSomme,

  }
};
</script>

