new Vue({
    el: '#app',
	data: {
		started: false,
		playerPercent: 100,
		monsterPercent: 100
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
			const subPlayer =  this.playerPercent -= calc();
			const subMonster =  this.monsterPercent -= calc();

			const aP = calc();
			const aM = calc();

			if(aP> aM) {
				this.playerPercent -= aP
				this.monsterPercent -= aM
			} else {
				this.playerPercent -= aM
				this.monsterPercent -= aP
			}


			// if (subMonster < subPlayer) {
			// 	console.log('playerA ', subPlayer );
			// 	console.log('playerB ', subMonster );
			// 	calc();
			// } else {
			// 	(subPlayer >= 0) ?  this.playerPercent = subPlayer :  this.playerPercent = 0;
			// 	(subMonster >= 0) ?  this.monsterPercent = subMonster :  this.monsterPercent = 0;
			// }	
			
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
