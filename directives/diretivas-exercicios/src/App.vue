<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando a diretiva v-text'"></p>
		<p v-html="'Usando a diretiva v-html <strong>strong</strong>'"></p>
		<hr>
		<p v-featured:bg.delay="'blue'">Usando uma diretiva personalizada</p>
		<p v-featured="'red'">Usando uma diretiva personalizada</p>

		<p v-local-featured:bg.delay="'blue'">Usando uma diretiva personalizada</p>
		<p v-local-featured="'red'">Usando uma diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'local-featured': {
			bind(el, binding) {
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
