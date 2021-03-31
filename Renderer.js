
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

        this.renderSpellsButtons();

    }

    renderChars = () => {

        charManager.getChars().forEach(team => {
            team.forEach(char => {
                char.renderPosition();
            });
        });
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

    renderSpellsButtons = () => {

        spellsManager.updateSpellsButtons(charManager.getSelectedChar());

    }


}

