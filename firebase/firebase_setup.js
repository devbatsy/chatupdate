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
  "private_key_id": "1ca830be47d7c4d3df811e703ca3ef33c949ce59",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCnJZs2/T8unFAP\n4wXbqE1gV4mrgI0t6mKConWOjCWfDLGTIU0+MEvO2J9mSly0xbbkUa3moJE36ILh\nEYkFdTkzQTg1yyA4VjZBirpkCdoEigOapgxKMISgY+Y5NPZi3cXLz0EsyAIdDqMS\neqqrdE8+i4wYq0oxwNOjD1tiTqZO8CKLweSQX50hLq/X2oiHuR5GdyGcU0rX/fxR\nMxrQzqLAEi+z8ZiekjEbnraM/u3rPiUu55HFmHMafmxX9oHFq0qo4SJfg3xcfFp8\nDFRpje7vyIzQgfG44Gvkv0kt9yX6OvvjLwogWhbL/zy6vyXDiTWrC16IqLDN2ql4\nOcJ6Np3dAgMBAAECggEACZFUGO9L+FJPcpVbdBHRJLhmDkM3HEomy5UFQdILuOwR\nrHBzJYyUrk6v6HujDQr7QjGwZhD0txH6ueuWdRGbIwVdnxX/7mb1nJtWZNxmgSzY\nR3gv9b2LaKCcoKjY3gW//n+1hUdz+C9VY3z85isWen1OQ+mRf0HAgOc5DdUe3R+h\n2SdifCrT/H+JV5fojQKF//IieJRW+7F6I0pEIL+F0zIhCM2I+5ix12uSVHpSmC/d\nTytMkm2MpDvQ5osfFRK+V73/XmgWkkctrrDfQSjd9uG/wGMcG9Y+JTtc+b2ARNiA\nYQmH2tS2aspFSUDz77abkaNr9k6dXDXSy3ngXbM7qQKBgQDjz5Nstv4GNjR8OrG0\nE0gWyfJQqOPYH+IY2Bf8wZC4iNWJ6P41aj4MDeqgsnUS7Tj85v0JkmppqxmM8E5O\nd7IPGlWUAMODX2IWcRG2OQp97/8j0WeEgJivavGkD0hmwwbTkPWjGhHBE/0fUfCA\nrdKqy+rjBBbEy2dMqoLWoXHzOQKBgQC71FzZ4o+c+v1aAfIP+8lcWJYkyYxgw42p\n0GR/wEbgvmnzFf5wqtV8+tFq5T9h9Hx8+KQqN3tq0vF9rS5+3jrIo+ApXPM8ATJy\n0c5z5pbBqPPl5vMhrNWcOOrArSpdW3d5IgBKzKAzZ6FjvFRA0950m7eG3rpgmYX/\nY8mM6asLxQKBgQDSyBch+dbkLHc3kp8lfMmwvD3GP95A9I8gaaEYLokXFRRvO/Mp\nvRmX0bCL61LDplaaOadamex3xOYpL5dkpv9LVhRkkqhT/4ckOI4oynJYwByUKYbc\nZJfhhtP59mIJIt5IFtIQjWhr+3Cy7//VL//CJFc6oWfnwkPb/dB9gneKkQKBgQC3\nzYRfIznuIB60aZr60SWm3Hlw3lokhrimKGtwKDQz0aHUYv1uO35WowszU8rGjH0V\nvirHtStsyafPmB0bwVQ860B8uZy8Z196xJ0HBesY78Bchbf+iCcwjPIMQmhmmw86\n1m76w2sxYoOoGa9JEQtriMX7kRFJXnKmDHw7DJ55EQKBgQCkhS72qhsWZkLTXAy5\n5QDEsjT34tmHV6GwFlPWlFHxFuGltPMuEYMgoTBueGM0LK+wzs1wa54ZT4o1zhJ5\n5HWFwGapL3VrEwsgEqmKTbNWOOOSgzS20MMvhUJ56TZ4CRE1ViS9OhgIKZTYA9Sx\niTcjY1xBBUlxhyLa6HoWpyYuww==\n-----END PRIVATE KEY-----\n",
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
