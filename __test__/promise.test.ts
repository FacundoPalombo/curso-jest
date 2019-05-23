import { getDataFromApi, getDataFromApiRejected, promiseWave } from '../src/scripts/promise'

describe('Pruebas sobre una peticion a un API', ()=> {    
    const url = 'https://rickandmortyapi.com/api/character'
    test('Recibiendo datos de Rick y Morty API', async done => {
        let { data: { results } } = await getDataFromApi(url)
        //results.map(item => console.log(item))
        expect(results).not.toBeUndefined()
        done()
    })
    test('Pruebas de Promise.Resolve()', async done => {
        let item = await promiseWave('Facundo')
        expect(item).resolves.not.toBeNull()
        done()
    })
    test('asldalsdjk',()=> {
        expect(Promise.resolve('What happened here')).resolves.not.toBeNull()
    })
    test('Prueba Promise.Rejects', async done => {
        let results = await getDataFromApiRejected(url)
        expect(results).rejects.toThrowError()
        done()
    })
})