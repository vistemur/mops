function preload() {
    images = [
        loadImage("images/love.png"),
        loadImage("images/mops1.png"),
        loadImage("images/mops2.png"),
        loadImage("images/mops3.png"),
        loadImage("images/background.png"),
        loadImage("images/kruasan.png"),
        loadImage("images/cupcake.png"),
    ]
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    initialize()
}

function initialize() {
    mops = new Mops()
    foodSpawner = new FoodSpawner()
    happiness = new Happiness(48, 48, width * 0.23, 24)
    score = new Score(48, 150)
    gameSpeed = 1
    stop = false
    time = 0
}

function draw() {
    if (stop == true) {
        return;
    }
    image(images[4], 0, 0, width, height)

    mops.move()
    foodSpawner.move()
    gameSpeed += 0.0001
    time += 1

    foodSpawner.draw()
    happiness.draw()
    score.draw()
    mops.draw()
    // fill("blue")
    // textSize(30)
    // text("survived: " + time, 32, 32)
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