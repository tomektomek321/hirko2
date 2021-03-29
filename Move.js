

class Move {

    static #instance;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new Move();
        return this.#instance;
    }


    makeMove = (char, pos, nextCharacterCallback) => {

        const moveArea = char.getMoveArea();

        const start_pos = char.getPosition();

        const z = Math.floor(Math.sqrt(Math.pow(pos.X - start_pos.X, 2) + Math.pow(pos.Y - start_pos.Y, 2)));

        if(z > moveArea) { console.log("Nie mozna tak daleko"); return; }

        const DIVIDE_INTERVAL = 85;

        const x_len = (pos.X - start_pos.X) / DIVIDE_INTERVAL;
        const y_len = (pos.Y - start_pos.Y) / DIVIDE_INTERVAL;

        let next_posX = start_pos.X;
        let next_posY = start_pos.Y;

        let cl = 1;

        let counterDivider = 0;
        let intervalek = setInterval(function() {

            cl++;
            counterDivider++;

            next_posX = next_posX + x_len;
            next_posY = next_posY + y_len;

            char.setPosition(next_posX - 7, next_posY - 7);

            renderer.render();

            if(cl > 90) clearInterval(intervalek);

            if(counterDivider > DIVIDE_INTERVAL) {

                clearInterval(intervalek);
                nextCharacterCallback();
            }

        }, 10);

    }


}