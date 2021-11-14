<template>
    <div id="home">

        <Announcements />
        
        <Events />

    </div>
</template>

<style>

#home {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
}



</style>

<script>
import { setup, onMounted, ref } from 'vue'
import axios from "axios"

import Announcements from "./Announcements.vue"
import Events from "./Events.vue"

export default {
    props: [],

    components: {
        Announcements,
        Events,
    },
    
    setup(props) {


        const announcements = ref()


        return { }
    },

}
</script>
