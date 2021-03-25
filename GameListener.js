
class GameListener {

    static clickAction = () => {

        // action

        Renderer.render();
    }

    static mouseMoveAction = () => {

        this.checkIfHovered();

        Renderer.render();
    }

    static nextCharacterAction = () => {

        CharsManager.selectNextChar();

        Renderer.render();
    }


    static checkIfHovered = () => {

        const chars = CharsManager.getChars();

        for(var i=1; i < chars.length; i++) {

            for(var j=0; j < chars[i].length; j++) {

                if(chars[i][j].isHover(Cursor.getPosition())) {
                    CharsManager.setHoveredChar(chars[i][j]);
                    return;
                }
            }
        }

        CharsManager.setHoveredChar(null);

    }


}
