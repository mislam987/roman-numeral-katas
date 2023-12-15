const RomanNumerals = require('./index');

describe('Check input numbers correspond to correct Roman Numerals', () => {

    it('Should expect an integer as an input', () => {
        const romanNumerals = new RomanNumerals(5);
        expect(typeof(romanNumerals.inputNumber)).toBe('number');
    })

    it('Entry should be in the range between 0 and 4000', () => {
        const romanNumerals = new RomanNumerals(1);
        expect(romanNumerals.inputNumberWithinRange()).toBe(true);
    })

    it('0 entry should return an empty string', () => {
        const romanNumerals = new RomanNumerals(0);
        expect(romanNumerals.zeroInputNumberReturnsEmptyString()).toBe('');
    })

    it('Entry of 5 should return V', () => {
        const romanNumerals = new RomanNumerals(5);
        expect(romanNumerals.returnRomanNumerals()).toBe('V');
    })

    it('1000 can be subtracted from entry', () => {
        const romanNumerals = new RomanNumerals(3000);
        expect(romanNumerals.canBeSubtractedByNumber(3000, 1000)).toBe(true);
    })

    it('should return MMM', () => {
        const romanNumerals = new RomanNumerals(3000);
        romanNumerals.addLetters();
        expect(Array.isArray(romanNumerals.letters)).toBe(true);
        expect(romanNumerals.letters[0]).toBe('M');
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M"]);
    })

    it('should return MMMD', () => {
        const romanNumerals = new RomanNumerals(3500);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D"]);
    })

    it('should return MMMDC', () => {
        const romanNumerals = new RomanNumerals(3600);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C"]);
    })

    it('should return MMMDCL', () => {
        const romanNumerals = new RomanNumerals(3650);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C", "L"]);
    })

    it('should return MMMDCLX', () => {
        const romanNumerals = new RomanNumerals(3660);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C", "L", "X"]);
    })

    it('should return MMMDCLXV', () => {
        const romanNumerals = new RomanNumerals(3665);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C", "L", "X", "V"]);
    })

    it('should return MMMDCLXVI', () => {
        const romanNumerals = new RomanNumerals(3666);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C", "L", "X", "V", "I"]);
    })

    it('should return MMMDCLXVIII', () => {
        const romanNumerals = new RomanNumerals(3668);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["M", "M", "M", "D", "C", "L", "X", "V", "I", "I", "I"]);
    })

})

describe('Check six substitution rules', () => {
    it('(Rule 1) 4 to return IV', () => {
        const romanNumerals = new RomanNumerals(4);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["I", "V"]);
    })

    it('(Rule 2) 9 to return IX', () => {
        const romanNumerals = new RomanNumerals(9);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["I", "X"]);
    })

    it('(Rule 3) 40 to return XL', () => {
        const romanNumerals = new RomanNumerals(40);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["X", "L"]);
    })

    it('(Rule 4) 90 to return XC', () => {
        const romanNumerals = new RomanNumerals(90);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["X", "C"]);
    })

    it('(Rule 5) 400 to return CD', () => {
        const romanNumerals = new RomanNumerals(400);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["C", "D"]);
    })

    it('(Rule 6) 900 to return CM', () => {
        const romanNumerals = new RomanNumerals(900);
        romanNumerals.addLetters();
        expect(romanNumerals.letters).toStrictEqual(["C", "M"]);
    })
})
