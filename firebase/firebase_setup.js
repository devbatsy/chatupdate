const serviceKey = require("../admin_files/serviceKey.json");
const {initializeApp  , cert} = require("firebase-admin/app");
const {getFirestore , doc , setDoc, FieldValue} = require("firebase-admin/firestore")

module.exports = () =>{
    const initObject = {};
    try{
        initObject['intialiseApp'] = initializeApp({
            credential:cert({
  "type": "service_account",
  "project_id": "instant-message-fbe8f",
  "private_key_id": "fc9cd454ee8db9e423a654012f3dc05f2286e3b7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDQpGI0GO40vjju\nxOUroxEVhRqeCqj5a6DKVnkHO4CZNXiFVPOmpA6nG6tREYSFmsCFf4tFfJ41VYOo\ncYMbcFAfN1s/0Ecicr3gn1V/AiiAA4pdfdvCa//qwlSQhI6Z+iDaP3ZKjtj1NSJy\nzpT1JZa4qIzuUS2Nuz6XWWj7oJTgtI9NirB+YKsf0zcljQoVybFHwM/PMZll6+x0\n4DgZBl/VwpXcH/9KA90vglkcdEVAIpD1BiA62v0bLMOmQQtNT+ByrnsFIjnKT8K4\nfAOK04v4dziOtlLB6j5lyhArE/9gRHJAJVLCQBgt4mMmrFhZMhQSC5CLofqvrZqq\nwlyUqEkFAgMBAAECggEAD5T/SpHEFIdSXC6zSNeEWp2Wt8/m/720g/gCUPJ2L7sJ\nFbga/EqLV5qe6E6NHadJko7MeXONo0EQNJ/JoV55dWNeer0U2vND0AdGTNZ97NWW\n21WfeH01XzSFOUfVGJXQJ0yPCpFxjZqayIU6JbbZc1APOmswokGmMop4ZzZ+d+uR\nk2jEez2L/PQNWLpjweY/1w376CFowOqeI78Th86vVCDYUexvoG+b6ghyX4iHwnqb\n3l1JFJa7Uc2ZZSfZNqYVAwp/Wyn57vlW9jOA1MBCFjkpRwyTlJhuDLrb1F7ZLOfc\nInexa8qPoVE38cj8WEfWKIp8iHuLrU4zRpE0Nk7m/wKBgQD8JdWw2Ub6KMak50uD\nAY+6N6Vk5VJlKJPYZuG0ng/ZM6GlHcJe1B01B2Qk4CGKkOKvocjtp4v+TmpUgjAu\n6/oNSvxiXQAnIJ658AZYk6yQ/RuLEhahCUkQYu5v7FjcY6oE6VFercAhkgfosNLX\nqIhwBgGwTKhNfaaaD2eAMZglwwKBgQDT1GVEed60/g5BZK/PgR9HGQIGuFLn2/zU\n7mrsq0ENKv+FZw7AFbPMqD4xTsPmH0ptZUaWxQG/Z/LUrM0HqV42DgOd6vxiD/T6\n5PDXVO2PPMbmaIVM3vEDet+SX2Ki9dquEuu0gYBix24k1tL77fqpi5l4vSCiZwsh\nTwuHIabBlwKBgCAVZFprWzerhpMnBxm1Uid8uyPadiB/CEjp1mBYGGYnxrKu1bOh\nQ9IijaCPkFUEWIPGjz2GKy8BpU/5fM4LoracSv7tHH7eDLRWEUimCbgtLJsGgzCc\ncNqP7Az7wtbQK6sSURM+AouC/FSkYz+jpzCx4vce2e96RH+n5CCQru5nAoGAJkrD\nz6AUMTWn0Axqd6FIzSppIlvZqM4sozVCIOxIQyAdtrjNgs2phfp326P4Z7YKV0Iy\ng3izey1ISUe/fH4SaMUZxEdBPlzSFTSjkNlqZDVBY09LoXy/prhkh+o0Q28cC9Gh\nyCyMz85rS7+FvkLjyBhTMu9FYfYsneXTGKdtpJsCgYAHUgyaBicOEDFKqI91s2rt\nwfv7edEq1zRX6W9fwD70g2R7hhSfw0LqeiIUwzGQPCkuQE/r/sYOfrSLEcASgW/A\nx8F73lsOzYQDXRrslo7LCfD5iH/N6R8b1cHG2yp6xxxZBsY5T/yHPCeuI0c0OE2f\nQIg806eZIVvVPf9WDuGt6w==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-424sr@instant-message-fbe8f.iam.gserviceaccount.com",
  "client_id": "108822733158532717289",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-424sr%40instant-message-fbe8f.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
),
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
