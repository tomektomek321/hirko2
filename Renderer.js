
class Renderer {

    static #instance;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new Renderer();
        return this.#instance;
    }

    render = () => {

        myGameArea.clear();

        this.renderSelectedCharMoveArea();

        this.renderHoveredCharMoveArea();

        this.renderChars();

        this.renderSelectedCharPosition();

    }

    renderChars = () => {

        const chars = charManager.getChars();

        for(let i=1; i < chars.length; i++) {

            for(let j=0; j < chars[i].length; j++) {

                chars[i][j].renderPosition(i);

            }

        }
    }


    renderSelectedCharMoveArea = () => {

        view.renderSelectedCharMoveArea(charManager.getSelectedChar());

    }

    renderSelectedCharPosition = () => {

        view.renderSelectedCharPosition(charManager.getSelectedChar(), charManager.getSelectedTeam());

    }


    renderHoveredCharMoveArea = () => {

        const hoveredChar = charManager.getHoveredChar();

        if(hoveredChar)
            view.renderHoveredCharMoveArea(hoveredChar);

    }


}

