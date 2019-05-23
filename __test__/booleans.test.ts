import {
    isTrue,
    isFalse,
    isNull,
    isUndefined,
    isTrueDestructuring,
    isFalseDestructuring,
    isNullDestructuring,
    isUndefinedDestructuring
    
} from '../src/scripts/booleans'

describe('Prueba de booleanos', () => {
    test('Truthy with Destructuring', () => {
        expect(isTrueDestructuring().value).toBeTruthy()
    })
    test('Falsy with Destructuring', () => {
        expect(isFalseDestructuring().value).toBeFalsy()
    })
    test('Null with Destructuring', () => {
        expect(isNullDestructuring().value).toBeNull()
    })
    test('undefined with Destructuring', () => {
        expect(isUndefinedDestructuring().value).toBeUndefined()
    })
    test('Truthy', () => {
        expect(isTrue()).toBeTruthy()
    })
    test('Falsy', () => {
        expect(isFalse()).toBeFalsy()
    })
    test('Null', () => {
        expect(isNull()).toBeNull()
    })
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined()
    })
})