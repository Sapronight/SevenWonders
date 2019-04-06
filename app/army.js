class army {

	constructor(armyCost, armyName, armyHp, armyD) {
		this.name_ = armyName || "UNKNAME";
		this.timeLife_ = 100;
		this.price_ = armyCost || 10;
		this.hp_ = armyHp || 100;
		this.damage_ = armyD || 10;
		this.mode_ = "defend";
		this.cityLinked = "UNKCITY";
		this.status = "Hp_Full";
	}

	//Accesseur et Mutateur
	get damage(){
		return this.damage_;
	}

	get name(){
		return this.name_;
	}

	get hp(){
		return this.hp_;
	}

	setHp(newVar){
		this.hp_ = newVar;
	}

	//END Accesseur et Mutateur

	toString(){
		const text = `La troupe ${this.name_}: HP ${this.hp_}, LifeTime ${this.timeLife_}, Mode ${this.mode_}`;
		console.log(text);
	}

	destroy(){
		console.log(this.toString());

		console.log("!!! Unité Détruite !!!");
	}

	combat(otherArmy){
		this.hp_ -= otherArmy.damage;
		otherArmy.setHp(otherArmy.hp - this.damage_);

		console.log(`Le résultat du combat ${this.name_} contre ${otherArmy.name} est :`);
		console.log(`${this.name_}: HP = ${this.hp_} et ${otherArmy.name}: HP = ${otherArmy.hp}`);


		if(this.hp_ <= 0 ){
			this.destroy();
		}
		else if(otherArmy.hp <= 0){
			otherArmy.destroy();
		}
	}

}

module.exports = {army};
