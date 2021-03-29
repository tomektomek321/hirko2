

class View {

    static #instance;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new View();
        return this.#instance;
    }

    renderChar = (ctx, color, { positionX, positionY,  char: {side} }) => {
        ctx.fillStyle = color;
        if(positionX == null || positionY == null) return;
        ctx.fillRect(positionX, positionY, side, side);
    }

    renderCharInfo = (ctx, life, { positionX, positionY,  char: {name, amount , damage} }) => {

        ctx.font = this.font + "px Ariel";
        ctx.fillStyle = "red";
        ctx.fillText(name + ", life: " + life + ", (" + amount + "), dmg: " +  damage * amount, positionX, positionY - 10);
    }

    renderSelectedCharPosition = (char, team) => {
        const xyPos = char.getXY();
		const posX = (team == 1) ? xyPos['X'] -15 : xyPos['X'] + 25;
        ctx.fillStyle = "green";
        ctx.fillRect(posX, xyPos['Y'] + 3, 7, 7);
    }

    endGame() {
        ctx.fillText(" GAME OVER ", 300, 10);
    }

    renderSelectedCharMoveArea = (char) => {
        if(char.getAmount() == 0) return;

        ctx.beginPath();
        ctx.arc(char.centerXChar, char.centerYChar, char.getMoveArea(), 0, 2 * Math.PI);
        ctx.fillStyle = "#DCDCDC";
        ctx.fill();
        ctx.strokeStyle = "#C0C0C0";
        ctx.stroke();
    }

    renderHoveredCharMoveArea = (char) => {
        ctx.beginPath();
        ctx.arc(char.centerXChar, char.centerYChar, char.getMoveArea(), 0, 2 * Math.PI);
        ctx.fillStyle = "#b7b4b4";
        ctx.fill();
        ctx.strokeStyle = "#C0C0C0";
        ctx.stroke();
    }

}
