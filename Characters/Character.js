
class Character {

    constructor(name, life, lifeOfLast, moveArea, side, damage, throw_, amount, nowAttack) {
        this.name = name;
        this.life = life;
        this.lifeOfLast = lifeOfLast;
        this.moveArea = moveArea;
        this.side = side;
        this.damage = damage;
        this.throw = throw_;
        this.amount = amount;
        this.nowAttack = nowAttack;
    }

    getDamage = () => this.damage;

    getLife = () => this.life;

    setLife = (life) => {this.life = life};

    getLifeOfLast = () => this.lifeOfLast;

    setLifeOfLast = (lifeOfLast) => {this.lifeOfLast = lifeOfLast};

    getAmount = () => this.amount;

    setAmount = (amount) => {this.amount = amount};

}