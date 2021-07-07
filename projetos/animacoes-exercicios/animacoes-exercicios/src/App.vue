<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<button @click="show = !show"> Mostrar Mensagem</button>

		<transition name="fade">
			<div class="alert show" v-if="show">{{ msg }}</div>
		</transition>

		<transition name="slide">
			<div class="alert show" v-if="show">{{ msg }}</div>
		</transition>
	</div>
</template>

<script>

export default {
	data () {
		return {
			msg: 'Uma mensagem de informação para usuário',
			show: false
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
	font-size: 1.5rem;
}

.alert {
	margin: 10px auto;
}
.alert.show {
	background: rgb(177, 250, 255);
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}
.fade-enter-active, .fade-leave-active  {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}
</style>
