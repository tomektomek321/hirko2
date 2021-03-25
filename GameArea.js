

class myGameArea {

    canvas;

    static init = () => {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.canvas.setAttribute("id", "myCanvas"),
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;

        ctx = this.canvas.getContext("2d");

        myGameArea.getCanvas().addEventListener('click', function(event) {
            GameListener.clickAction();
        }, false);


        myGameArea.getCanvas().addEventListener('mousemove', function(event) {
            let canvasek = myGameArea.getCanvas();
            let x = event.pageX - (canvasek.offsetLeft),
                y = event.pageY - (canvasek.offsetTop) - 7;

            Cursor.setPosition(x, y);
            GameListener.moveAction();

        }, false);

        Renderer.render();
    }

    static getCanvas = () => this.canvas;

}

