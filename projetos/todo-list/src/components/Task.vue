<template>
    <div class="task" :class="stateClass">
        <span class="close" @click="$emit('taskDeleted', task)">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
	props: {
        task: {
            type: Object,
            required: true
        }
    },

    computed: {
        stateClass () {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
.task {
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.pending {
    border-left: 4px solid red;
    background: #ff6363;
}
.pending .close {
    background-color: #b73229;

}
.done  {
    border-left: 4px solid green;
    background: rgb(62, 219, 62);
    text-decoration: line-through;
    color: #eee;
}
.done .close{
    background-color: #0a8f08;
}
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
</style>
