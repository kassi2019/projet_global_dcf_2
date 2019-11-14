<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="administratif">
        <a
          title="Configurations budgetaires"
          href="#"
          data-toggle="dropdown"
          data-target="#administratif"
          class="dropdown-toggle"
        >
          <span class="text">CONFIGURATIONS BUDGETAIRES.
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
         
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Budget general

            </a>
          </li>
          <li class="divider"></li>
        
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Budget detaillé
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Mouvement budget detaillé
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Structure Géographique
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> suivi des réamenagements budgetaires
            </a>
          </li>
          
          
        </ul>
      </li>
      <!--Plan des passations des marche-->
     <li class="dropdown" id="plant">
        <a title="Plan de passation des marchés" href="#" data-toggle="dropdown" data-target="#plant" class="dropdown-toggle">
          <span class="text">PLAN DES PASSATION DES MARCHES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeMarche'}" tag="a">
              <i class="icon-check"></i>
             Type de marché
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ModePassation'}" tag="a">
              <i class="icon-key"></i> Mode de passation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'EtapeMarche'}" tag="a">
              <i class="icon-check"></i>
             Etapes de marchés
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'MarcheContrat'}" tag="a">
              <i class="icon-key"></i>
              Marchés et contrats
            </router-link>
          </li>
          
        </ul>
      </li>
      <!-- document
      -->
      <li class="dropdown" id="document">
        <a
          title="Documentations des marchés "
          href="#"
          data-toggle="dropdown"
          data-target="#document"
          class="dropdown-toggle"
        >
          <span class="text">DOCUMENTATION DES MARCHES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'DocsPTPAPPM'}" tag="a">
              <i class="icon-key"></i> Document PTBA-PPM
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Document presence CF
            </a>
          </li>
        </ul>
      </li>
     
      
      <!-- out put
      -->
 
       <!-- indicateur
      -->
    
      <!-- Activite
      -->

       <li>
            <router-link :to="{name: 'TableauBordMarche'}" tag="a">
              TABLEAU DE BOARD
            </router-link>
          </li>
    
      <!-- Généraux
      -->
     
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
