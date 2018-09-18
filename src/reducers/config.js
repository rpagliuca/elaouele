export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCHED_CONFIG':
            return {
                ...action.data
            };
        default:
            return state;
    }
}
