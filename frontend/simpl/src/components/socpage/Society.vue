<template>
<div class="global">
  <navbar :society="soc" />
  <announcements :soc="soc" />
</div>
</template>

<script>
import { ref, setup } from "vue";
import Navbar from "../socpage/Navbar.vue";
import Announcements from "../socpage/Announcements.vue"

export default {
  components: {
    Navbar,
    Announcements,
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
    });

    return { soc };
  },
};
</script>

<style scoped>
.global {
    background-color: #ffff;
}
</style>