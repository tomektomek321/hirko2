
class SpellsManager {


    static #instance;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new SpellsManager();
        return this.#instance;
    }


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