const initialState = { on: false }
export const dadosTelaPerfil = (store=initialState,action) =>{
    switch (action.type) {
        case 'UPDATE_NICKNAME':
            return {...store, nickmane: action.on}
            
    
        default:
        return store;
           
    }
}
// export default dadosTelaPerfil;
