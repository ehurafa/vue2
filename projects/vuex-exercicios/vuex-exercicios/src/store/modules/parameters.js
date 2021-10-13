export default {
    state: {
        quantidade: 1,
        preco: 9.90
    },
    mutations: {
        setQuantify (state, payload) {
            state.quantidade = payload
        },
        setPrice(state, payload) {
            state.preco = payload
        }
    }
}