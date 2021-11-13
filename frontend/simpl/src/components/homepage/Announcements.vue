<template>
    <div id="announcements">
        <div id="title">
            <p>Announcements</p>
            <hr class="title-line">
        </div>
        <div id="carousel">
            <announcement-block v-for="(block, i) in announcementBlocks" :block="block" :key="i"  />
        </div>
    </div>
</template>

<style scoped>

#title {
    font-size: 25px;
    text-align: left;

}

#title p {
    margin-left: 20px;
}

#title-line {
    height: 2px;
    color: black;
}

#carousel {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 20px;    
}



.divider-line {
    background-color: black;
    /* width: 100%; */
    height: 2px;
}



</style>

<script>
import { setup, ref } from 'vue'

import AnnouncementBlock from "./AnnouncementBlock.vue"

export default {
    props: [],

    components: {
        AnnouncementBlock
    },
    
    setup(props) {

        const announcementBlocks = ref([
            {
                societyName: "dSoc",
                background: "linear-gradient(45deg, #fc466b, #3f5efb)",
                announcements: [
                    {
                        date: "11/12",
                        name: "Drinking social 🍸"
                    },
                    {
                        date: "20/01",
                        name: "Hackathon"
                    },
                    {
                        date: "01/03",
                        name: "Hobbit takeover"
                    },
                ]
            },
            {
                societyName: "Hiking Society",
                background: "linear-gradient(45deg, #00f260, #0575e6)",
                announcements: [
                    {
                        date: "20/12",
                        name: "Isle of Wight trip"
                    },
                    {
                        date: "02/02",
                        name: "Merch drop"
                    },
                    {
                        date: "07/04",
                        name: "Pizza night"
                    },
                ]
            },
            {
                societyName: "Baking Society",
                background: "linear-gradient(45deg, #fc4a1a, #f7b733)",
                announcements: [
                    {
                        date: "15/11",
                        name: "Chinese cousine cooking competition"
                    },
                    {
                        date: "22/12",
                        name: "Bake sale"
                    },
                    {
                        date: "32/12",
                        name: "Nothing"
                    },
                ]
            },
        ])
        return { 
            announcementBlocks
        }
    },

}
</script>
