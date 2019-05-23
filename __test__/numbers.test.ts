import { numbers } from '../src/scripts/numbers'

describe('Comparación de numeros',()=> {
    test('Mayor que', ()=> {
        expect(numbers(2,2)).toBeGreaterThan(4)
        expect(numbers(2,2)).toBeGreaterThan(3)
    })
    test('Mayor o igual que',()=> {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
        expect(numbers(2,2)).toBeGreaterThanOrEqual(3)
    })
    test('Menor que', ()=> {
        expect(numbers(2,2)).toBeLessThan(4)
        expect(numbers(2,2)).toBeLessThan(3)
    })
    test('Menor o igual que',()=> {
        expect(numbers(2,2)).toBeLessThanOrEqual(4)
        expect(numbers(2,2)).toBeLessThanOrEqual(3)
    })
    test('Numeros flotantes', ()=> {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
        expect(numbers(0.2,0.2)).toBeCloseTo(0.5);
    })
})