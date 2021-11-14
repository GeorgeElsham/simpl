<template>
    <Menu />
    <router-view style="width: 70%" />
</template>

<script>

import Home from "./components/homepage/Home.vue"
import Menu from "./components/Menu.vue"

export default {
    name: "App",
    components: {
        Home,
        Menu
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,0.05);
}

.title {
    font-size: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title p {
    font-weight: bold;
}

.title-line {
    margin-top: 5px;
    height: 2px;
    width: 300px;
    background-color: black;
}
</style>
