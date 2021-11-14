<template>
    <div id="societies">
        <div id="your-societies">
            <div class="title">
                <p>Your societies</p>
                <div class="title-line"></div>
            </div>
            <div class="societies">
                <router-link v-for="(s, i) in societies.filter(s => s.member)" :key="i" :to="'/societies/'+s.id" style="text-decoration: none; color: inherit;">
                    <div class="society">
                        <p>{{s.name}}</p>
                    </div>
                </router-link>

            </div>
        </div>
 
        <div id="all-societies">
            <div class="title">
                <p>All societies</p>
                <div class="title-line"></div>
            </div>
            <div class="societies">
                <router-link v-for="(s, i) in societies.filter(s => !s.member)" :key="i" :to="'/societies/'+s.id" style="text-decoration: none; color: inherit;">
                    <div class="society">
                        <p>{{s.name}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

#societies {
    background-color: white;
    /* margin-top: ; */
}

.society {
    background-color: #2196F3;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    user-select: none;
    cursor: pointer;

}

.society img {
    height: 100px;
}

.society p {
    font-weight: bold;
    font-size: 20px;
    /* text-decoration: none !important; */
}

.societies {
    padding: 20px;
    display: flex;
    flex-direction: row;
}



</style>

<script>
import { setup } from 'vue'

export default {
    props: [],
    
    setup(props) {

        const societies = [
            {
                name: "ECSS",
                id: 1,
                member: true,
            },
            {
                name: "dSoc",
                id: 2,
            },
            {
                name: "CyberSoc",
                id: 3,
            },
            {
                name: "Games Society",
                id: 1,
                member: true,
            },
            {
                name: "Spaceflight Society",
                id: 2,
            },
            {
                name: "Video Games & Esports Society",
                id: 3,
            },
            {
                name: "Wireless Society",
                id: 1,
                member: true,
            },
            {
                name: "Asian Cultural Society",
                id: 2,
            },
            {
                name: "ABACUS",
                id: 3,
            },
            {
                name: "Cymru Soc",
                id: 1,
                member: true,
            },
            {
                name: "Archaeology Society",
                id: 2,
            },
            {
                name: "Artificial Intelligence Society",
                id: 3,
            },
        ]

        return { 
            societies
        }
    },

}
</script>
