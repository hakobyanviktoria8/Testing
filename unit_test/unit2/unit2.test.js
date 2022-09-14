const sum = require('./sum');

describe('unit1 test', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 2)).toBeGreaterThan(0);
        expect(sum(1, 2)).toBeLessThan(10);
    });
})