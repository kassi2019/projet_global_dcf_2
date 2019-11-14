
<template>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreUniteAdministratives}}</span> Nombre Unite d'administrative
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreArchivageDocument}}</span>Nombre Archivage document
          </a>
        </li>
        <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTypeText}}</span>Nombre de type texte
          </a>
        </li>
      
      </ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  name:'tableaudebord',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument",
      // "nbreNouveauProjet"

      // "nbreArchivageNotes"
    ]),
  
  },
  methods: {}
};
</script>



<style>


</style>
