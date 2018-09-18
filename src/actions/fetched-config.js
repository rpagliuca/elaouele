const dataToKeyValue = (data) => {
    let map = {};
    data.docs.map(doc => {
        const d = doc.data();
        map[d.chave] = d.valor;
        return null
    });
    return map;
}
export default (dispatch, data) => {
    dispatch({
        type: 'FETCHED_CONFIG',
        data: dataToKeyValue(data)
    });
}
