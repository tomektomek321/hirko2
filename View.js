

class View {

    renderChar = (char) => {
        if(char.getPosition()['X'] == null || char.getPosition()['Y'] == null) return;
        let color = (char.getTeam() == 1) ? "red" : "blue";

        if(spell.hasSpell()) {
            if(spellsManager.isCharReachedBySpell(spell.getChoosen(), cursor.getPosition(), char)) {
                color = "yellow";
            }
        }
        ctx.fillStyle = color;
        ctx.fillRect(char.getPosition()['X'], char.getPosition()['Y'], char.getSide(), char.getSide());
    }

    renderCharInfo = (char) => {
        ctx.font = this.font + "px Ariel";
        ctx.fillStyle = "red";
        const life = (char.getLife() * (char.getAmount() - 1)) + char.getLifeOfLast();

        ctx.fillText(char.getName() + ", life: "
            + life+ ", (" + char.getAmount() + "), dmg: "
            +  char.getDamage() * char.getAmount()
            , char.getPosition()['X'], char.getPosition()['Y'] - 10);
    }

    renderSelectedCharPosition = (char, team) => {
        const xyPos = char.getPosition();
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
        ctx.arc(char.getPosition()['X'], char.getPosition()['Y'], char.getMoveArea(), 0, 2 * Math.PI);
        ctx.fillStyle = "#DCDCDC";
        ctx.fill();
        ctx.strokeStyle = "#C0C0C0";
        ctx.stroke();
    }

    renderHoveredCharMoveArea = (char) => {
        ctx.beginPath();
        ctx.arc(char.getPosition()['X'], char.getPosition()['Y'], char.getMoveArea(), 0, 2 * Math.PI);
        ctx.fillStyle = "#b7b4b4";
        ctx.fill();
        ctx.strokeStyle = "#C0C0C0";
        ctx.stroke();
    }

    renderSpellsButtons = (char) => {
        ctx.beginPath();
        ctx.arc(char.getPosition()['X'], char.getPosition()['Y'], char.getMoveArea(), 0, 2 * Math.PI);
        ctx.fillStyle = "#b7b4b4";
        ctx.fill();
        ctx.strokeStyle = "#C0C0C0";
        ctx.stroke();
    }


}
