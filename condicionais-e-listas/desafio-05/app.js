new Vue({
    el: '#desafio',
	data: {
		exibirParagrafo: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		elementos: ['lousa', 'giz', 'caneta', 'merenda', 'cadeira', 'livro'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluna: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},       
    methods: {
		toggleParagrafo() {
			this.exibirParagrafo = !this.exibirParagrafo
		}
    }
})
