<template>
  <div>
    <Header :breadcrumbs="breadcrumbs"/>
    <form>
      <div>
        <label>Email</label>
        <br />
        <input />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input type="password" />
      </div>
      <button @click.prevent="signInWithEmail">Submit</button>
    </form>
    <label>Or you can sign in with Google</label>
    <br />

    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Header from "./Header.vue"

const breadcrumbs = [
  {
    urlName: "home",
    label: "Home"
  },
  {
    label: "Login"
  }
]

export default {
  components: { Header },
  data() {
    return {
      breadcrumbs
    }
  },
  methods: {
    signInWithEmail() {},
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
          console.log("token, user", token, user)
          this.$store.commit('setUser', user)
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