
class Renderer {

    static render = () => {

        this.renderChars();

    }

    static renderChars = () => {

        let chars = CharsManager.getChars();

        for(let i=1; i < chars.length; i++) {

            for(let j=0; j < chars[i].length; j++) {

                chars[i][j].renderPosition(i);

            }

        }
    }

}

