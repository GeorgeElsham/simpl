<template>
  <div class="global" v-if="loaded">
    <navbar :society="soc" />
    <div class="block">
        You are not a member of this society yet <div class="menu-button">Join now!</div>
    </div>
    <announcements :soc="soc" />
    <div class="blocks">
      <events :soc="soc" />
      <votings :soc="soc" />
    </div>
  </div>
</template>

<script>
import { ref, setup, onMounted } from "vue";
import Navbar from "../socpage/Navbar.vue";
import Announcements from "../socpage/Announcements.vue";
import Events from "../socpage/Events.vue";
import Votings from "../socpage/Votings.vue";
import axios from "axios"

export default {
  components: {
    Navbar,
    Announcements,
    Events,
    Votings
  },
  setup(props) {

    const soc = ref()
    const loaded = ref(false)

  onMounted(() => {
            axios.get("http://localhost:8000" + '/api/societies/'+vrouter.currentRoute.value.params.id)
            .then((response) => {
                soc.value = response.data.data[0]
                console.log(soc.value)
                axios.get("http://localhost:8000" + '/api/societies/'+vrouter.currentRoute.value.params.id+'/announcements')
                .then((response) => {
                    soc.value.announcements = response.data.data
                console.log(soc.value)

                    axios.get("http://localhost:8000" + '/api/societies/'+vrouter.currentRoute.value.params.id+'/events')
                    .then((response) => {
                console.log(soc.value)

                        soc.value.events = response.data.data

                        loaded.value = true

                        
                    })
                    
                })

            })
        })
    

    return { soc, loaded };
  },
};
</script>

<style scoped>
.global {
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100%;
}

.blocks {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.block {
    padding: 0.9rem 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 10px;
    box-shadow: rgb(50 50 93 / 16%) 0px 3px 22px 5px;
    width: 500px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
}
</style>