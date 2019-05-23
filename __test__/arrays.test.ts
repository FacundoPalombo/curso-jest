import { fruit, color, thing } from '../src/scripts/arrays';

describe('Prueba de arrays', () => {
    describe('Pruebas de frutas', () => {
        test('¿Contiene una banana?', () => {
            expect(fruit()).toContain('Banana')
        })
    })
    describe('Pruebas de colores', () => {
        test('¿Es rojo?', () => {
            expect(color()).toContain('red')
        })
        test('¿Tengo 5 colores?', () => {
            expect(color()).toHaveLength(4)
        })
    })
    describe('Prueba de cosas', () => {
        expect(thing()).toContain('thing1')
    })
})