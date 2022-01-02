class Mops extends ScreenElement {

    constructor() {
        super(0, 0, 0, 0)
        this.width = width / 6
        this.height = height / 4
        this.x = width / 2
        this.y = height - this.height / 2

        this.moving = 0
        this.speeding = 5
        this.maxSpeed = 30;
    }

    move() {
        this.stop = this.speeding;
        if (keyIsDown(LEFT_ARROW)) {
            this.moving -= this.speeding;
            this.stop = 0;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.moving += this.speeding;
            this.stop = 0;
        }
        if (this.moving > this.maxSpeed) {
            this.moving = this.maxSpeed
        }
        if (this.moving < -this.maxSpeed) {
            this.moving = -this.maxSpeed
        }

        if (this.x + this.moving + this.width / 2 > width) {
            this.x = width - this.width / 2
            this.moving = 0
        }
        if (this.x + this.moving - this.width / 2 < 0) {
            this.x = this.width / 2
            this.moving = 0
        }

        if (this.moving > 0) {
            this.moving -= this.stop
        }
        if (this.moving < 0) {
            this.moving += this.stop
        }

        this.x += this.moving * gameSpeed
    }

    drawRect(x, y, w, h) {
        let state = 2
        if (happiness.value < 50) {
            state = 1
        } else if (happiness.value > 90) {
            state = 3
        }
        image(images[state], x, y, this.width, this.height)
    }
}
