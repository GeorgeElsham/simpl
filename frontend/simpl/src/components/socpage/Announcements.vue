<template>
  <div class="container">
    <h1 class="title">Updates</h1>
    <div class="announcements">
      <div class="block"  v-for="(u, i) in soc.updates" :key="i">
        <div class="title">{{ u.title }}</div>
        <div class="date">{{ u.date.toLocaleDateString("en-US") }}</div>
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
  gap: 1rem;
}
.announcements {
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  width: 100%;
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