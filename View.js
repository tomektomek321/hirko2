

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

    static endGame() {
        ctx.fillText(" GAME OVER ", 300, 10);
    }

}
