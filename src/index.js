import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";

var config = {
  apiKey: "AIzaSyCnfYOMDk5RzajNwabgPzK2uFrxFCur3VQ",
  authDomain: "standard-model.firebaseapp.com",
  databaseURL: "https://standard-model.firebaseio.com",
  projectId: "standard-model",
  storageBucket: "standard-model.appspot.com",
  messagingSenderId: "764031235846",
  appId: "1:764031235846:web:ca506ced0a1ffea8d1d087",
  measurementId: "G-7Z14K34BHM",
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
