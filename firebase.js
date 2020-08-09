var app_firebase = {};
(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBSfWVtT-FRCSnLia6blD7x8ByEsObiGSA",
        authDomain: "firstweblogin.firebaseapp.com",
        databaseURL: "https://firstweblogin.firebaseio.com",
        projectId: "firstweblogin",
        storageBucket: "firstweblogin.appspot.com",
        messagingSenderId: "250029204319",
        appId: "1:250029204319:web:b6a7aec07413823af44cea",
        measurementId: "G-JL975DC96Y"
    };
    firebase.initializeApp(firebaseConfig);
    app_firebase = firebase;
})()