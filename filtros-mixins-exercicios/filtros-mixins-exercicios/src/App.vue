<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | reverse }}</p>
		<p>Usuári logado {{ loggedUser }}</p>
		<input type="text" :value="cpf | cpf">
		<hr>
		<Fruits />
		<hr>
		<ul>
			<li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
		</ul>
		<input type="text" v-model="fruit" @keydown.enter="add" />
	</div>
</template>

<script>
import fruitsMixin from './fruitsMixin'
import userMixin from './userMixin'
import Fruits from './Fruits.vue'
export default {
	components: { Fruits },
	mixins: [fruitsMixin, userMixin],
	filters: {
		cpf(value) {
			const arr = String(value).split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data () {
		return {
			cpf: 66688877754
		}
	},
	created() {
		console.log('Created mixin - App.vue')
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
