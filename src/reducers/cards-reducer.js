export default (state = [], action) => {
    switch (action.type) {
        case 'ADICIONAR_PALPITE':
            const newCard = action.data;
            const newCards = state.map(i => i);
            newCards.unshift(newCard);
            return newCards;
        case 'FETCH_PALPITES':
            return action.data.docs.map(d => d.data());
        default:
            return state;
    }
}
