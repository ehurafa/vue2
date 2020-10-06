new Vue({
    el: '#desafio',
    data: {
        nome: 'Rafael Gomes',
        idade: 29,
        source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },        
    methods: {
      randomico() {        
        return Math.random()
      }
    }
})