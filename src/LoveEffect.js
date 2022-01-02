class LoveEffect {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.hearts = [
            new Heart(x, y, 100, 100),
        ]
    }

    move() {
        for(let i in this.hearts) {
            this.hearts[i].move()
        }
    }

    draw() {
        for(let i in this.hearts) {
            this.hearts[i].draw()
        }
    }
}