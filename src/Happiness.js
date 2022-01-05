class Happiness {

    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.maxValue = 100
        this.value = 100
    }

    decrease(value) {
        this.value -= value
        if (this.value <= 0) {
            this.value = 0
            stop = true
        }
    }

    draw() {
        fill('white')
        this.drawOval(this.x, this.y, this.width, this.height)
        if (this.value > 75) {
            fill(12, 225, 34)
        } else if (this.value > 25) {
            fill(255, 184, 79)
        } else {
            fill(249, 98, 88)
        }
        if (this.value > 0) {
            this.drawOval(this.x + 6, this.y + 6, this.width * (this.value / this.maxValue) - 12, this.height - 12)
        }
    }

    drawOval(x, y, w, h) {
        let radii = h / 2
        let circleY = y + radii
        let circleX = x + radii
        ellipse(circleX, circleY, radii * 2, radii * 2)
        rect(circleX, y, w - (radii * 2), h)
        circleX = x + w - radii
        ellipse(circleX, circleY, radii * 2, radii * 2)
    }
}