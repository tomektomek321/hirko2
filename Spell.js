
class Spell {

    constructor() {
        this.choosen = null;
		this.spellsBox = null;
		this.extraData = {};
    }

    getChoosen = () =>  this.choosen;

    hasSpell = () => (this.choosen != null) ? true : false;

    setChoosen = (spell) => {

        if(spell.name == "move/attack") {
			this.choosen = null;
		} else if(spell.name == "fireBall") {
			this.choosen = new Fireball(charManager.getSelectedChar().getSpellData("fireBall"));
		} else {
            this.choosen = spell;
        }
	}
    //
}