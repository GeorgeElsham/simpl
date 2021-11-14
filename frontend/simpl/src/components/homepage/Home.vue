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

#title {
    font-size: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#title p {
    font-weight: bold;
}

.title-line {
    margin-top: 5px;
    height: 2px;
    width: 300px;
    background-color: black;
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
