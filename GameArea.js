

class MyGameArea {

    static #instance;

    canvas;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new MyGameArea();
        return this.#instance;
    }

    init = () => {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.canvas.setAttribute("id", "myCanvas"),
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;

        ctx = this.canvas.getContext("2d");

        myGameArea.canvas.addEventListener('click', function(event) {
            gameListener.clickAction();
        }, false);


        myGameArea.canvas.addEventListener('mousemove', function(event) {
            let canvasek = myGameArea.canvas;
            let x = event.pageX - (canvasek.offsetLeft),
                y = event.pageY - (canvasek.offsetTop) - 7;

            cursor.setPosition(x, y);
            gameListener.mouseMoveAction();

        }, false);

        renderer.render();
    }

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getCanvas = () => this.canvas;

}

