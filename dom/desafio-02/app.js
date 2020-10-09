new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert('bar')
        },
        onKeydown(e) {
            this.valor = e.target.value
        }
    }
})