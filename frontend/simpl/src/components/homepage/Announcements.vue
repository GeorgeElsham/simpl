<template>
    <div id="announcements">
        <div id="title">
            <p>Announcements</p>
            <hr class="title-line">
        </div>
        <div id="carousel">
            <div class="announcement-block">
                <div class="block-title">
                    dSoc
                </div>
                <div class="block-body">
                    <div class="announcement">
                        <div class="announcement-date">11/12</div>
                        <div class="announcement-title">🍸 Drinking social 🍸</div>
                    </div>
                    <div class="divider-line"></div>
                    <div class="announcement">
                        <div class="announcement-date">20/01</div>
                        <div class="announcement-title">Hackathon</div>
                    </div>
                    <div class="divider-line"></div>
                    <div class="announcement">
                        <div class="announcement-date">01/03</div>
                        <div class="announcement-title">Hobbit takeover</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

#title {
    font-size: 25px;
    text-align: left;

}

#title p {
    margin-left: 20px;
}

#title-line {
    height: 2px;
    color: black;
}

#carousel {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 20px;    
}

.announcement-block {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 15px;
    border-radius: 10px;

}

.announcement {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;

}

.block-title {
    font-weight: bold;
    font-size: 20px;
}

.block-body {
    margin-top: 5px;
}

.announcement-title {
    margin-left: 15px;
    font-weight: bold;
}

.announcement-date {
    font-style: italic;
}

.divider-line {
    background-color: black;
    /* width: 100%; */
    height: 2px;
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
