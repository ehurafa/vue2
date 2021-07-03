export default {
    data () {
		return {
			fruit: '',
			fruits: ['banana', 'maça', 'morango']
		}
	},
	methods: {
		add () {
			this.fruits.push(this.fruit)
			this.fruit = ''
		}
	}
}