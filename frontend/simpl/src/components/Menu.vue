<template>
    <div id="menu">
        <div id="menu-left" class="menu-buttons">
            <router-link to="/societies" style="text-decoration: none; color: inherit;">
                <div class="menu-button">
                            Socieities
                </div>
            </router-link>
            
            <router-link to="/" style="text-decoration: none; color: inherit;">
                    <div class="menu-button">Homepage</div>
            </router-link>
            

        </div>
        <div id="menu-heading">
            Good afternoon, <i>Peter</i>
        </div>
        <div id="menu-right" class="menu-buttons">
            <div class="menu-button">Account</div>
        </div>
        <hr id="break">
    </div>
    
</template>

<style>

#menu {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    background-color: white;
    width: 70vw;
}

#menu-heading {
    align-self: center;
    font-weight: bold;
    font-size: 20px;
}

.menu-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.menu-button {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #2196F3;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
}

.menu-button-gray {
    background-color: #616161;
}

#break {
    margin-top: 1rem;
    grid-area: 2 / 1 / 3 / 4;
}

</style>

<script>
import { setup } from 'vue'

export default {
    props: [],
    
    setup(props) {
        return { }
    },

}
</script>
