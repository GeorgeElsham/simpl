<template>
  <div class="container">
    <h1>Events & Socials</h1>
    <div class="list">
      <div class="event" v-for="(e, i) in soc.events" :key="i">
        <div>
          {{ e.date.toLocaleDateString("en-US") }} ––
          {{ e.title }}
        </div>
        <router-link class="signup" to="/">SignUp</router-link>
      </div>
    </div>
  <div class="menu-button menu-button-gray" @click="toggle = !toggle">Create event</div>
  <CreateEvent :toggle="toggle" />
  </div>

</template>

<script>
import { ref, setup } from "vue";
import CreateEvent from "./CreateEvent.vue"

export default {
  props: ["soc"],
  components: {
      CreateEvent
  },

  setup(props) {
        const toggle = ref(false)

    return {
      soc: props.soc,
      toggle
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
  background-color: #ffff;
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