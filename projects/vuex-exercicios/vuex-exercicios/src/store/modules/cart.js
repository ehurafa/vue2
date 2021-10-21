export default {
    namespaced: true,
    state: {
        products: []
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
        }
    },
    actions: {
        /* addProduct (context, payload) {
            setTimeout(() => {
                context.commit('addProduct', payload)
            }, 1000)
        } */

        addProduct: {
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('addProduct', payload)
                }, 1000)
            }
        }

    }
}