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

        <div id="list">
            <Event v-for="(e, i) in filteredEvents" :key="i" :event="e" />
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

        const setFilter = (mode) => {
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

        const events = ref()
        onMounted(() => {
            axios.get("https://simpl-app.herokuapp.com" + '/api/events/all')
            .then((response) => {
                console.log(response.data)
                events.value = response.data.data
            })
        })

        const filteredEvents = computed(() => {
            return filterMode.value ? events.value.filter((e,i) => i % 15 == 0) : events.value
        })
        
        return { 
            filteredEvents,
            setFilter
        }
    },

}
</script>
