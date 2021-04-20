<template>
    <div class="citacao">
       <slot name="author"></slot>
       <slot name="text"></slot>
       <slot name="source"></slot>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    h1 {
        color: red;
    }
</style>
