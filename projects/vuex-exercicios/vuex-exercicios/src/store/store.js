import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        quantidade: 1,
        preco: 9.90
    },
    getters: {
        amount (state) {
            return state.products.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        addProduct (state, payload) {
            state.products.push(payload)
        },
        setQuantify (state, payload) {
            state.quantidade = payload
        },
        setPrice(state, payload) {
            state.preco = payload
        }
    },
    actions: {
        addProduct (context, payload) {
            setTimeout(() => {
                context.commit('addProduct', payload)
            }, 1000)
        }
    }
})