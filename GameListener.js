
class GameListener {

    clickAction = async() => {

        if(!charManager.getHoveredChar()) { // move
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

        charManager.selectNextChar();

        renderer.render();
    }


    checkIfHovered = () => {

        /*
        charManager.getChars().forEach(team => {
            team.forEach(char => {
                if(char.isHover(cursor.getPosition())) {
                    charManager.setHoveredChar(char);
                    return;
                }
            });
        });
        charManager.setHoveredChar(null);    // Te foreache nie dzialają (???)
        */

        const chars = charManager.getChars();

        for(var i=1; i < chars.length; i++) {

            for(var j=0; j < chars[i].length; j++) {

                if(chars[i][j].isHover(cursor.getPosition())) {
                    //charManager.setHoveredChar(chars[i][j]);
                    charManager.setHoveredChar(i, j);
                    return;
                }
            }
        }

        charManager.setHoveredChar(null);

    }


}
