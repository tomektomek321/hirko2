
class Logger {


    static logDefence(charSelected, team, charIndex) {

        const div = document.createElement("div");

        div.innerHTML = "Char from team " + team  + ", position " + (charIndex + 1) + " (" + charSelected.getName()
            + ") : Defence";

        document.getElementById("logger").appendChild(div);
    }

    static logMove(charSelected, teamCharIndex, from, to) {

        const div = document.createElement("div");

        div.innerHTML = "Char from team " + teamCharIndex[0]
            + ", position " + (teamCharIndex[1] + 1) + " (" + charSelected.getName()
            + ") : Move: <br />From X:" + from.X.toFixed(2) + ", Y:" + from.Y.toFixed(2)
            + "<br />To X:" + to.X.toFixed(2) + ", Y:" + to.Y.toFixed(2);

        document.getElementById("logger").appendChild(div);

    }


    static logAttack(charSelected, charAttacked, teamCharIndex, from, to) {

        const div = document.createElement("div");

        div.innerHTML = "Char from team " + teamCharIndex[0]
            + ", position " + (teamCharIndex[1] + 1) + " (" + charSelected.getName() + ")"
            +






        document.getElementById("logger").appendChild(div);

    }







}
