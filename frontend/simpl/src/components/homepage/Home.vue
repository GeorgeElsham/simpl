<template>
    <div id="home">

        <Announcements />
        
        <Events />

    </div>
</template>

<style>

#home {
    min-height: 100%;
    display: grid;
    grid-template-columns: 70vw;
    grid-template-rows: 400px minmax(0, 2fr);
    background-color: white;
}



</style>

<script>
import { setup } from 'vue'

import Announcements from "./Announcements.vue"
import Events from "./Events.vue"

export default {
    props: [],

    components: {
        Announcements,
        Events,
    },
    
    setup(props) {
        return { }
    },

}
</script>
