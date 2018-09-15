export default (state = [], action) => {
    switch (action.type) {
        case 'ADICIONAR_PALPITE':
            const newCard = action.data;
            const newCards = state.map(i => i);
            newCards.push(newCard);
            return newCards;
        default:
            return state;
    }
}
