<template>
  <div class="container">
    <div class="menu-button menu-button-gray" style="position: absolute; right: 20px; top: 0px" @click="toggle = !toggle">Create announcement</div>

    <h1 class="title">Announcements</h1>
    <div class="announcements">
      <div class="block"  v-for="(u, i) in soc.updates" :key="i">
        <div class="title">{{ u.title }}</div>
        <div class="date">{{ u.date.toLocaleDateString("en-US") }}</div>
      </div>
    </div>
  </div>
  <CreateAnnouncement :toggle="toggle" />
</template>

<script>
import { ref, setup } from "vue";
import CreateAnnouncement from "./CreateAnnouncement.vue"

export default {
  props: ["soc"],
  components: {
      CreateAnnouncement
  },
  setup(props) {
    const toggle = ref(false)
    return {
        soc: props.soc,
        toggle
    }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1rem;
  position: relative;
}
.announcements {
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}
.block {
    padding: 0.9rem 7rem;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 1rem;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 16%) 0px 3px 22px 5px;
}
</style>