<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário {{ age }}</p>
        <button @click="alterAge">Alterar idade</button>
    </div>
</template>

<script>
import bus from '@/bus'
export default {
    props: {
        age: Number
    },

    methods: {
        alterAge() {
           this.age = 33
           bus.alterAge(this.age)
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
