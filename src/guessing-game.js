class GuessingGame {
    constructor() {
        this.minNumber = 0;
        this.maxNumber = 0;
    }

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        this.middleNumber = Math.round((this.maxNumber + this.minNumber) / 2);
        return this.middleNumber;
    }

    lower() {
        this.maxNumber = this.middleNumber;
        return this.maxNumber;
    }

    greater() {
        this.minNumber = this.middleNumber;
        return this.minNumber;
    }
}

module.exports = GuessingGame;
