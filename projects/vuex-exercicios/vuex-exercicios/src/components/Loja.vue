<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        quantidade () {
            return this.$store.state.parameters.quantidade
        },
        preco () {
            return this.$store.state.parameters.preco
        }
    },
    methods: {
        ...mapActions(['addProduct']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            console.log(produto)
            // this.$store.state.products.push(produto)
            //this.$store.commit('addProduct', produto)
            // this.addProduct(produto)
            this.$store.dispatch('addProduct', produto)

            console.log(this.$store.getters.getName)
            console.log(this.$store.getters.getFullName)
        }
    },

    mounted () {
        console.log('this.$store. ', this.$store)
        console.log('2 ', this.$store.state.parameters.preco)
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
