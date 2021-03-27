
class Cursor {

    position = { 'X': null, 'Y': null }

    getPosition = () => this.position;

    setPosition = (x, y) => {
        this.position['X'] = x;
        this.position['Y'] = y;
    }

}
