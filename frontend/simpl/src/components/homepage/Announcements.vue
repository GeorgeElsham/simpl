<template>
    <div id="announcements">
        <div class="title">
            <p>Announcements</p>
            <div class="title-line"></div>
        </div>
        <div id="carousel">
            <announcement-block v-for="(s, i) in societies" :s="s" :key="i"  />
        </div>
    </div>
</template>

<style scoped>

#announcements {
    /* margin-top: 50px;
     */
     align-self: center;
     max-width: 100%;
}

#carousel {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 20px;    
    overflow-x: scroll;
}

#carousel::-webkit-scrollbar {
    display: none;
}



.divider-line {
    background-color: black;
    /* width: 100%; */
    height: 2px;
}



</style>

<script>
import { setup, ref, onMounted, getTransitionRawChildren } from 'vue'
import axios from "axios"


import AnnouncementBlock from "./AnnouncementBlock.vue"

export default {
    props: [],

    components: {
        AnnouncementBlock
    },
    
    setup(props) {

        const societies = ref()

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
            {
                societyName: "T&I",
                background: "linear-gradient(45deg, #0f0c29, #302b63, #24243e)",
                announcements: [
                    {
                        date: "09/09",
                        name: "Bloomber Terminal introduction"
                    },
                    {
                        date: "07/04",
                        name: "Bloomberg interview"
                    },
                    {
                        date: "02/02",
                        name: "Pub quiz"
                    },
                ]
            },
        ])



        
        onMounted(() => {
            
            axios.get("http://localhost:8000" + '/api/societies')
            .then((response) => {
                console.log(response.data)
                societies.value = response.data.data
                window.societies = societies
                

                axios.get("http://localhost:8000" + "/api/announcements/all")
                .then((response) => {
                    let announcements = response.data.data
                    window.announcements = announcements
                    console.log(societies, announcements)

                    announcements.forEach(a => {
                        // console.log(societies.value)
                        let soc = societies.value.find(s => s.id == a.society_id)
                        //console.log(soc)
                        if (!soc) return
                        if (!soc.announcements) soc.announcements = []
                        soc.announcements.push(a)
                    })

                    console.log(societies.value)
                })
                
            })

        })
        return { 
            societies
        }
    },

}
</script>
