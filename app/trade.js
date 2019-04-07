class Trade {
	constructor(id) {
		this.id_ = id || 'UNNAMED'; //Identifiant de la caravane, comme son nom
		this.stock_ = 0;
	}

	//Affiche toutes les informations relatives à la caravane
	toString() {
		const text = `La caravane ${this.id_} avec ${this.hp_} HP et transportant ${this.stock_} de marchandises`;
		console.log(text);
	}

	//Permet de déterminer le stock à vendre en fonction de la quantité de corn de la ville
	setStock(corn) {
		if (corn >= 200) {
			this.stock_ = (corn) / 5;
		} else {
			this.stock_ = 20;
		}

		return this.stock_;
	}

	//Permet d'échanger le corn en stock contre de l'argent
	trading() {
		const rand = Math.random();
		let gold = 0;

		//La caravane n'est pas attaquée et échange son corn
		if (rand >= 0.4 && rand <= 0.7) {
			console.log('La caravane est arrivée au marché et a vendu son stock pour un prix raisonnable');
			gold = (this.stock_ * 5);
			this.stock_ = 0;
		} else if (rand <= 0.7 && rand < 1) { //La caravane n'est pas attquée et échange son stock pour un meilleure prix
			console.log('La caravane est arrivée au marché et a vendu son stock pour un très bon prix !');
			gold = (this.stock_ * 10);
			this.stock_ = 0;
		} else { //La caravane est attaquée et perd son stock sans le vendre
			console.log('La caravane a été attaqué par des bandits sur le chemin ! Tout le stock a été perdu =\'(');
			this.stock_ = 0;
		}

		return gold;
	}
}

module.exports = {Trade};
