import { getDataFromApi } from '../src/scripts/promise'

describe('Pruebas sobre una peticion a un API', ()=> {    
    const url = 'https://rickandmortyapi.com/api/character'
    test('Recibiendo datos de Rick y Morty API', async done => {
        let { data: { results } } = await getDataFromApi(url)
        //results.map(item => console.log(item))
        expect(results).not.toBeUndefined()
        done()
    })
})