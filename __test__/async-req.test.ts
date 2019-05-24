import { getData } from '../src/scripts/async-req'

describe('Se realizan pruebas de fetching con async/await', ()=> {
    let url = 'https://rickandmortyapi.com/api/character/'
    let getRick = 'https://rickandmortyapi.com/api/character/1'
    test('Fetching all', async() => {
        await getData(url).then(data => {
            expect(data).not.toBeNull()
        })
    })
    test('Fetching one', async () => {
        await getData(getRick).then(data => {
            let { name } = data.data
            expect(name).toMatch(/[Rick]+/)
        })
    })
})

describe('Tests sobre apis de errores', ()=> {
    const url = 'https://httpstat.us/'
    test('Prueba error 404', async ()=> {
        let req = getData(`${url}404`)
        expect(req).rejects.toThrowError(/[error]+[failure]*.*404+/i)
    })
})