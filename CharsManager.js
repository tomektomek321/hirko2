
class CharsManager {

    static chars= [[],[],[]]; // [null, team1, team2] :)

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

        let tempPositionX = [null, 30, 450];

        let spaceBetweenCharactersOnY = 60;

        for(let i=1; i < this.chars.length; i++) {

            spaceBetweenCharactersOnY = 60;

            for(let j=0; j < this.chars[i].length; j++) {

                this.chars[i][j].setPosition(tempPositionX[i], spaceBetweenCharactersOnY);
                spaceBetweenCharactersOnY+= 60;

            }
        }
    }


    static getChars = () => this.chars;


}