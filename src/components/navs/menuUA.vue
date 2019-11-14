<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <!-- <li class="dropdown" id="profile-messages">
        <a
          title="Unité administrative"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <span class="text">UNITES ADMINISTRATIVES </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Gestion des unites administratives
            </router-link>
          </li>
        </ul>
      </li> -->

       <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              UNITES ADMINISTRATIVES
            </router-link>
          </li>
      <!--Source de financement-->
      <li class="dropdown" id="menu-messages">
        <a
          title="Documentation"
          href="#"
          data-toggle="dropdown"
          data-target="#menu-messages"
          class="dropdown-toggle"
        >
          <span class="text">DOCUMENTATION </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'typetext'}" tag="a">
              <i class="icon-book"></i>
              Type de texte
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'archivagedocument'}" tag="a">
              <i class="icon-upload-alt"></i>Archivage Document
            </router-link>
          </li>
        </ul>
      </li>
      <!--Paramètres programmes
      -->

      <li class="dropdown" id="listeua">
        <a
          title="Out put"
          href="#"
          data-toggle="dropdown"
          data-target="#listeua"
          class="dropdown-toggle"
        >
          <span class="text">OUT PUT</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'listeuniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Listes Unites Administratives
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'listetypetexte'}" tag="a">
              <i class="icon-user"></i>
              Listes Types Textes
            </router-link>
          </li>

          <li>
            <router-link :to="{name: 'ordonnedocua'}" tag="a">
              <i class="icon-user"></i>
              Listes Archivages Documents
            </router-link>
          </li>
        </ul>
      </li>
   

      <!--- tableau de bord -->
        <li>
            <router-link :to="{name: 'tableaudebord'}" tag="a">
              TABLEAU DE BOARD
            </router-link>
          </li>
     
    </ul>
  </div>
</template>

<script>


export default {};
</script>
