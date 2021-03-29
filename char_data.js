
class Character {

    constructor(name, life, lifeOfLast, moveArea, side, damage, throw_, amount, nowAttack) {
        this.name = name;
        this.life = life;
        this.lifeOfLast = lifeOfLast;
        this.moveArea = moveArea;
        this.side = side;
        this.damage = damage;
        this.throw = throw_;
        this.amount = amount;
        this.nowAttack = nowAttack;
    }

}


// constructor:  name, team, life, amount, moveArea, height_Width, damage

class giermek extends Character {

    constructor(amount) {
        super("giermek", 20, 20, 130, 10, 5, false, amount, {});
    }

}


class dragon extends Character {

    constructor(amount) {
        super("dragon", 220, 220, 280, 20, 50, false, amount, {});
    }

}


class elf extends Character {

    constructor(amount) {
        super("elf", 70, 70, 140, 15, 20, true, amount, {});

        this.throwRange = 200;
    }

}



class mag extends Character {

    constructor(amount) {
        super("mag", 50, 50, 100, 15, 25, false, amount, {});

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

}

