<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<button @click="show = !show"> Mostrar Mensagem</button>

		<!--<transition name="fade" appear>
			<div class="alert show" v-if="show">{{ msg }}</div>
		</transition>

		<transition name="slide" type="animation" appear> 
			<div class="alert show" v-if="show">{{ msg }}</div>
		</transition>
		<transition
			name="custom-classes-transition"
			enter-active-class="animated tada"
			leave-active-class="animated bounceOutRight"
		>
			<p v-if="show">hello</p>
		</transition> 
		<hr />
		<select v-model="typeAnimation">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</select>
		<transition :name="typeAnimation" mode="out-in">  
			<div class="alert show" v-if="show" key="one">{{ msg }}</div>
			<div class="alert second " else key="two">{{ msg }}</div>
		</transition> -->
		<hr>
		<button @click="show2 = !show2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div v-if="show2" class="box"></div>
		</transition>
		<hr />
		<button @click="selectedComponent = 'InfoAlert'">Info</button>
		<button @click="selectedComponent = 'WarningAlert'">Advertencia</button>
		<transition name="fade" mmode="out-in">
			<component :is="selectedComponent"></component>
		</transition>
	</div>
</template>

<script>
import InfoAlert from './InfoAlert.vue'
import WarningAlert from './WarningAlert.vue'

export default {
	components: { InfoAlert, WarningAlert },
	data () {
		return {
			typeAnimation: 'fade',
			msg: 'Uma mensagem de informação para usuário',
			show: true,
			show2: true,
			baseWidth: 0,
			selectedComponent: 'InfoAlert'
		}
	},
	methods: {
		animate (el, done, negative) {
			let round = 1
			const timer = setInterval(() => {
				const newWidth = this.baseWidth +
				(negative ? -round * 10 : round * 10)
				el.style.width = `${newWidth}px`
				round++
				if (round > 30) {
					clearInterval(timer)
					done()
				}
			}, 20)
		},
		beforeEnter (el) {
			this.baseWidth = 0
			el.style.width = `${this.baseWidth}px`
		},
		enter (el, done) {
			this.animate(el, done, false)
		},
		afterEnter (el) {
			console.log('afterEnter', el)
		},
		enterCancelled () {
			console.log('enterCancelled')
		},
		beforeLeave (el) {
			this.baseWidth = 300
			el.style.width = `${this.baseWidth}px`
		},
		leave (el, done) {
			this.animate(el, done, true)
		},
		afterLeave (el) {
			console.log('afterLeave', el)
		},
		leaveCancelled () {
			console.log('leaveCancelled')
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

.box {
	width: 300px;
	height: 100px;
	margin: 30px auto;
	background: lightseagreen;
}

.alert {
	margin: 10px auto;
	background: rgb(177, 250, 255);
}
.alert.show {
	
}
.alert.second {
	background: orange;
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
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 6s;
}
.slide-enter, .slide-leave-to {
	opacity: 0;
}
</style>
