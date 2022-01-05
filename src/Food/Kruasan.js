class Kruasan extends Food {

    constructor(x, w, h) {
        super(x, w, h);
        this.points = 1
    }

    drawRect(x, y, w, h) {
        image(images[5], x, y, w, h)
    }
}