<template>
  <div>
    <div class="container-hor">
      <router-link class="link" to="/login">Governance</router-link>
      <router-link class="link" to="/login">Shop</router-link>
      <h1>{{ society.name }}</h1>
      <router-link class="link" to="/login">News</router-link>
      <router-link class="link" to="/login">About</router-link>
    </div>
    <hr />
  </div>
</template>

<script>
import RouterLink from "vue-router";
import { setup } from "vue";

export default {
  props: ["society"],
  setup(props) {
    return {
      society: props.society,
    };
  },
};
</script>
<style scoped>
.container-hor {
    width: 90vw;
  margin: 2.5% 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

a.link {
  color: #212121;
  font-size: 2rem;
  text-decoration: none;
}

a.link:hover {
  text-decoration: underline;
}
</style>