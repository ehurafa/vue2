new Vue({
    el: '#app',
	data: {
		started: false,
		finished: false,
		playerPercent: 100,
		monsterPercent: 100,
		playerAttack: 0,
		monsterAttack: 0,
		champion: '',
		logs: []
	},       	
    methods: {
		init() {
			this.reset()
			this.started = true
		},
		finish() {
			this.reset()
		},
		reset() {
			this.started = false
			this.playerPercent = 100
			this.monsterPercent = 100
			this.finished = false
			this.logs = []
		},
		calc() {
			return ()=> Math.floor((Math.random() * 20))
		},
		attack() {
			const calc = this.calc()		
			
			const attacks = [calc(), calc()]
					
			return {
				default: () => {
					const player = Math.min(...attacks)
					const monster = Math.max(...attacks)
					this.playerPercent -= monster
					this.monsterPercent -= player						

					this.logs.push({ playerAttack: player, monsterAttack: monster})			
					this.loser('monster', 'player')
				},
				special: () => {
					const player = Math.max(...attacks)
					const monster = Math.min(...attacks)
					this.playerPercent -= monster
					this.monsterPercent -= player
					this.logs.push({ playerAttack: player, monsterAttack: monster})	
					this.loser('player', 'monster')
				}
			}	
			
		},
		loser(strike, drop) {
			const activePlayer = {
				'player': this.playerPercent,
				'monster': this.monsterPercent
			}
			if(activePlayer[drop] <= 0) {
				this.finished = true
				this.champion = strike
			}
		},
		menor(progrees) {
			return progrees <= 20
		},
		recovery() {
			const attack = this.calc()
			const life = this.calc()
			this.playerPercent -= attack()
			this.playerPercent += life()
			this.loser('monster', 'player')
			this.logs.push({ playerLife: life(), monsterAttack: attack()})
		}
	},
	computed: {
		computedPlayerPercent() {
			return `${this.playerPercent}`
		},
		computedMonsterPercent() {
			return `${this.monsterPercent}`
		},		
	}
})
