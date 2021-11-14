<template>
    <div id="events">
        <div class="title">
            <p>Events</p>
            <div class="title-line"></div>
        </div>

        <fieldset id="switch">
            <div class="switch-toggle switch-candy switch-candy-blue">
                <input id="month" name="view" type="radio" checked>
                <label for="month" @click="setFilter('all')">All events</label>

                <input id="week" name="view" type="radio">
                <label for="week" @click="setFilter('attending')">Your Events</label>

                <a></a>
            </div>
        </fieldset>

        <div id="list" v-if="events?.length > 0">
            <Event v-if="!filterMode" v-for="(e, i) in events" :key="i" :event="e" />
            <Event v-else v-for="(e, ii) in events.filter((e,iii) => iii % 15 == 0)" :key="ii" :event="e" />
        </div>
    </div>
</template>

<style scoped>

#events {
    margin-top: 30px;
}

#list {
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 20px;    
}

.divider-line {
    background-color: black;
    /* width: 100%; */
    height: 2px;
}

#switch {
    margin-top: 10px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}



</style>

<script>
import { setup, ref, computed, reactive, onMounted } from 'vue'
import axios from "axios"

import Event from "./Event.vue"

export default {
    props: [],

    components: {
        Event
    },
    
    setup(props) {

        const filterMode = ref(false)

        const events = ref()


        const setFilter = (mode) => {
            console.log(mode)
            switch (mode) {
                case "all":
                    filterMode.value = false                    
                    break;

                case "attending":
                    filterMode.value = true                    
                    break;
            
                default:
                    break;
            }
        }

        onMounted(() => {
            axios.get("http://localhost:8000" + '/api/events/all')
            .then((response) => {
                console.log(response.data)
                events.value = response.data.data
            })
        })

        
        return { 
            events,
            filterMode,
            setFilter
        }
    },

}
</script>
