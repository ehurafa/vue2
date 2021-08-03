import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('stringcounter', function(str) {
	// #2
	const arr = str.split(' ')
	const result = arr.map(str => {
		const size = str.length
		return `${str} (${size})`
	})
	return result.join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
