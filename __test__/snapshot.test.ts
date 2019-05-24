import { getCharacter } from '../src/scripts/snapshot'
import * as rick from '../src/mocks/rick.json'


describe('Prueba de los snapshots', ()=> {
    test('Snapshot', ()=> {
        expect(getCharacter(rick)).toMatchSnapshot()
    })
})