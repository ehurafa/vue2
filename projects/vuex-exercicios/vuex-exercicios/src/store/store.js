import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import parameters from './modules/parameters'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: { cart, parameters }
})