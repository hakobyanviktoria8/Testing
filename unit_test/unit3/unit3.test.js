const filterFunc = require('./filter')

describe('unit1 test', () => {
    test('is a array', () => { 
        expect(filterFunc([1,2,34,5,'rer'])).toEqual(['1','2','34','5'])
    })
    test('not equal array', () => { 
        expect(filterFunc([1,2,34,5,'rer'])).not.toEqual(['1','2','5'])
    })
})