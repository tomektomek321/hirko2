
class Cursor {

    static position = { 'X': null, 'Y': null }

    static getPosition = () => this.position;

    static setPosition = (x, y) => {
        this.position['X'] = x;
        this.position['Y'] = y;
    }

}
