<template>
    <div id="societies">
        <div id="your-societies">
            <div class="title">
                <p>Your societies</p>
                <div class="title-line"></div>
            </div>
            <div class="societies">
                <div class="society" v-for="(s, i) in societies" :key="i">
                    <!-- <img :src="'@/assets/'+s.img"> -->
                    <p>{{s.name}}</p>
                </div>
            </div>
        </div>
 
        <div id="all-societies">
            <div class="title">
                <p>All societies</p>
                <div class="title-line"></div>
            </div>
            <div class="society">
                <div class="logo"></div>

            </div>
        </div>
    </div>
</template>

<style scoped>

#societies {
    background-color: white;
}

.society img {
    height: 100px;
}

.society p {
    font-weight: bold;
    font-size: 20px;
}

.societies {
    padding: 20px;
}



</style>

<script>
import { setup } from 'vue'

export default {
    props: [],
    
    setup(props) {

        const societies = [
            {
                name: "ECSS",
                id: 1,
                img: "ecss-logo.webp"
            },
            {
                name: "dSoc",
                id: 2,
                img: "dSoc-logo.webp"
            },
            {
                name: "CyberSoc",
                id: 3,
                img: "cybersoc-logo.webp"
            },
        ]

        return { 
            societies
        }
    },

}
</script>
