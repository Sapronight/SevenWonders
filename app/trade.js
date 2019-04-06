class trade {
    constructor(id, hp, city){
        this.id_ = id;
        this.hp_ = hp;
        this.stock_ = 0;
        this.city_ = city;
    }

    get id(){
        return this.id_;
    }

    get hp(){
        return this.hp_;
    }

    get stock(){
        return this.stock_;
    }

    toString(){
        const text = `La caravane ${this.id_} avec ${this.hp_} HP et transportant ${this.stock_} de marchandises`;
        console.log(text);
    }

    setStock(){
        if(this.city_.divinity_.corn >= 200){
            this.stock_ = (this.city_.divinity_.corn) / 5;
            this.city_.divinity_.corn -= this.stock_;
        }
        else{
            this.stock_ = 20;
            this.city_.divinity_.corn -= this.stock_;
        }
    }

    trading(){
        const rand = Math.random();

        if(rand >= 0.4 && rand <= 0.7){
            console.log("La caravane est arrivée au marché et a vendu son stock pour un prix raisonnable");
            this.city_.divinity_.gold += (this.stock_ * 5);
            this.stock_ = 0;
        }
        else if(rand <= 0.7 && rand < 1){
            console.log("La caravane est arrivée au marché et a vendu son stock pour un très bon prix !")
            this.city_.divinity_.gold += (this.stock_ * 10);
            this.stock_ = 0;
        }
        else{
            console.log("La caravane a été attaqué par des bandits sur le chemin ! Tout le stock a été perdu ='(");
            this.stock_ = 0;
        }
    }
}