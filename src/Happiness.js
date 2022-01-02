class Happiness {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.maxValue = 100
        this.value = 100
    }

    increase() {
        if (this.value < this.maxValue) {
            this.value += 1
        }
    }

    decrease() {
        this.value -= 50
        if (this.value <= 0) {
            this.value = 0
            stop = true
        }
    }

    draw() {
        fill("black")
        rect(this.x, this.y, this.width, this.height)
        fill("pink")
        rect(this.x, this.y, this.width / this.maxValue * this.value, this.height)
    }
}