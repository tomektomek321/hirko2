

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

        const color = (team == 1) ? "red" : "blue";

        ctx = myGameArea.context;

        const life = (this.char.life * (this.char.amount - 1)) + this.char.lifeOfLast;

        View.renderChar(ctx, this.positionX, this.positionY, this.char.side, color);

        View.renderCharInfo(ctx, life, this.positionX, this.positionY, this.char.name, this.char.amount, this.char.demage);

    }

    isHover = (cursor) => {
        if((cursor.X > this.positionX && cursor.X < this.positionX + this.char.side)
            && (cursor.Y > this.positionY && cursor.Y < this.positionY + this.char.side)) {
            this.hover = true;
            return true;
        } else {
            this.hover = false;
            return false;
        }
    }

    getSide = () => this.char.side;

    getPosition = () =>  ({'X':this.centerXChar, 'Y': this.centerYChar})

    getXY = () =>  ({'X': this.positionX, 'Y': this.positionY})

    getName = () => this.char.name;

    getAmount = () =>  this.char.amount;

    getMoveArea = () => this.char.moveArea;


}

