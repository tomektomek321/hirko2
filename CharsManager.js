
class CharsManager {

    static chars = [[],[],[]]; // [null, team1, team2] :)

    static team_selected = 1;

    static char_selected = 0;

    static hovered_char = null;

    constructor() { }

    static setStartChars = () => {

        this.initChars();
        this.setStartCharPosition();
    }


    static initChars = () => {

        this.chars[1].push(
            new Char(new giermek(500)),
            new Char(new dragon(30)),
            new Char(new elf(215)),
            new Char(new mag(20))
        );

        this.chars[2].push(
            new Char(new giermek(70)),
            new Char(new dragon(2)),
            new Char(new elf(10))
        );
    }


    static setStartCharPosition = () => {

        const tempPositionX = [null, 30, 450];

        let spaceBetweenCharactersOnY = 60;

        for(let i=1; i < this.chars.length; i++) {

            spaceBetweenCharactersOnY = 60;

            for(let j=0; j < this.chars[i].length; j++) {

                this.chars[i][j].setPosition(tempPositionX[i], spaceBetweenCharactersOnY);
                spaceBetweenCharactersOnY+= 60;

            }
        }
    }

    static selectNextChar = () => {

        let insur = 0;
        let found = false;

        this.char_selected++;

        do {
            if(insur > 30) break; // SECURE FOR INFINTE LOOP
            insur++; // SECURE FOR INFINTE LOOP


            if((this.char_selected > 0) && (this.char_selected > this.chars[this.team_selected].length - 1)) {
                this.char_selected = 0;
                this.team_selected = (this.team_selected == 1) ? 2 : 1;
            }

            if(this.chars[this.team_selected][this.char_selected].getAmount() == 0) {
                this.char_selected++;
                continue;
            } else {
                found = true;
            }

            if(!found)
                this.char_selected++;

        } while(!found)

    }


    static setHoveredChar = (char) => { this.hovered_char = char; console.log(this.hovered_char); }

    static getHoveredChar = () => this.hovered_char;

    static getChars = () => this.chars;

    static getSelectedChar = () => this.chars[this.team_selected][this.char_selected];

    static getSelectedTeam = () => this.team_selected;

    static getSelectedTeamAndChar = () => [this.team_selected, this.char_selected];
}