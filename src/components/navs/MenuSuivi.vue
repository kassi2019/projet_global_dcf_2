<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="excution">
        <a
          title="Execution marchés-contrat"
          href="#"
          data-toggle="dropdown"
          data-target="#excution"
          class="dropdown-toggle"
        >
          <span class="text">EXECUTION DES MARCHES ET CONTRATS
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'SecteurActivite'}" tag="a">
              <i class="icon-user"></i>
            Secteur d'activité
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Entreprise'}" tag="a">
              <i class="icon-check"></i>
             Entrprise
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>Suivi des obligations sociales
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i> Marchés & Contrats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i> Avenants
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i> suivi du respects des delais contratuels
            </a>
          </li>
          
          
        </ul>
      </li>
      <!--Excution budgetaire-->
      <li class="dropdown" id="plant">
        <a title="Excution budgetaire" href="#" data-toggle="dropdown" data-target="#plant" 
        class="dropdown-toggle">
          <span class="text">EXECUTION BUDGETAIRE </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
            Suivi des engagements
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>Suivi des mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Documentation engagement-mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>
              Op hors SIGFIP provisoires

            </a>
          </li>

           <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Op hors SIGFIP définitifs 

            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>
              Document op hors SIGFIP
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Suivi des rejets et des différés
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-key"></i>
             Suivi du délai de traitement des dossiers

            </a>
          </li>

           <li>
            <router-link :to="{name: 'SourceFinancement'}" tag="a">
              <i class="icon-user"></i>
           Suivi d'une activité particulière 
            </router-link>
          </li>
          <li class="divider"></li>
     
          
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivre l'exécution et les régularisations des régies
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi de certaines catégories d'opérations
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi du respect du référentiel des prix
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi du respect du glossaire des natures de dépense
            </a>
          </li>

          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi du patrimoine

            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi de la répartition des ressources
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des dépenses improductives
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi des projets et programmes en transferts

            </a>
          </li>
          
           <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi des actes de modification budgétaire
            </a>
          </li>

          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Comptabilisation des lettres d'avance
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Gestion des mandats-provision
            </a>
          </li>

        </ul>
      </li>
      <!-- document
      -->
       <li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#mission"
          class="dropdown-toggle"
        >
          <span class="text">SUIVI DES MISSIONS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'CategorieMission'}" tag="a">
              <i class="icon-key"></i> Catégories de missions
            </router-link>
          
          </li>

            <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'NormeMission'}" tag="a">
              <i class="icon-key"></i> Norme de missions
            </router-link>
          
          </li>
          <li class="divider"></li>
            <li> 
              <router-link :to ="{name: 'Imputation'}" tag="a">
                <i class="icon-user"></i> Imputation budget en mission
              </router-link>
            </li>
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'Mission'}" tag="a">
              <i class="icon-check"></i>
             Missions
            </router-link>
          </li>
        </ul>
      </li>
     
     
      
      <!-- Activite
      -->
     <li class="dropdown" id="tableau">
        <a
          title="Suivi des immobilisations"
          href="#"
          data-toggle="dropdown"
          data-target="#tableau"
          class="dropdown-toggle"
        >
          <span class="text">SUIVI DES IMMOBILISATIONS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name:'listeEquipement'}" tag="a">
              <i class="icon-list-ol"></i>
              <span class="text">Types équipements</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'famille'}" tag="a">
              <i class="icon-shopping-cart"></i>
              <span class="text">Articles</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'service'}" tag="a">
              <i class="icon-home"></i>
              <span class="text">Services</span>
            </router-link>
          </li>

          <li title="Bessoin Immobilisation">
            <router-link :to="{name:'besionImmolisation'}" tag="a">
              <i class="icon-list"></i>
              <span class="text">Demande d'équipement</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'immobilisation'}" tag="a">
              <i class="icon-money"></i>
              <span class="text">Immobilisations</span>
            </router-link>
          </li>

           <li>
            <router-link :to="{name:'simulationAmortissement'}" tag="a">
              <i class="icon-table"></i>
              <span class="text">Simulateur Amortissement</span>
            </router-link>
          </li>

          <li>
            <router-link :to="{name:'listeStructureMoinEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Moin équipé</span>
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'listeStructurePlusEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Plus équipé</span>
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'listeActeurEquipe'}" tag="a" title>
              <i class="icon-group"></i>
              <span class="text">Acteur équipé</span>
            </router-link>
          </li>
     <li>
            <router-link :to="{name:'listeImmobilisationParUa'}" tag="a" title>
              <i class="icon-search"></i>
              <span class="text">Recherche Immobilisation</span>
            </router-link>
          </li>
        </ul>
      </li>

  <!-- out put
      -->
     <!-- <li class="dropdown" id="bord1">
        <a
          title="Out Put"
          href="#"
          data-toggle="dropdown"
          data-target="#bord1"
          class="dropdown-toggle"
        >
          <span class="text">OUT PUT </span>
                    <b class="caret"></b>

          </a>
        <ul class="dropdown-menu">
        
         
          
        </ul>
      </li> -->

  <!-- indicateur
      -->
     
      <!-- Généraux
      -->
        <li>
        <router-link
              :to="{name:'TableauBordImmo'}"
              tag="a"
              title="Tableau de Bord Immobilisation"
            >
          <span class="text">TABLEAU DE BOARD</span>
          
        </router-link>
      
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  
 
};
</script>
