
class Magician extends Character {

    constructor(amount) {
        super("Magician", 50, 50, 100, 15, 25, false, amount, {});

        this.magic = [
            {
                'name': 'nova',
                'disc': 'create a nova that hits everyone in area of 40px',
                'range': 40,
                'damage': 50
            }, {
                'name': 'fireBall',
                'disc': 'throw fireball that hits in some range',
                'range': 30,
                'damage': 40
            }, {
                'name': 'halfDamage',
                'disc': 'the victim upon its spelled has half damage',
            }, {
                'name': 'halfMove',
                'disc': 'the victim upon its spelled has half damage',
            },
        ]
    }

    getSpellData = (spell) => {
        const found = this.magic.filter(x => x.name == spell);
        return found ? found[0] : false; // [ {spell} ]
    }

}