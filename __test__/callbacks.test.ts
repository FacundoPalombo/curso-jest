import { callbackHell } from '../src/scripts/callbacks'

describe('Probando un callback', () => {
    test('Probar callbackHell', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola mundo')
            done()
        }
        callbackHell(otherCallback)
    })
})