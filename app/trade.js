class Trade {
	constructor(id) {
		this.id_ = id || 'UNNAMED';
		this.stock_ = 0;
	}

	toString() {
		const text = `La caravane ${this.id_} avec ${this.hp_} HP et transportant ${this.stock_} de marchandises`;
		console.log(text);
	}

	setStock(corn) {
		if (corn >= 200) {
			this.stock_ = (corn) / 5;
		} else {
			this.stock_ = 20;
		}

		return this.stock_;
	}

	trading() {
		const rand = Math.random();
		let gold = 0;

		if (rand >= 0.4 && rand <= 0.7) {
			console.log('La caravane est arrivée au marché et a vendu son stock pour un prix raisonnable');
			gold = (this.stock_ * 5);
			this.stock_ = 0;
		} else if (rand <= 0.7 && rand < 1) {
			console.log('La caravane est arrivée au marché et a vendu son stock pour un très bon prix !');
			gold = (this.stock_ * 10);
			this.stock_ = 0;
		} else {
			console.log('La caravane a été attaqué par des bandits sur le chemin ! Tout le stock a été perdu =\'(');
			this.stock_ = 0;
		}

		return gold;
	}
}

module.exports = {Trade};
