class Food extends ScreenElement{

    constructor(x, w, h) {
        super(0, 0, 0, 0)
        this.maxSpeed = height / 200
        this.timeToMaxSpeed = 100
        this.speed = random(this.maxSpeed / 2)
        this.x = x
        this.y = -w / 2
        this.width = w
        this.height = h
        this.points = 0
        this.superTasty = false
    }

    move() {
        if (this.speed < this.maxSpeed) {
            this.speed += this.maxSpeed / this.timeToMaxSpeed
        }
        this.y += this.speed * gameSpeed
    }
}