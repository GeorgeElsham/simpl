<template>
    <navbar :society="soc" />
</template>

<script>
import {ref, setup} from 'vue';
import Navbar from '../socpage/Navbar.vue'


export default {
    components: {
        Navbar
    },
    setup(props) {
        const soc = ref({
            name: "Some Society"
        })

        return {soc}
    }

}

</script>

<style scoped>

</style>