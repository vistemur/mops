class ScreenElement {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
    }

    move() {}

    draw() {
        let originX = this.x - this.width / 2
        let originY = this.y - this.height / 2
        this.drawRect(originX, originY, this.width, this.height)
    }

    drawRect(x, y, w, h) {
        rect(this.x, this.y, this.width, this.height)
    }
}