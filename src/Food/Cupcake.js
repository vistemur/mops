class Cupcake extends Food {

    constructor(x, w, h) {
        super(x, w, h);
        this.points = 5
        this.superTasty = true
    }

    drawRect(x, y, w, h) {
        image(images[6], x, y, w, h)
    }
}