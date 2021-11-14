<template>
    <div id="event-modal" v-if="visible">
        <div id="modal-title">
            Create event
            <div style="margin-left: 5px; user-select: none" @click="close">❌</div>
        </div>
        <div id="wrapper">
            <input type="text" class="modal-input" placeholder="Title" ref="titleInput">
            <input type="text" class="modal-input" placeholder="Summary" ref="summaryInput">
            <textarea name="Text1" cols="21" rows="5" class="modal-input" placeholder="Description" ref="descriptionInput"></textarea>
            <input type="date" class="modal-input" placeholder="Date" ref="dateInput">
            <button class="modal-button" @click="create">Create</button>
        </div>
    </div>
</template>

<style scoped>
#modal-title {
    font-weight: bold;
    font-size: 20px;
}

#event-modal {

    border: 2px black solid;
    display: inline-block;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 10;
    /* position: fixed; */
    /* box-sizing: content-box; */
    /* position: fixed; */
    /* margin-left: auto; */
}

#wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

}

#modal-title {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.modal-input {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
}

.modal-button {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}

</style>

<script>
import { setup, ref, watch } from 'vue'

export default {
    props: ["toggle"],
    
    setup(props) {

        const titleInput = ref()
        const summaryInput = ref()
        const descriptionInput = ref()
        const dateInput = ref()

        const visible = ref(true)

        watch(() => props.toggle, (n, o) => {
            visible.value = !visible.value 
        })

        const create = () => {
            if (titleInput.value.value && summaryInput.value.value && descriptionInput.value.value && dateInput.value.value) {
                // submit
            }
        }

        const close = () => {
            visible.value = false
        }

        return { 
            titleInput,
            summaryInput,
            descriptionInput,
            dateInput,
            create,
            close,
            visible
        }
    },

}
</script>
