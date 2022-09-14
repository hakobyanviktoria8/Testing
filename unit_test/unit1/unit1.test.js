const unit1 = require('./unit1');

describe('unit1 test', () => {
    test('is number right', () => { 
        expect(unit1(23)).toBe(true)
    })
    
    test('added biger', () => {
        expect(unit1(230)).toBe(false)
    });

    test('added biger', () => {
        expect(unit1(0)).toBe(true)
    });
})