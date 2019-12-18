import db from './firebase'

const changeStatus = (city, id, data) => {
    return db.collection(city).doc(id).set(data)
}

export default changeStatus;