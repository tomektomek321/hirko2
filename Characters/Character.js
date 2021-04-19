
class Character {

    constructor(name, team, life, lifeOfLast, moveArea, side, damage, throw_, amount, nowAttack) {
        this.name = name;
        this.team = team;
        this.life = life;
        this.lifeOfLast = lifeOfLast;
        this.moveArea = moveArea;
        this.side = side;
        this.damage = damage;
        this.throw = throw_;
        this.amount = amount;
        this.nowAttack = nowAttack;
        this.hover = false;
        this.spellsUpon = [];
        this.position = new CharacterPosition();
    }

    getDamage = () => this.damage;

    getLife = () => this.life;

    setLife = (life) => {this.life = life};

    getLifeOfLast = () => this.lifeOfLast;

    setLifeOfLast = (lifeOfLast) => {this.lifeOfLast = lifeOfLast};

    getAmount = () => this.amount;

    setAmount = (amount) => {this.amount = amount};

    getName = () => this.name;

    getSide = () => this.side;

    getTeam = () => this.team;

    getDamage = () => this.damage;

    getLifeOfLast = () => this.lifeOfLast;

    setLifeOfLast = (lifeOfLast) => { this.lifeOfLast = lifeOfLast }

    getMoveArea = () => this.moveArea;

    getSpells = () => this.magic;

    canSpell = () => (this.magic && this.magic.length > 0) ? true : false;

    setPosition = (x, y) => {
        if(this.amount != 0)
            this.position.setPosition(x, y, this.side)
    }

    getPosition = () => { //return  this.position.getPosition();
        if(this.amount > 0) {
            return this.position.getPosition();
        } else {
            return {'X': null, 'Y': null};
        }
    }

    getXY = () => this.position.getXY();

    setHover = (bool) => { this.hover = bool; }

    getHover = () => this.hover;

    isHover = () => this.hover;

    isReachedBySpell = (spell_, cursor_) => spellsManager.isCharReachedBySpell(spell_, cursor_, this)

    makeDead = () => {
        this.setAmount(0);
        this.setLife(0);
        this.setLifeOfLast(0);
        this.setPosition(null, null);
    }

    getSpellData = (spell) => this.char.getSpellData(spell);

}