<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="user.name" Placeholder="Inform o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="user.email" Placeholder="Inform o e-mail"></b-form-input>
			</b-form-group>
			<hr />
			<b-button @click="save" size="lg" variant="primary" class="mr-2">Salvar</b-button>
			<b-button @click="getUsers" size="lg" variant="success">Obter Usuários</b-button>
		</b-card>
		<hr/>
		<b-list-group>
			<b-list-group-item v-for="(user, id) in users" :key="id">
				<strong>Nome:</strong> {{ user.name }}<br />
				<strong>E-mail:</strong> {{ user.email }}<br />
				<strong>ID:</strong> {{ id }}<br /><br />
				<b-button variant="warning" size="lg" @click="getUser(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="deleteUser(id)" class="ml-2">Excluir</b-button>

			</b-list-group-item>
		</b-list-group>	
	</div>
</template>

<script>
export default {
	data () {
		return {
			users: [],
			id: null,
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		clear () {
			this.user.name = ''
			this.user.email = ''
			this.id = null
		},
		save () {
			const method = this.id ? 'patch' : 'post'
			const endUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[method](`/usuarios${endUrl}`, this.user)
				.then(() => this.clear())
		},
		getUser (id) {
			this.id = id
			this.user = { ...this.user[id] }
		},
		getUsers () {
			this.$http('https://curso-vue-96e43-default-rtdb.firebaseio.com/usuarios.json')
				.then(res => {
					this.users = res.data
					console.log('>> ', this.users)
				})

			this.$http.defaults.headers.common['Authorzation'] = 'abc123'
		},
		deleteUser (id) {
			console.log('deleteUser ', id)
			this.$http.delete(`/usuarios/${id}.json`).then(() => this.clear())
		}
	}
	/* created () {
		this.$http.post('usuarios.json', {
			name: 'Maria',
			email: 'maria@mail.com'
		}).then(res => { console.log(res) })
	} */
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
