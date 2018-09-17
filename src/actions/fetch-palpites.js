export default (dispatch, db, data) => {
    dispatch({
        type: 'FETCH_PALPITES',
        data: data
    });
}
