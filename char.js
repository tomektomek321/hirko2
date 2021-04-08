

class Char {

    positionX;
    positionY;

    centerXChar;
    centerYChar;

    constructor(team, char) {
        this.team = team;
        this.char = char;
        this.hover = false;
        this.spellsUpon = [];
    }

    setPosition = (x , y) => {

        this.positionX = x;
        this.positionY = y;

        this.centerXChar = this.positionX + Math.floor(this.char.side / 2);
        this.centerYChar = this.positionY + Math.floor(this.char.side / 2);
    }


    renderPosition = () => {

        const color = (this.team == 1) ? "red" : "blue";

        const life = (this.char.life * (this.char.amount - 1)) + this.char.lifeOfLast;

        view.renderChar(ctx, color, this);

        view.renderCharInfo(ctx, life, this);

    }

    isHover = (cursor) => {
        if((cursor.X > this.positionX && cursor.X < this.positionX + this.char.side)
            && (cursor.Y > this.positionY && cursor.Y < this.positionY + this.char.side)) {
            this.hover = true;
            return this;
        } else {
            this.hover = false;
            return false;
        }
    }

    charMovedOnChar = (pos) => {
        if((pos.X > this.positionX && pos.X < this.positionX + this.char.side)
        && (pos.Y > this.positionY && pos.Y < this.positionY + this.char.side)) {
            return true;
        } else {
            return false;
        }
    }

    getSide = () => this.char.side;

    getPosition = () =>  ({'X':this.centerXChar, 'Y': this.centerYChar})

    getXY = () =>  ({'X': this.positionX, 'Y': this.positionY})

    getName = () => this.char.name;

    getAmount = () =>  this.char.amount;

    setAmount = (amount) =>  {this.char.setAmount(amount);}

    getMoveArea = () => this.char.moveArea;

    getSpells = () => this.char.magic;

    canSpell = () => (this.char.magic && this.char.magic.length > 0) ? true : false;

    getDamage = () => this.char.getDamage();

    getLife = () => this.char.getLife();

    getLifeOfLast = () => this.char.getLifeOfLast();

    setLifeOfLast = (lifeOfLast) => {this.char.setLifeOfLast(lifeOfLast);}

    makeDead = () => {
        this.char.setLife(0);
        this.char.setLifeOfLast(0);
        this.char.setAmount(0);
        this.posX = null;
        this.posY = null;
        this.centerXChar = null;
        this.centerYChar = null;
    }

    getSpellData = (spell) => this.char.getSpellData(spell);

}

