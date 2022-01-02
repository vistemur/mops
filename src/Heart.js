class Heart extends ScreenElement {

    draw() {
        fill('green')
        ellipse(this.x, this.y, this.width, this.height)
    }

    move() {
        this.x += random(-this.width / 5, this.width / 5)
        this.y -= random(this.height / 5)
    }
}