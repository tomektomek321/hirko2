
class SpellsManager {

    updateSpellsButtons = (char) => {

        let spells = [];
        if(char.canSpell())
            spells = char.getSpells();

        spells = [{'name': 'next/defence'}, {'name': 'move/attack'}, ...spells];

        spellsView.showSpellsButtons(spells);


    }

    isCharReachedBySpell = (spell_, {X, Y}, char) => {

        const area = {
            'X': X - spell_.range,
            'Y': Y - spell_.range,
            'side': spell_.range * 2
        }

        let charXY = char.getXY();

        if((area.X + area.side + 3 >= charXY['X'] && area.X <= charXY['X'] + char.getSide())
                && (area.Y + area.side + 3 >= charXY['Y'] && area.Y <= charXY['Y'] + char.getSide())
                && char.getTeam() != charManager.getSelectedTeam() ) {

            return true;
        }

        return false;
    }

    render = () => {
        spell.getChoosen()?.render();
    }

}