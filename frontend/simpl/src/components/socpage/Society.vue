<template>
  <div class="global">
    <navbar :society="soc" />
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
</style>