<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando a diretiva v-text'"></p>
		<p v-html="'Usando a diretiva v-html <strong>strong</strong>'"></p>
		<hr>
		<p v-featured:bg.delay="'blue'">Usando uma diretiva personalizada</p>
		<p v-featured="'red'">Usando uma diretiva personalizada</p>

		<p v-local-featured:bg.delay="{ color1: 'yellow', color2: 'tomato', delay: 3000}">Usando uma diretiva personalizada</p>
		<p v-local-featured.delay.alternate="{ color1: 'yellow', color2: 'tomato', delay: 2000, interval: 200 }">Usando uma diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'local-featured': {
			bind(el, binding) {
				const applyColor = color => {
					if (binding.arg === 'bg') {
						el.style.backgroundColor = color
					} else {
						el.style.color = color
					}
				}

				let delay = 0

				if (binding.modifiers['delay']) delay = binding.value.delay

				const color1 = binding.value.color1

				const color2 = binding.value.color2

				let current = color1

				setTimeout(() => {
					if (binding.modifiers['alternate']) {
						setInterval(() => {
							current = current === color1 ? color2 : color1
							applyColor(current)
						}, binding.value.interval)
					}else {
						applyColor(binding.value.color1)
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
