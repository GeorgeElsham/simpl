<template>
    <div id="home">

        <div id="menu">
            <div id="menu-left" class="menu-buttons">
                <div class="menu-button">All societies</div>
                <div class="menu-button">Button2</div>

            </div>
            <div id="menu-heading">
                Good afternoon, <i>Peter</i>
            </div>
            <div id="menu-right" class="menu-buttons">
                <div class="menu-button">Account</div>
                <div class="menu-button">Create society</div>
            </div>
        </div>

        <Announcements />
        
        <Events />

    </div>
</template>

<style>

#home {
    min-height: 100%;
    display: grid;
    grid-template-columns: 60vw;
    grid-template-rows: 50px minmax(0, 1fr) minmax(0, 2fr);
    background-color: white;
}

#menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
}

#menu-heading {
    align-self: center;
    font-weight: bold;
    font-size: 20px;
}

.menu-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.menu-button {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(0,0,0, 0.7);
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
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
        Events
    },
    
    setup(props) {
        return { }
    },

}
</script>
