export default (dispatch, db, data) => {
    db.collection('palpites').add({
        nome: data.nome,
        palpite: data.palpite
    });  
    dispatch({
        type: 'ADICIONAR_PALPITE',
        data: data
    });
}
