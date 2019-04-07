class Army {
	constructor(armyCost, armyName, armyHp, armyD) {
		this.name_ = armyName || 'UNNAMED';
		this.timeLife_ = 10;
		this.price_ = armyCost || 10;
		this.hp_ = armyHp || 100;
		this.damage_ = armyD || 10;
		this.mode_ = 'defend';
		this.status_ = 'healthy';
	}

	// Accesseur et Mutateur
	get damage() {
		return this.damage_;
	}

	setHp(newVar) {
		this.hp_ = newVar;
	}

	setStatus(newStatus) {
		this.status_ = newStatus;
	}

	setMode(newMode) {
		this.mode_ = newMode;
	}
	// END Accesseur et Mutateur

	toString() {
		const text = `La troupe ${this.name_}: HP ${this.hp_}, LifeTime ${this.timeLife_}, Mode ${this.mode_}, qui coute: ${this.price_}`;
		console.log(text);
	}

	combat(otherArmy) {
		if (this.mode_ === 'combat') {
			this.timeLife_ -= 1;
		}

		if (otherArmy.mode_ === 'combat') {
			otherArmy.timeLife_ -= 1;
		}

		this.hp_ -= otherArmy.damage;
		otherArmy.setHp(otherArmy.hp_ - this.damage_);

		console.log(`Le résultat du combat ${this.name_} contre ${otherArmy.name_} est :`);
		console.log(`${this.name_}: HP = ${this.hp_} et ${otherArmy.name_}: HP = ${otherArmy.hp_}`);

		if (this.hp_ <= 0 && this.mode_ === 'combat') {
			this.setStatus('dead');
		} else if (this.hp_ <= 0 && this.mode_ === 'defend') {
			this.setStatus('injure');
		} else if (otherArmy.hp_ <= 0 && this.mode_ === 'combat') {
			otherArmy.setStatus('dead');
		} else if (otherArmy.hp_ <= 0 && this.mode_ === 'defend') {
			otherArmy.setStatus('injure');
		}

		const rand = Math.random();

		if (rand <= 0.05) {
			this.status_ = 'dead';
		} else if (rand > 0.05 && rand <= 0.1) {
			this.status_ = 'injure';
		}
	}
}

module.exports = {Army};
