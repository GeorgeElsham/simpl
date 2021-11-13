<template>
  <div class="container">
    <h1 class="title">Updates</h1>
    <div class="announcements">
      <div class="block"  v-for="(u, i) in soc.updates" :key="i">
        <div class="title">{{ u.title }}</div>
        <div class="date">{{ u.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, setup } from "vue";
export default {
  props: ["soc"],
  setup(props) {
    return;
    soc: props.soc;
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.announcements {
  display: flex;
  flex-direction: horizontal;
  align-content: space-around;
}
.block {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 1rem;
}
</style>