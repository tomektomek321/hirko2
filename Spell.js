
class Spell {

    static #instance;

    constructor() {
        this.choosen = null;
		this.spellsBox = null;
		this.extraData = {};
    }

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new Spell();
        return this.#instance;
    }

    getChoosen = () =>  this.choosen;

    setChoosen = (spell) => {

        if(spell.name == "move/attack") {
			this.choosen = null;
		} else {
            this.choosen = spell;
        }
	}

}