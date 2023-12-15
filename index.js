const prompt = require('prompt-sync')();

const input = parseInt(prompt('What is your number? '));

class RomanNumerals {

    letters = [];

    constructor(inputNumber) {
        this.inputNumber = inputNumber;
    }

    returnRomanNumerals() {
        if(this.inputNumber === 5) {
            return 'V'
        }
    }

    inputNumberWithinRange() {
        if(this.inputNumber < 0 || this.inputNumber > 4000) {
            return false;
        } else {
            return true;
        }
    }

    zeroInputNumberReturnsEmptyString() {
        if(this.inputNumber === 0) {
            return '';
        }
    }

    canBeSubtractedByNumber(tempNumber, value) {
        if(tempNumber - value >= 0) {
            return true;
        } else {
            return false;
        }
    }

    oneOfSixRulesApply2() {
        for (var i = 0; i < this.letters.length; i++) {
            // Check for four consecutive letter I's in the array
            if (this.letters[i] === "I" && this.letters[i + 1] === "I" && this.letters[i + 2] === "I" && this.letters[i + 3] === "I") {
                // Replace the four letters with IV
                this.letters.splice(i, 4, "I", "V")
            }
        }
    }

    oneOfSixRulesApply() {
        switch(this.inputNumber) {
            case 4:
                this.letters = ["I", "V"]
                break;
            case 9:
                this.letters = ["I", "X"]
                break;
            case 40:
                this.letters = ["X", "L"]
                break;
            case 90:
                this.letters = ["X", "C"]
                break;
            case 400:
                this.letters = ["C", "D"]
                break;
            case 900:
                this.letters = ["C", "M"]
                break;
            default:
                break;
        }
    }

    addLetters() {
        let tempNumber = this.inputNumber;
        while(tempNumber > 0) {
            if(this.canBeSubtractedByNumber(tempNumber, 1000)) {
                this.letters.push('M');
                tempNumber -= 1000;
            } else if(this.canBeSubtractedByNumber(tempNumber, 500)) {
                this.letters.push('D');
                tempNumber -= 500;
            } else if(this.canBeSubtractedByNumber(tempNumber, 100)) {
                this.letters.push('C');
                tempNumber -= 100;
            } else if(this.canBeSubtractedByNumber(tempNumber, 50)) {
                this.letters.push('L');
                tempNumber -= 50;
            } else if(this.canBeSubtractedByNumber(tempNumber, 10)) {
                this.letters.push('X');
                tempNumber -= 10;
            } else if(this.canBeSubtractedByNumber(tempNumber, 5)) {
                this.letters.push('V');
                tempNumber -= 5;
            } else if(this.canBeSubtractedByNumber(tempNumber, 1)) {
                this.letters.push('I');
                tempNumber -= 1;
            }
        }

        // Check 6 substitution rules
        this.oneOfSixRulesApply2();
    }

    run() {
        this.returnRomanNumerals();
        this.inputNumberWithinRange();
        this.zeroInputNumberReturnsEmptyString();
        this.addLetters();
        this.oneOfSixRulesApply();
        console.log(this.letters.join(''));
        return this.numeralsArray;
    }

}

const numerals = new RomanNumerals(input);

numerals.run();

module.exports = RomanNumerals;
