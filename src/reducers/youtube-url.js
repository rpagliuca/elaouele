export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCHED_CONFIG':
            return {
                url: action.data.youtubeUrl
            };
        default:
            return state;
    }
}
