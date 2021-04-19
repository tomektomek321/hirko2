
class CharacterPosition {

    positionX
    positionY

    centerXChar
    centerYChar


    setPosition = (x , y, side) => {

        this.positionX = x;
        this.positionY = y;

        if(x == null || y == null) {
            this.centerXChar = null;
            this.centerYChar = null;
        } else {
            this.centerXChar = this.positionX + Math.floor(side / 2);
            this.centerYChar = this.positionY + Math.floor(side / 2);
        }


    }


    getPosition = () => ({'X': this.centerXChar, 'Y': this.centerYChar})

    getXY = () =>  ({'X': this.positionX, 'Y': this.positionY})



}