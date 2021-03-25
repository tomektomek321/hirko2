

class View {

    static renderChar = (ctx, posX, posY, side, color) => {
        ctx.fillStyle = color;
        if(posX == null || posY == null) return;
        ctx.fillRect(posX, posY, side, side);
    }

    static renderCharInfo = (ctx, life, x, y, name, amount, dmg) => {
        ctx.font = this.font + "px Ariel";
        ctx.fillStyle = "red";
        ctx.fillText(name + ", life: " + life + ", (" + amount + "), dmg: " +  dmg * amount, x, y - 10);
    }

    static renderSelectedCharPosition = (char, team) => {
        const xyPos = char.getXY();
		const posX = (team == 1) ? xyPos['X'] -15 : xyPos['X'] + 25;
        ctx.fillStyle = "green";
        ctx.fillRect(posX, xyPos['Y'] + 3, 7, 7);
    }

    static endGame() {
        ctx.fillText(" GAME OVER ", 300, 10);
    }

}
