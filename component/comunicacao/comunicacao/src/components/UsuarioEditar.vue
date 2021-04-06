<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário {{ age }}</p>
        <button @click="alterAge">Alterar idade</button>
    </div>
</template>

<script>
export default {
    props: {
        age: Number
    },

    methods: {
        alterAge() {
           this.$emit('newAge', 33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
