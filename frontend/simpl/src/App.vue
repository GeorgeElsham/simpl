<template>
    <router-view />
</template>

<script>

import Home from "./components/homepage/Home.vue"

export default {
    name: "App",
    components: {
        Home
    },
};
</script>

<style>
html, * {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
}
</style>
