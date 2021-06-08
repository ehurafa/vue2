<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
		<Rotulo />
			<form class="painel">
				<div class="cabecalho">Formulário</div>

				<div class="field">
					<label for="full_name">Nome</label>
					<input type="text" name="full_name" v-model="user.full_name" />
				</div>
				<div class="field">
					<label for="email">E-mail</label>
					<input type="email" name="email" v-model="user.email" />
				</div>
				<div class="field">
					<label for="password">Senha</label>
					<input type="password" name="password" v-model="user.password" />
				</div>
				<div class="field">
					<label for="password">Armazenar os dados?</label>
					<label for="yes">Sim <input type="radio" id="yes" value="Sim" v-model="user.savedata" /></label>
					
					<label for="no">Não <input type="radio" id="no" value="Não" v-model="user.savedata" /></label>
					
				</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel results">
				<div class="cabecalho">Resultado</div>

				<ul>
					<li>
						<p>Nome: {{ user.full_name }}</p>
					</li>
					<li>
						<p>E-mail: {{ user.email }}</p>
					</li>
					<li>
						<p>Senha: {{ user.password }}</p>
					</li>
					<li>
						<p>Armazenar os dados?: {{ user.savedata }}</p>
					</li>
				</ul>

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo },

	data () {
		return {
			user: {}
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
