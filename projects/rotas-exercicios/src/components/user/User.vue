<template>
    <div class="user">
        <h2>Usuário</h2>
        <hr>
        <button sucesso @click="goToStart">Voltar</button>
    </div>
</template>

<script>

export default {
    methods: {
        goToStart () {
            // this.$router.push('/')
            this.$router.push({ path: '/'})
        }
    }
}
</script>
<style scoped>

</style>