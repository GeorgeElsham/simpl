<template>
    <div class="announcement-block" ref="blockDiv">
        <div class="block-title">
            {{ block.name }}
        </div>
        <div class="block">
            <div class="block-body">
                <div class="announcement" v-for="(a, i) in block.announcements" :key="i">
                    <div class="announcement-date">{{ new Date(a.createdAt).getUTCDate() }}/{{ new Date(a.createdAt).getUTCMonth()+1 }}</div>
                    <div class="announcement-title">{{ a.description }}</div>
                </div>
            </div>
            <!-- <div class="block-scroll">
                <img src="@/assets/up-arrow.svg">
                <img src="@/assets/down-arrow.svg">
            </div> -->
        </div>
    </div>
</template>

<style scoped>

.announcement-block {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 15px;
    border-radius: 10px;
    margin-left: 20px;
    min-width: 350px;
    max-height: 400px;
    overflow-y: scroll;

}

.announcement {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    /* background-color: rgba(255,255,255,0.9); */
    background-color: rgba(0,0,0,0.5);
    /* background-color: rgba(255,255,255,0.5); */
    /* background-color: white; */
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;

}

.block {
    display: flex;
    flex-direction: row;
}

.block-scroll {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.block-title {
    font-weight: bold;
    font-size: 20px;
    background-color: white;
    border-radius: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    /* box-sizing: content-box; */
}

.block-body {
    margin-top: 5px;
    flex: 1;
}

.announcement-title {
    margin-left: 15px;
    font-weight: bold;
}

.announcement-date {
    font-style: italic;
}

</style>

<script>
import { setup, ref, onMounted } from 'vue'

export default {
    props: ["s"],
    
    setup(props) {

                let gradients = ["linear-gradient(45deg, #fc466b, #3f5efb)", 
        "linear-gradient(45deg, #fc4a1a, #f7b733)",
        "linear-gradient(45deg, #00f260, #0575e6)",
        "linear-gradient(45deg, #0f0c29, #302b63, #24243e)",
        "linear-gradient(45deg, #0f0c29, #ffefba, #ffffff)",
        "linear-gradient(45deg, #0f0c29, #ff416c, #ff4b2b)",
        "linear-gradient(45deg, #03001e, #7303c0, #ec38bc, #fdeff9)",
        "linear-gradient(45deg, #396afc, #2948ff)",
        "linear-gradient(45deg, #283c86, #45a247)",
        ]

        const blockDiv = ref(null)

        onMounted(() => {
            blockDiv.value.style.background = gradients[Math.floor(Math.random()*gradients.length)]
        })

        return {
            block: props.s,
            blockDiv
        }
    },

}
</script>
