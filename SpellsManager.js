
class SpellsManager {

    updateSpellsButtons = (char) => {

        let spells = [];
        if(char.canSpell())
            spells = char.getSpells();

        spells = [{'name': 'next/defence'}, {'name': 'move/attack'}, ...spells];

        spellsView.showSpellsButtons(spells);


    }

    render = () => {
        spell.getChoosen().render();
    }

}