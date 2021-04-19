
class Renderer {

    render = () => {

        myGameArea.clear();

        this.renderSelectedCharMoveArea();

        this.renderHoveredCharMoveArea();

        this.renderChars();

        this.renderSpell();

        this.renderSelectedCharPosition();

        this.renderSpellsButtons();

    }

    renderChars = () => {

        charManager.getChars().forEach(team => {
            team.forEach(char => {
                view.renderChar(char); //char.renderPosition();
                view.renderCharInfo(char);
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
        if(hoveredChar) {
            view.renderHoveredCharMoveArea(hoveredChar);
        }

    }

    renderSpellsButtons = () => {

        spellsManager.updateSpellsButtons(charManager.getSelectedChar());

    }

    renderSpell = () => {

        if(spell.hasSpell())
            spellsManager.render();


    }


}

