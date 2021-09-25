<template>
    <div class="user">
        <h2>Usuário</h2>
        <hr>
        <router-view></router-view>
        <button sucesso @click="goToStart">Voltar</button>
    </div>
</template>

<script>

export default {
    methods: {
        goToStart () {
            // this.$router.push('/')
            // this.$router.push({ path: '/'})
            this.$router.push({ name: 'inicio'})
        }
    }
}
</script>
<style scoped>

</style>