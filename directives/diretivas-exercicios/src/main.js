import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('featured', {
	bind(el, binding) {
		// el.style.backgroundColor = 'lightgreen'

		let delay = 0

		if (binding.modifiers['delay']) delay = 3000

		setTimeout(() => {
			if (binding.arg === 'bg') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, delay)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
