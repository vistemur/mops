class FoodSpawner {

    constructor() {
        this.maxCount = 10
        this.timeTillNext = 0
        this.nextMaxSpawnTime = 50
        this.food = []
        //this.loveEffects = []
    }

    move() {
        for(let i in this.food) {
            let food = this.food[i]
            food.move()
            if (collision(mops, food) === true) {
                //this.loveEffects.push(new LoveEffect(food.x, food.y))
                score.increase(food.points)
                mops.isSuperState = food.superTasty
                this.food.splice(i, 1)
            }
            if ((food.y + food.height / 2) >= height) {
                happiness.decrease(20)
                if (happiness.value > 0) {
                    this.food.splice(i, 1)
                } else {
                    mops.isSuperState = false
                }
            }
        }

        if (this.timeTillNext > 0) {
            this.timeTillNext -= 1
        } else if (this.food.length < this.maxCount) {
            this.addFood()
            this.timeTillNext = random(this.nextMaxSpawnTime / gameSpeed)
        }
        // for(let i in this.loveEffects) {
        //     this.loveEffects[i].move()
        // }
    }

    addFood() {
        if (random(100) > 90) {
            let w = width * 0.06
            let h = height * 0.127
            this.food.push(new Cupcake(random(w / 2, width - w / 2), w, h))
        } else {
            let w = width / 20
            let h = height / 13
            this.food.push(new Kruasan(random(w / 2, width - w / 2), w, h))
        }
    }

    draw() {
        for(let i in this.food) {
            this.food[i].draw()
        }
        // for(let i in this.loveEffects) {
        //     this.loveEffects[i].draw()
        // }
    }
}