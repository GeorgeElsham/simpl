<template>
    <div id="societies">
        <div class="menu-button menu-button-gray" style="position: absolute; right: 20px; top: 20px" @click="toggle = !toggle">Create society</div>
        <div id="your-societies">
            <div class="title">
                <p>Your societies</p>
                <div class="title-line"></div>
            </div>
            <div class="societies">
                <router-link v-for="(s, i) in societies.filter((s,ii) => ii % 15 == 0)" :key="i" :to="'/societies/'+s.id" style="text-decoration: none; color: inherit;">
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
                <router-link v-for="(s, i) in societies" :key="i" :to="'/societies/'+s.id" style="text-decoration: none; color: inherit;">
                    <div class="society">
                        <p>{{s.name}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <CreateSociety :toggle="toggle" />
</template>

<style scoped>

#societies {
    background-color: white;
    position: relative;
    /* margin-top: ; */
}

.society {
    background-color: #2196F3;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    user-select: none;
    cursor: pointer;
    margin-top: 15px;
    border-radius: 5px;

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
    flex-wrap: wrap;
    justify-content: center;
}



</style>

<script>
import { setup, ref, onMounted } from 'vue'
import axios from "axios"


import CreateSociety from './CreateSociety.vue'

export default {
    props: [],

    components: {
        CreateSociety
    },
    
    setup(props) {

        const toggle = ref(false)

        const societies = ref([])

        onMounted(() => {
            
            axios.get("http://localhost:8000" + '/api/societies/all')
            .then((response) => {
                console.log(response.data)
                societies.value = response.data.data
            })

        })

        return { 
            societies,
            toggle
        }
    },

}
</script>
