import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3ccsQrox57tWyqxUJgxQSVB4iyZho0oE",
    authDomain: "clientpanel-56bf8.firebaseapp.com",
    databaseURL: "https://clientpanel-56bf8.firebaseio.com",
    projectId: "clientpanel-56bf8",
    storageBucket: "clientpanel-56bf8.appspot.com",
    messagingSenderId: "59284887848"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};

const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
