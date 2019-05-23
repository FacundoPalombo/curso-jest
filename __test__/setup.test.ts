//Despues de cada test
afterEach(() => console.log('Despues de cada prueba... =v'))
//Despues de todos los test
afterAll(() => console.log('Despues de todas las pruebas... :) '))
//Antes de cada test
beforeEach(() => console.log('Antes de cada test ... v='))
//Despues de todos los test
beforeAll(()=> console.log('Antes de todos los tests... (: '))

describe('Preparar antes de ejecutar', ()=> {
    test('Es verdadero', ()=> {
        expect(true).toBeTruthy()
    })
})