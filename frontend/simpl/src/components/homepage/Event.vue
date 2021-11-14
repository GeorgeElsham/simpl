<template>
    <div class="event">
        <div class="content-wrapper">
            <div class="event-header">
                <div class="event-title">{{ event.title }}</div>
                <div class="event-date">{{ new Date(event.start_date).toLocaleString("en-US") }}</div>
            </div>

            <div class="event-body">
                <div class="event-text">{{ event.description }}</div>
            </div>
        </div>

        <div class="event-button">Sign up</div>



    </div>
</template>

<style scoped>

.event {
    box-shadow: rgb(50 50 93 / 16%) 0px 3px 22px 5px;
    padding: 30px;
    border-radius: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.content-wrapper {
    flex: 4;

}

.event-body {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
}

.event-text {
    /* text-align: left; */
    text-align: justify;
    margin-right: 70px;
    padding-right: 20px;
}

.event-button {
    flex: 1;
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
}

.event-header {

}

.event-title {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
}

.event-date {
    font-size: 18px;
    text-align: left;
}


</style>

<script>
import { setup } from 'vue'

export default {
    props: ["event"],
    
    setup(props) {
        return {
            event: props.event  
        }
    },

}
</script>
