const {Divinity} = require('../divinity');
const {army} = require('./army');


class City {
	constructor(name, divinityName) {
		this.name_ = name || 'UNKCITY';
		this.divinity_ = new Divinity(divinityName);
		this.corn_ = 1000;
		this.gold_ = 1000;
		this.tableArmy_ = []; // Tableau de troupe
		this.maxArmy = 10; //Seulement 10 troupes par ville
		this.init();
	}

	init() {
		this.divinity_.init();
		this.divinity_.worldEvents.on('favor', shit => this.getCityCG(shit));
		this.divinity_.worldEvents.on('blessing', shit => this.getCityCG(shit));
	}

	getCityCG(s) {
		this.corn_ += Math.floor(s.corn);
		this.gold_ += Math.floor(s.gold);
	}

	giveCityCG() {
		this.divinity_.offeringCorn(this.corn_);
		this.divinity_.offeringGold(this.gold_);
		this.corn_ = 0;
		this.gold_ = 0;
	}

	showInfoCity() {
		console.log(`${this.name_}: C ${this.corn_}, G ${this.gold_}`);
	}

	spawnArmy(name){
		switch (name) {
			case 'Dragon':
				if(this.gold_ >= 500 && this.maxArmy > 0){
					this.gold_ -= 500;
					const p = new army(500, 'Dragon', 500, 50);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy -= 1;
				}
				else
				{
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Dragon, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy} <= 0`);
				}
				break;


			case 'Peon':
				if(this.gold_ >= 20 && this.maxArmy > 0){
					this.gold_ -= 20;
					const p = new army(20, 'Peon', 100, 10);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy -= 1;
				}
				else
				{
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Peon, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy} <= 0`);
				}
				break;

			case 'Berserker':
				if(this.gold_ >= 50 && this.maxArmy > 0){
					this.gold_ -= 50;
					const p = new army(50, 'Berserker', 150, 25);
					p.setMode('combat');
					this.tableArmy_.push(p);
					this.maxArmy -= 1;
				}
				else
				{
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Berserker, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy} <= 0`);
				}
				break;
			case 'Shield':
				if(this.gold_ >= 200 && this.maxArmy > 0){
					this.gold_ -= 200;
					const p = new army(100, 'Tank', 1000, 5);
					this.tableArmy_.push(p);
					this.maxArmy -= 1;
				}
				else
				{
					console.log(`La cité: ${this.name_} ne peut pas invoquer : Shield, car G : ${this.gold_} 
					< 500 ou maxArmy: ${this.maxArmy} <= 0`);
				}
				break;
			default:
				console.log("Wrong command in: Spawn Army");
				break;
		}
	}

	actionArmy(enemy){
		for(let i = 0; i < this.tableArmy_.length; i++){
			if(this.tableArmy_[i].mode_ === 'combat'){
					this.tableArmy_[i].combat(enemy);
			}
		}

		this.checkArmy();
	}

	checkArmy(){
		const tab_temp = [];
		let cpt = 0;
		for(let i = 0; i < this.tableArmy_.length; i++){
			if(this.tableArmy_[i].status_ === 'dead'){
				tab_temp.push(i);
				console.log(`L'unité: ${this.tableArmy_[i].name_} de la ville: ${this.name_} est morte !`);
			}
		}
		for(let i = 0; i < tab_temp.length; i++){
			this.tableArmy_.splice(tab_temp[i] - cpt, 1);
			cpt += 1;
		}
	}

}

module.exports = {City};
