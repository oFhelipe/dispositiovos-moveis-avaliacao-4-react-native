import { ADD_CONTATO } from './contatos-actions'
const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            return {
                contatos: [...estado.contatos, action.payload.contato]
            }
        default:
            return estado;
    }
}