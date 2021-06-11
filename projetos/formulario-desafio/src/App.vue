<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
		<Rotulo />
			<form class="painel" v-if="!send">
				<div class="cabecalho">Formulário</div>

				<div><FullName  @fullname="getFullName($event)" v-model="full_name" /></div>

				<div class="field">
					<label for="email">E-mail</label>
					<input type="email" name="email" v-model="email" />
				</div>
				<div class="field">
					<label for="password">Senha</label>
					<input type="password" name="password" v-model="password" />
				</div>
				<div class="field">
					<label for="password">Armazenar os dados?</label>
					<label for="yes">Sim <input type="radio" id="yes" value="Sim" v-model="savedata" /></label>
					
					<label for="no">Não <input type="radio" id="no" value="Não" v-model="savedata" /></label>
					
				</div>
				<div class="field">
					<button @click.prevent="submit">Enviar</button>					
				</div>
			</form>
			<div class="painel results" v-else>
				<div class="cabecalho">Resultado</div>

				<ul>
					<li>
						<p>Nome: {{ full_name.name }}</p>
					</li>
					<li>
						<p>Sobrenome: {{ full_name.surname }}</p>
					</li>
					<li>
						<p>E-mail: {{ email }}</p>
					</li>
					<li>
						<p>Senha: {{ password }}</p>
					</li>
					<li>
						<p>Armazenar os dados?: {{ savedata }}</p>
					</li>
				</ul>

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import FullName from './components/FullName.vue'
export default {
	name: 'app',
	components: { Rotulo, FullName },

	data () {
		return {
			valid: true,
			send: false,			
			full_name: {
				name: '',
				surname: ''
			},
			email: '',
			password: '',
			savedata: true
		}
	},

	methods: {
		submit () {
			this.send = this.valid
		},
		onSend () {
			this.send = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
#app form .field {
	display: flex;
	justify-content: center;
	padding: 10px;
}
#app form .field label {
	margin-right:  10px;
}
#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}
.results ul {
	text-align: left;
}
.results ul li {
	list-style: none;
}
.mr-4 {
	margin-right: 40px;
}
</style>
