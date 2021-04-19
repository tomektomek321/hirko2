
class GameListener {

    clickAction = async() => {

        if(spell.hasSpell()) { // click while using spell
            await spell.getChoosen().attack();
            this.nextCharacterAction();
        } else if(!charManager.getHoveredChar()) { // move
            await move.makeMove(charManager.getSelectedChar(), cursor.getPosition());
            this.nextCharacterAction();
        } else if(charManager.getHoveredChar()) {
            const hovCharNoRef = charManager.getHoveredCharNoRef();
            const moveOk = await move.makeMove(charManager.getSelectedChar(), cursor.getPosition(), charManager.getHoveredCharNoRef());
            if(moveOk) {
                await attackManager.defaultAttack(charManager.getSelectedChar(), hovCharNoRef);
                this.nextCharacterAction();
            }
        }

    }

    mouseMoveAction = () => {

        this.checkIfHovered();

        renderer.render();
    }

    nextCharacterAction = () => {

        this.resetSpell();

        charManager.selectNextChar();

        this.checkIfHovered();

        renderer.render();
    }


    checkIfHovered = () => {
        charManager.checkIfHovered();
    }

    resetSpell = () => {
        spell.resetSpell();
    }


}
