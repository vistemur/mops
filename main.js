function preload() {
    images = [
        loadImage("images/love.png"),
        loadImage("images/mops1.png"),
        loadImage("images/mops2.png"),
        loadImage("images/mops3.png")
    ]
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    initialize()
}

function initialize() {
    mops = new Mops()
    foodSpawner = new FoodSpawner()
    happiness = new Happiness(width - 132, 32, 100, 30)
    gameSpeed = 1
    stop = false
    time = 0
}

function draw() {
    if (stop == true) {
        return;
    }
    clear()

    mops.move()
    foodSpawner.move()
    gameSpeed += 0.0001
    time += 1

    mops.draw()
    happiness.draw()
    foodSpawner.draw()
    fill("blue")
    textSize(30)
    text("survived: " + time, 32, 32)
}

function mousePressed() {
    if (stop == true) {
        initialize()
    }
}

function collision(rect1, rect2) {
    if ((   rect1.x - rect1.width / 2 >= rect2.x - rect2.width / 2 &&
        rect1.x - rect1.width / 2 <= rect2.x + rect2.width / 2) ||
        (   rect1.x + rect1.width / 2 >= rect2.x - rect2.width / 2 &&
            rect1.x + rect1.width / 2 <= rect2.x + rect2.width / 2)) {
        if (rect1.y - rect1.height / 2 >= rect2.y - rect2.height / 2 &&
            rect1.y - rect1.height / 2 <= rect2.y + rect2.height / 2) {
            return true
        } else if ( rect1.y + rect1.height / 2 >= rect2.y - rect2.height / 2 &&
            rect1.y + rect1.height / 2 <= rect2.y + rect2.height / 2) {
            return true
        }
    }
    if ((   rect2.x - rect2.width / 2 >= rect1.x - rect1.width / 2 &&
        rect2.x - rect2.width / 2 <= rect1.x + rect1.width / 2) ||
        (   rect2.x + rect2.width / 2 >= rect1.x - rect1.width / 2 &&
            rect2.x + rect2.width / 2 <= rect1.x + rect1.width / 2)) {
        if (rect2.y - rect2.height / 2 >= rect1.y - rect1.height / 2 &&
            rect2.y - rect2.height / 2 <= rect1.y + rect1.height / 2) {
            return true
        } else if ( rect2.y + rect2.height / 2 >= rect1.y - rect1.height / 2 &&
            rect2.y + rect2.height / 2 <= rect1.y + rect1.height / 2) {
            return true
        }
    }
    return false
}