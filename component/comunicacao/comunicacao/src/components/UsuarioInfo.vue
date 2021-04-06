<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nameInverter() }}</strong></p>
        <button @click="restartName">Reiniciar nome</button>
        <button @click="restartFn">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
export default {

    props: {
        name: {
            type: String,
            //required: true,            
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // },
            default: 'Anônimo'
        },
        restartFn: Function
    },

    methods: {
        nameInverter() {
            return this.name.split('').reverse().join('')
        },
        restartName() {
            this.name = 'Pedro'
            this.$emit('alterNamer', this.name)
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
