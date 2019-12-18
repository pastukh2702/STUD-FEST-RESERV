
import * as firebase from 'firebase/app';
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: 'AIzaSyByNUVTHII56_V5OMi4GCx8qTchkePbyYE',
    authDomain: 'stud-fest-impulse.firebaseapp.com',
    projectId: 'stud-fest-impulse'
  });

var db = firebase.firestore();

export default db;