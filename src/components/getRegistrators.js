import db from './firebase'

const getRegistrations = (city) => {
    return db.collection(city).get()
}

export default getRegistrations;