const {Divinity} = require('../divinity');
const {Army} = require('./army');
const {Trade} = require('./trade');

class City {
	constructor(name, divinityName, traderName) {
		this.name_ = name || 'UNKCITY';
		this.divinity_ = new Divinity(divinityName);
		this.corn_ = 1000;
		this.gold_ = 1000;
		this.tableArmy_ = []; // Tableau de troupe
		this.maxArmy_ = 10; // Seulement 10 troupes par ville
		this.trader_ = new Trade(traderName); // Création d'une caravane pour le commerce
		this.init();
	}

	init() {
		this.divinity_.init();
		this.divinity_.worldEvents.on('favor', ressource => this.getCityCG(ressource));
		this.divinity_.worldEvents.on('blessing', ressource => this.getCityCG(ressource));
	}

	getCityCG(s) {
		this.corn_ += Math.floor(s.corn);
		this.gold_ += Math.floor(s.gold);
	}

	// Permet de faire des offrandes à la divinité
	giveCityCG() {
		this.divinity_.offeringCorn(this.corn_ / 10); // Offre 1/10 des ressources en corn
		this.divinity_.offeringGold(this.gold_ / 10); // Offre 1/10 des ressources en gold
		this.corn_ -= this.corn_ / 10;
		this.gold_ -= this.gold_ / 10;
	}

	// Affiche les informations relatives à la ville
	showInfoCity() {
		console.log(`${this.name_}: C ${this.corn_}, G ${this.gold_}`);
	}

	// Crée les unités de la ville
	spawnArmy(name) {
		switch (name) {
			case 'Dragon':
				if (this.gold_ >= 500 && this.maxArmy_ > 0) {
					this.gold_ -= 500;
					const p = new Army(500, 'Dragon', 500, 50);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy_ -= 1;
					console.log(`La cité: ${this.name_} a invoqué l'unité: Dragon`);
				} else {
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Dragon, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy_} <= 0`);
				}

				break;

			case 'Peon':
				if (this.gold_ >= 20 && this.maxArmy_ > 0) {
					this.gold_ -= 20;
					const p = new Army(20, 'Peon', 100, 10);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy_ -= 1;
					console.log(`La cité: ${this.name_} a invoqué l'unité: Peon`);
				} else {
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Peon, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy_} <= 0`);
				}

				break;

			case 'Berserker':
				if (this.gold_ >= 50 && this.maxArmy_ > 0) {
					this.gold_ -= 50;
					const p = new Army(50, 'Berserker', 150, 25);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy_ -= 1;
					console.log(`La cité: ${this.name_} a invoqué l'unité: Berserker`);
				} else {
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Berserker, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy_} <= 0`);
				}

				break;
			case 'Shield':
				if (this.gold_ >= 200 && this.maxArmy_ > 0) {
					this.gold_ -= 200;
					const p = new Army(100, 'Tank', 1000, 5);
					this.tableArmy_.push(p);
					this.maxArmy_ -= 1;
					console.log(`La cité: ${this.name_} a invoqué l'unité: Shield`);
				} else {
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Shield, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy_} <= 0`);
				}

				break;
			default:
				console.log('Wrong command in: Spawn Army');
				break;
		}
	}

	actionArmy(enemy) {
		for (let i = 0; i < this.tableArmy_.length; i++) {
			if (this.tableArmy_[i].mode_ === 'combat' && this.tableArmy_[i].status_ === 'healthy') {
				this.tableArmy_[i].combat(enemy);
			} else if (this.tableArmy_[i].mode_ === 'combat' && this.tableArmy_[i].status_ === 'injure') {
				this.tableArmy_[i].timeLife_ -= 1;
			}
		}

		this.checkArmy();
	}

	checkArmy() {
		const tabTemp = [];
		let cpt = 0;
		for (let i = 0; i < this.tableArmy_.length; i++) {
			if (this.tableArmy_[i].status_ === 'dead') {
				tabTemp.push(i);
				console.log(`L'unité: ${this.tableArmy_[i].name_} de la ville: ${this.name_} est morte !`);
			} else if (this.tableArmy_[i].timeLife_ <= 0) {
				tabTemp.push(i);
				console.log(`L'unité: ${this.tableArmy_[i].name_} de la ville: ${this.name_} est morte de vieillesse !`);
			}
		}

		for (let i = 0; i < tabTemp.length; i++) {
			this.tableArmy_.splice(tabTemp[i] - cpt, 1);
			cpt += 1;
			this.maxArmy_ += 1;
		}
	}

	// Permet le commerce grâce à la classe trade
	tradingCity() {
		this.corn_ -= this.trader_.setStock(this.corn_);
		this.gold_ += this.trader_.trading();
		this.showInfoCity();
	}

	updateArmy() {
		if (this.maxArmy_ >= 5) {
			const rand = Math.random();
			if (rand <= 0.2) {
				this.spawnArmy('Dragon');
			} else if (rand > 0.2 && rand <= 0.4) {
				this.spawnArmy('Peon');
			} else if (rand > 0.4 && rand <= 0.6) {
				this.spawnArmy('Berserker');
			} else if (rand > 0.6 && rand <= 0.8) {
				this.spawnArmy('Shield');
			} else {
				this.spawnArmy('Peon');
			}
		}
	}
}

module.exports = {City};
