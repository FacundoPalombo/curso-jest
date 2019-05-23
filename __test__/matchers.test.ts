describe('Comparadores Comunes', () => {
    const user = {
        name: "facundo",
        lastname: "palombo"
    }
    const user2 = {
        name: "facundo",
        lastname: "palombasdo"
    }
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })
    test('No son exactamente iguales',()=> {
        expect(user).not.toEqual(user2)
    })
})