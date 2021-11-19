export const ADD_CONTATO = "ADD_CONTATO"

export const addContato = ({nome, numero}) =>{
    const contato = {nome, numero}
    return {
        type: ADD_CONTATO,
        payload: {
            contato
        }
    }
}