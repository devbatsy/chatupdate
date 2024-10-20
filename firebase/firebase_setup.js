const serviceKey = require("../admin_files/serviceKey.json");
const {initializeApp  , cert} = require("firebase-admin/app");
const {getFirestore , doc , setDoc, FieldValue} = require("firebase-admin/firestore")

module.exports = () =>{
    const initObject = {};
    try{
        initObject['intialiseApp'] = initializeApp({
            credential:cert(serviceKey),
            // storageBucket:'gs://jet-computers.appspot.com'
        });
        initObject['fireStoreDB'] = getFirestore();
        // initObject['bucket'] = getStorage().bucket();

        // createDoc()
        console.log('firestore intialised successfull')
    }catch(err)
    {
        console.log(err)
        console.log('could not connect to firestore')
    }

    return initObject;
}
