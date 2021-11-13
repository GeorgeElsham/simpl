<template>
    <div class="event">
        <div class="event-header">
            <div class="event-title">{{ event.name }}</div>
            <div class="event-date">{{ event.date }}</div>
        </div>

        <div class="event-body">
            <div class="event-text">{{ event.body }}</div>
            <div class="event-button">Sign up</div>
        </div>

    </div>
</template>

<style scoped>

.event {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 30px;
    border-radius: 20px;
    margin-top: 20px;
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
    flex: 4;
    margin-right: 40px;
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
