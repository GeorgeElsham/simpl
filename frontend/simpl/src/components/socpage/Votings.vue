<template>
  <div class="container">
    <h1>Votings</h1>
    <div class="list">
      <div class="event" v-for="(e, i) in soc.events" :key="i">
        <div>
          {{ new Date(e.start_date).getUTCDate() }}/{{ new Date(e.start_date).getUTCMonth()+1 }} ––
          <p style="max-width: 300px">{{ e.title }}</p>
        </div>
        <router-link class="signup" to="/">Vote Now!</router-link>
      </div>
    </div>
   <div class="menu-button menu-button-gray" @click="toggle = !toggle">Create voting</div>
  </div>
</template>

<script>
import { ref, setup } from "vue";

export default {
  props: ["soc"],

  setup(props) {
    return {
      soc: props.soc,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100%;
}

.list {
  height: max-content;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 16%) 0px 3px 22px 5px;
  gap: 2rem;
}

.event {
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.signup {
    background-color: #2196F3;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    max-width: 150px;
    text-decoration: none;
}
</style>