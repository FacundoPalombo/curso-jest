import axios from 'axios'

export const getDataFromApi = url => axios.get(url)


export const getDataFromApiRejected = url => {
    return Promise.reject(new Error('¡Ocurrió un error inesperado!'))
}

export const promiseWave = name =>  {
    return Promise.resolve(`Hello ${name}`)
}