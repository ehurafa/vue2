<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>-------------------------------</p>
		<p>{{ str | comma }}</p>
		<p>{{ str | stringcounter }}</p>

		<p>-------------------------------</p>
		<p>{{ computedComma }}</p>
		<p>{{ computedStringcounter }}</p>
	</div>
</template>

<script>
// #1
import Vue from 'vue'
Vue.filter('comma', function(str) {
	console.log(str)
	return str.replaceAll(' ', ',')
})
export default {
	
	data () {
		return {
			str: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam doloremque id nesciunt ipsum rerum debitis ullam quasi error quibusdam, unde facilis cupiditate adipisci impedit accusamus perspiciatis iure inventore, qui laboriosam.'
		}
	},
	computed: {
		computedComma() {
			return this.str.replaceAll(' ', ',')
		},
		computedStringcounter() {
			const arr = this.str.split(' ')
			const result = arr.map(str => {
				const size = str.length
				return `${str} (${size})`
			})
			return result.join(' ')
		}
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
