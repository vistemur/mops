class FoodSpawner {

    constructor() {
        this.maxCount = 10
        this.timeTillNext = 0
        this.nextMaxSpawnTime = 50
        this.kruasans = []
        this.loveEffects = []
    }

    move() {
        for(let i in this.kruasans) {
            let kruasan = this.kruasans[i]
            kruasan.move()
            if (collision(mops, kruasan) === true) {
                this.loveEffects.push(new LoveEffect(kruasan.x, kruasan.y))
                this.kruasans.splice(i, 1)
                happiness.increase()
            }
            if ((kruasan.y + kruasan.height / 2) >= height) {
                happiness.decrease()
                if (happiness.value > 0) {
                    this.kruasans.splice(i, 1)
                }
            }
        }

        if (this.timeTillNext > 0) {
            this.timeTillNext -= 1
        } else if (this.kruasans.length < this.maxCount) {
            let w = width / 20
            let h = height / 13
            this.kruasans.push(new Kruasan(random(w / 2, width - w / 2), w, h))
            this.timeTillNext = random(this.nextMaxSpawnTime / gameSpeed)
        }
        for(let i in this.loveEffects) {
            this.loveEffects[i].move()
        }
    }

    draw() {
        for(let i in this.kruasans) {
            this.kruasans[i].draw()
        }
        for(let i in this.loveEffects) {
            this.loveEffects[i].draw()
        }
    }
}