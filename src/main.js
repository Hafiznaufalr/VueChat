import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");
var config = {
 
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
