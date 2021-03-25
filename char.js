

class Char {

    positionX;
    positionY;

    centerXChar;
    centerYChar;

    constructor(char) {
        this.char = char;
        this.hover = false;
    }

    setPosition = (x , y) => {

        this.positionX = x;
        this.positionY = y;

        this.centerXChar = this.positionX + Math.floor(this.char.side / 2);
        this.centerYChar = this.positionY + Math.floor(this.char.side / 2);
    }


    renderPosition = (team) => {

        let color = (team == 1) ? "red" : "blue";

        ctx = myGameArea.context;

        let life = (this.char.life * (this.char.amount - 1)) + this.char.lifeOfLast;

        View.renderChar(ctx, this.positionX, this.positionY, this.char.side, color);

        View.renderCharInfo(ctx, life, this.positionX, this.positionY, this.char.name, this.char.amount, this.char.demage);

    }

    getSide = () => this.char.side;

    getPosition = () =>  ({'X':this.centerXChar, 'Y': this.centerYChar})

    getXY = () =>  ({'X': this.positionX, 'Y': this.positionY})

    getName = () => this.char.name;

    getAmount = () =>  this.char.amount;

}

