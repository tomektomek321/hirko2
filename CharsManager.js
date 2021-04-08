
class CharsManager {

    instance;

    constructor() {
        this.chars = [[],[],[]]; // [null, team1, team2] :)
        this.team_selected = 1;
        this.char_selected = 0;
        this.hovered_char = {'team': null, 'charIndex': null};
    }

    setStartChars = () => {
        this.initChars();
        this.setStartCharPosition();
    }

    static getInstance = () => {
        if(this.instance) {
            return this.instance;
        }

        this.instance = new CharsManager();
        return this.instance;
    }


    initChars = () => {

        this.chars[1].push(
            new Char(1, new giermek(500)),
            new Char(1, new dragon(30)),
            new Char(1, new elf(215)),
            new Char(1, new mag(20))
        );

        this.chars[2].push(
            new Char(2, new giermek(70)),
            new Char(2, new dragon(2)),
            new Char(2, new elf(10))
        );
    }


    setStartCharPosition = () => {

        const tempPositionX = [null, 30, 450];

        let spaceBetweenCharactersOnY;

        for(let i=1; i < this.chars.length; i++) {

            spaceBetweenCharactersOnY = 60;

            for(let j=0; j < this.chars[i].length; j++) {

                this.chars[i][j].setPosition(tempPositionX[i], spaceBetweenCharactersOnY);
                spaceBetweenCharactersOnY+= 60;

            }
        }
    }

    selectNextChar = () => {

        let insur = 0;
        let found = false;
        Logger.logDefence(this.getSelectedChar(), this.team_selected, this.char_selected);
        this.char_selected++;

        do {
            if(insur > 30) {break;} insur++; // SECURE FOR INFINTE LOOP


            if((this.char_selected > 0) && (this.char_selected > this.chars[this.team_selected].length - 1)) {
                this.char_selected = 0;
                this.team_selected = (this.team_selected == 1) ? 2 : 1;
            }

            if(this.getSelectedChar().getAmount() == 0) {
                this.char_selected++;
                continue;
            } else {
                found = true;
            }

            if(!found)
                this.char_selected++;

        } while(!found)

    }


    setHoveredChar = (team, char) => { this.hovered_char['team'] = team, this.hovered_char['charIndex'] = char; console.log(this.getHoveredChar()); }

    getHoveredChar = () =>  {
        if(this.hovered_char['team'] != undefined && this.hovered_char['charIndex'] != undefined) {
            return this.chars[this.hovered_char['team']][this.hovered_char['charIndex']];
        } else {
            return false;
        }
    }

    getChar = (team, charIndex) => this.chars[team][charIndex];

    getHoveredCharNoRef = () => [this.hovered_char['team'], this.hovered_char['charIndex']];

    getChars = () => this.chars;

    getSelectedChar = () => this.chars[this.team_selected][this.char_selected];

    getSelectedTeam = () => this.team_selected;

    getSelectedTeamAndChar = () => [this.team_selected, this.char_selected];
}