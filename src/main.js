import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyDNtzxh7aiegFVdp9rLgn2WXnlu6MAhCQw",
  authDomain: "petsin-245f5.firebaseapp.com",
  databaseURL: "https://petsin-245f5.firebaseio.com",
  projectId: "petsin-245f5",
  storageBucket: "petsin-245f5.appspot.com",
  messagingSenderId: "946473095361"
};
firebase.initializeApp(config);

var db = firebase.firestore();
window.db= db;

//disable deprecated
db.settings({
  timestampsInSnapshots: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
