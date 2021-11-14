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
import { setup, ref, computed, reactive } from 'vue'

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

        const events = ref([
            {
                name: "ECSS Hobbit Takeover tonight!",
                date: "Wednesday, 10/11/2021, 19:00",
                body: "Don’t worry if you're late, we're going to be staying at Hobbit until 11, so you definitely wont miss out on anything :) And of course, we're going to be heading down to Jesters after Hobbit, so if you would like to join us on that then make sure you bring cash and wear your jesters shoes! :BlobbleWobble:",

                attending: true,
            },
            {
                name: "After last week's TGM, the voting period has opened for the Autumn Elections!!!",
                date: "Tuesday, 04/11/2021, 19:00",
                body: "Don’t worry if you're late, we're going to be staying at Hobbit until 11, so you definitely wont miss out on anything :) And of course, we're going to be heading down to Jesters after Hobbit, so if you would like to join us on that then make sure you bring cash and wear your jesters shoes! :BlobbleWobble:",

                attending: false,
            },
            {
                name: "After last week's TGM, the voting period has opened for the Autumn Elections!!!",
                date: "Tuesday, 04/11/2021, 19:00",
                body: "If you’ve somehow missed all of this, there are four roles going up for grabs, with 9 candidates fighting for their place on the committee.",

                attending: false,
            },
        ])

        const filteredEvents = computed(() => {
            return filterMode.value ? events.value.filter(e => e.attending) : events.value
        })
        
        return { 
            filteredEvents,
            setFilter
        }
    },

}
</script>
