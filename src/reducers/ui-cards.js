export default (state = [], action) => {
    switch (action.type) {
        case 'ADICIONAR_PALPITE':
            return {
                state: 'loading'
            };
        case 'FETCH_PALPITES':
            return {
                state: 'ready'
            };
        default:
            return state;
    }
}
