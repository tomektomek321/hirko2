
class GameListener {

    static clickAction = () => {

        // action

        Renderer.render();
    }

    static mouseMoveAction = () => {

        // action

        Renderer.render();
    }

    static nextCharacterAction = () => {

        CharsManager.selectNextChar();

        Renderer.render();
    }


}
