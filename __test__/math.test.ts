import { sumar, multiplicar, dividir, restar } from '../src/scripts/math'
import { evaluarRegEx } from '../src/scripts/regex'

describe('Calculos Matematicos', ()=> {
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2)
        expect(sumar(3,4)).toBe(7)
        expect(sumar(3,4)).not.toBe(8)
        
    })
    test('Prueba de multiplicacion', () => {
        expect(multiplicar(1,3)).toBe(3)
        expect(multiplicar(1,0)).toBe(0)
        expect(multiplicar(1,0)).not.toBe(1)
    })
    test('Prueba de division', () => {
        expect(dividir(3,3)).toBe(1)
        expect(dividir(3,6)).toBe(0.5)
        expect(dividir(1,3)).not.toBe(1)
    })
    test('Prueba de resta', () => {
        expect(restar(6,3)).toBe(3)
        expect(restar(9,3)).toBe(6)
        expect(restar(6,3)).not.toBe(2)
        expect(restar(6,3)).toBe(2) // tiene que fallar
    })
})

describe('Expresiones regulares', ()=> {
    test('Prueba de REGEX: terminan en .com', ()=> {
        expect(evaluarRegEx('sadasdad.com')).toBeTruthy()
        expect(evaluarRegEx('www.cualquiercosa.com')).toBeTruthy()
        expect(evaluarRegEx('sadasdadcom')).toBeFalsy()
    })
})