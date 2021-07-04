import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', function(value) {
	return value.split('').reverse().join('')
})

Vue.mixin({
	data () {
		return {
			global: 'Estou em um mixin global'
		}
	},
	created() {
		console.log('Created - Global mixin')
	}
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue instance')
	}
}).$mount('#app')
