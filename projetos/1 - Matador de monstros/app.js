new Vue({
    el: '#app',
	data: {
		started: false
	},       
    methods: {
		init() {
			this.started = true;
		},
		finish() {
			this.started = false;
		}
    }
})
