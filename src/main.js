import { createApp } from 'vue'
import { createStore } from 'vuex'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import router from "./router/index"
import "./index.css"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PRODUCT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};



const store = createStore({
  state () {
    return {
      products: {},
      notification: null,
      user: null 
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    notification (state) {
      return state.notification
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setNotification(state, notification) {
      state.notification = notification
    },
    clearNotification(state) {
      state.notification = null
    }
  }
})


try {
  initializeApp(firebaseConfig)
} catch(e) {
  console.error(e)
}

createApp(App).use(router).use(store).mount('#app')
