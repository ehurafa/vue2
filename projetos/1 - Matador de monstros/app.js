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
			this.started = false;
		},
		attack() {
			const calc = ()=> (Math.random() * 10).toFixed(2);
			const subPlayer =  (this.playerPercent > 0) ? this.playerPercent -= calc() : 0;
			const subMonster =   ( this.monsterPercent > 0) ? this.monsterPercent -= calc() : 0;

			if (subMonster < subPlayer) {
				console.log('subMonster ', subMonster );
				console.log('subPlayer ', subPlayer );
				calc();
			} else {
				(subPlayer > 0) ?  this.playerPercent = subPlayer :  this.playerPercent = 0;	
			}		

			
			if (subMonster < subPlayer) {
				console.log('subMonster ', subMonster );
				console.log('subPlayer ', subPlayer );
				calc();
			} else {
				(subMonster > 0) ?  this.monsterPercent = subMonster :  this.monsterPercent = 0;	
			}
		}
	},
	computed: {
		computedPlayerPercent() {
			return `${this.playerPercent}%`
		},
		computedMonsterPercent() {
			return `${this.monsterPercent}%`
		}
	}
})
