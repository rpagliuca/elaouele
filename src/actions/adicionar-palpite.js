import firebase from 'firebase/app';

export default (dispatch, db, data) => {
    db.collection('palpites').add({
        nome: data.nome,
        palpite: data.palpite,
        recado: data.recado,
        created: firebase.firestore.FieldValue.serverTimestamp()
    });  
    dispatch({
        type: 'ADICIONAR_PALPITE',
        data: data
    });
}
