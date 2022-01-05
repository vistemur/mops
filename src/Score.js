class Score {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.value = 0
    }

    draw() {
        textSize(77)
        fill('white')
        textFont('Roboto')
        text(str(this.value), this.x, this.y)
    }

    increase(value) {
        this.value += value
    }
}