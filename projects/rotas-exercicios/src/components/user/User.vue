<template>
    <div class="user">
        <h2>Usuário</h2>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <button sucesso @click="goToStart">Voltar</button>
    </div>
</template>

<script>

export default {
    /* data () {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id
        }
    }, */
    props: ['id'],
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