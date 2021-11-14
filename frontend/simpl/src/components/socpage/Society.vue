<template>
  <div class="global">
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
import { ref, setup } from "vue";
import Navbar from "../socpage/Navbar.vue";
import Announcements from "../socpage/Announcements.vue";
import Events from "../socpage/Events.vue";
import Votings from "../socpage/Votings.vue";

export default {
  components: {
    Navbar,
    Announcements,
    Events,
    Votings
  },
  setup(props) {

  onMounted(() => {
            axios.get("http://localhost:8000" + '/api/events/all')
            .then((response) => {
                console.log(response.data)
                events.value = response.data.data
            })
        })
    const soc = ref({
      name: "Some Society",
      updates: [
        {
          title: "some title 1",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 2",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 3",
          date: new Date("2017-11-12"),
        },
      ],
      events: [
        {
          title: "some title 1",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 2",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 3",
          date: new Date("2017-11-12"),
        },
                {
          title: "some title 1",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 2",
          date: new Date("2017-11-12"),
        },
        {
          title: "some title 3",
          date: new Date("2017-11-12"),
        },
      ],
    });

    return { soc };
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