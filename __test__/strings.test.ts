import { number, url } from '../src/scripts/strings'

describe('Evaluando con expresiones regulares', () => {
    describe('Evaluando las urls', () => {
        test('Evaluando sobre un array', () => {
            url().map(item => {
                expect(item).toMatch(/(http:\/\/)?.+(\.\w{2,6})+/)
            });
        })
        test('Evaluando sobre un item', () => {
            expect(url()[0]).toMatch(/(http:\/\/)?.+(\.\w{2,6})+/)
        })
    })
    describe('Evaluando los numeros', () => {
        test('Evaluando sobre un array', () => {
            number().map(item => {
                expect(item).toMatch(/\d{1,4}*/)
            });
        })
        test('Evaluando sobre un item', () => {
            expect(number()[0]).toMatch(/\d{1,4}*/)
        })
    })
})