<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        quantidade: {
            get () {
                return this.$store.state.parameters.quantidade
            },
            set (value) {
                return this.$store.commit('setQuantify', value)
            }
        },
        preco: {
            get () {
                return this.$store.state.parameters.preco
            },
            set (value) {
                return this.$store.commit('setPrice', value)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
