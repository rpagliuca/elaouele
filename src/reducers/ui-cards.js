export default (state = {}, action) => {
    switch (action.type) {
        case 'ADICIONAR_PALPITE':
            return {
                isReady: false
            };
        case 'FETCH_PALPITES':
            return {
                isReady: true
            };
        default:
            return state;
    }
}
