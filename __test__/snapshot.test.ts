import { getCharacter } from '../src/scripts/snapshot'
import * as rick from '../src/mocks/rick.json'


describe('Prueba de los snapshots', ()=> {
    test('Snapshot', ()=> {
        expect(getCharacter(rick)).toMatchSnapshot()
    })
    test('Siempre va a fallar la instantanea', ()=> {
        const user = {
            createdAt : new Date(),
            id : Math.floor(Math.random() * 20),
            name: "Random guy"
        }
        expect(user).toMatchSnapshot()
    })
    test('Tenemos una excepción dentro del código', ()=> {
        const user = {
            id : Math.floor(Math.random() * 20),
            name: "Random guy"
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
})