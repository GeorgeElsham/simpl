<template>
    <div class="root">
        <Menu v-if="loggedIn" />
        <!-- <router-view v-slot="{ Component }" style="flex:1">
            <transition name="slide-fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view> -->
        <div id="spacer" v-if="loggedIn"></div>
        <router-view>
        </router-view>
    </div>
</template>

<script>

import { setup } from "vue"

import Home from "./components/homepage/Home.vue"
import Menu from "./components/Menu.vue"
import axios from "axios"

import state from "./state.js"

export default {
    name: "App",
    components: {
        Home,
        Menu
    },

    setup() {

        axios.get("http://localhost:8000" + '/api/auth/protected')
        .then((response) => {
            if(response.data.working) {
                state.loggedIn.value = true
                // state.name.value = 
            }
        })
        .catch((e) => {
        console.log(e);
        });

        return {
            loggedIn: state.loggedIn
        }
    }


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
.root {
    width: 70vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
}

#spacer {
    height: 50px;
    width: 100%;
    background-color: white;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
