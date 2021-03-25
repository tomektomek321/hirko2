
class Renderer {

    static render = () => {

        myGameArea.clear();

        this.renderSelecterCharMoveArea();

        this.renderChars();

        this.renderSelectedCharPosition();

    }

    static renderChars = () => {

        const chars = CharsManager.getChars();

        for(let i=1; i < chars.length; i++) {

            for(let j=0; j < chars[i].length; j++) {

                chars[i][j].renderPosition(i);

            }

        }
    }


    static renderSelecterCharMoveArea = () => {

        View.renderSelecterCharMoveArea(CharsManager.getSelectedChar());

    }

    static renderSelectedCharPosition = () => {

        View.renderSelectedCharPosition(CharsManager.getSelectedChar(), CharsManager.getSelectedTeam());

    }

}

