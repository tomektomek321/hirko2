
class Fireball {

    constructor(spellData) {
        this.range = spellData['range'];
        this.damage = spellData['damage'];
        this.viewData = [];
    }

    getDamage = () => this.damage;

    getRange = () => this.range;

    clearViewData = () => { this.viewData = []; }

    setView = () => {
        const { X, Y } = cursor.getPosition();

        let row = -this.range;
        let seat = -this.range;

        for(let i = 1; i < 50; i++) {
            this.viewData.push( [X - seat, Y - row, 3, 3] );

            seat = seat + 10;

            if(i % 7 == 0) {
                row += 10;
                seat = -this.range;
            }
        }
    }

    render = () => {
        this.clearViewData();
        this.setView();

        this.viewData.forEach(x => {
            ctx.fillStyle = "red";
            ctx.fillRect(x[0], x[1], x[2], x[3]);
        })

    }

    attack = () => {
        return new Promise((resolve, reject) => {

            let team = charManager.getSelectedTeamAndChar()[0];

            let oponent = (team == 1) ? 2 : 1;

            let chars = charManager.getCharsFromTeam(oponent);

            for(let i = 0; i < chars.length; i++) {

                let tempChar = [oponent, i]; // tempChar with noRef

                if(chars[i].isReachedBySpell(spell.getChoosen(), cursor.getPosition())) {

                    attackManager.defaultAttack(chars[i], tempChar);
                }
            }

            resolve("OK");

        });
    }

}