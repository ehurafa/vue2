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
			this.started = true;
		},
		finish() {
			this.reset()
		},
		reset() {
			this.started = false;
			this.playerPercent = 100;
			this.monsterPercent = 100
		},
		attack() {
			const calc = ()=> Math.floor((Math.random() * 20));	
			console.log('calc ', calc())

			
			const attacks = [calc(), calc()]

			console.log('attacks ', attacks)
					
			return {
				default: () => {
					const player = Math.min(...attacks);
					const monster = Math.max(...attacks);
					this.playerPercent -= monster
					this.monsterPercent -= player						

					this.logs.push({ playerAttack: player, monsterAttack: monster})
					if(this.playerPercent <= 0) {
						this.finished = true
						this.champion = 'monster'
					}
				},
				special: () => {
					const player = Math.max(...attacks);
					const monster = Math.min(...attacks);
					this.playerPercent -= monster
					this.monsterPercent -= player
					this.logs.push({ playerAttack: player, monsterAttack: monster})
					if(this.monsterPercent <= 0) {
						this.finished = true
						this.champion = 'player'
					}
				}
			}	
			
		},
		menor(progrees) {
			return progrees <= 20;
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
