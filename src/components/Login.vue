<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <h1>Login with Google</h1>
    <button @click="signInWithGoogle">Login with Google</button>
    <br />
    <div class="mt-4 flex">
      <form class="mr-10">
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <br />
          <input v-model="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input v-model="password" type="password" />
        </div>
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <button @click.prevent="loginWithEmail">Submit</button>
      </form>
      <form class="">
        <h1>Create New Account</h1>
        <div>
          <label>Name</label>
          <br />
          <input v-model="name" type="text" />
        </div>
        <div>
          <label>Photo URL</label>
          <br />
          <input v-model="photoURL" type="text" />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input v-model="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input v-model="password" type="password" />
        </div>
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <button @click.prevent="signUpWithEmail">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { ref, set, push, onValue } from "firebase/database"
import Header from "./Header.vue"

const defaultDisplayName = "Bob Smith"
const defaultPhotoURL = "https://lh3.googleusercontent.com/a-/AOh14GiZC4GJIdB-hQudPwFBW8KOmlAqb1l-nbZZ6Ns6=s96-c"

const breadcrumbs = [
  {
    urlName: "home",
    label: "Home",
  },
  {
    label: "Login",
  },
]

export default {
  components: { Header },
  data() {
    return {
      breadcrumbs,
      email: "",
      password: "",
      photoURL: "",
      name: "",
      error: "",
    }
  },
  methods: {
    addUserInformationToFirebase({ uid, displayName, email, photoURL }) {
      const userRef = ref(this.db, "users/" + uid)
      set(userRef, {
        uid,
        displayName,
        email,
        photoURL,
      })
      this.addUserToVuex({ uid, displayName, email, photoURL })
    },
    addUserToVuex({ uid, displayName, email, photoURL }) {
      if (!displayName) {
        displayName = defaultDisplayName
      }
      if (!photoURL) {
        photoURL = defaultPhotoURL
      }
      this.$store.commit("setUser", { uid, displayName, email, photoURL })

    },
    loginWithEmail() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          const userRef = ref(this.db, "users/" + user.uid)
          onValue(userRef, snapshot => {
            if (snapshot.val()) {
              const { displayName, email, photoURL, uid } = snapshot.val()
              this.addUserToVuex({ uid, displayName, email, photoURL })
            }
          })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          this.error = errorMessage
        })
    },
    signUpWithEmail() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          this.addUserInformationToFirebase({
            uid: user.uid,
            displayName: this.name,
            email: this.email,
            photoURL: this.photoURL,
          })
          console.log("user", user)
          // ...
        })
        .catch((error) => {
          console.log("error", error)
          const errorCode = error.code
          const errorMessage = error.message
          this.error = errorMessage
          // ..
        })
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          this.addUserInformationToFirebase({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
          this.$router.back()
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error)
          console.log("errord", error)
          // ...
        })
    },
  },
}
</script>