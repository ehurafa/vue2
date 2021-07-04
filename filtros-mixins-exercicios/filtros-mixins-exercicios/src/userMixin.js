export default {
    computed: {
		loggedUser () {
			return 'Maria Silva'
		}
	},
	created() {
		console.log('Created mixin - User mixin')
	}
}