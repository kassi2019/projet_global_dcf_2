<template>
    <div class="container-fluid">
        <div class="quick-actions_homepage span12" >
            <ul class="quick-actions" style="margin: 0px !important;">
                <li class="bg_lb">
                    <a href="#">
                        <i class="icon-dashboard"></i> <span class="label label-important">{{totalActeurDepense}}</span> Total acteur depense
                    </a>
                </li>
                <li class="bg_lg">
                    <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{totalActeurEnctivite}}</span> Total acteur en activité
                    </a>
                </li>
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{totalActeurAccredite}}</span> Total acteur accredité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                    Taux acteurs acredité
                </a> </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],


            };
        },

        created() {

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions",
                "grades","niveau_etudes","nbr_acteur_actredite_taux","all_acteur_depense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"])
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),

        }
    };
</script>

