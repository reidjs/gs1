<template>
<div>
      <Header :breadcrumbs="breadcrumbs" />
  <div
    class="
      min-h-screen
      bg-gray-50
      flex flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
    "
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div v-if="checked">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input
                v-model="name"
                type="text"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>
          <div v-if="checked">
            <label for="photo" class="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <div class="mt-1">
              <input
                name="photo"
                v-model="photoURL"
                type="text"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="checked"
                name="remember-me"
                type="checkbox"
                class="
                  h-4
                  w-4
                  text-indigo-600
                  focus:ring-indigo-500
                  border-gray-300
                  rounded
                "
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                New Account
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Sign in
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Or continue with Google
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-3" @click="signInWithGoogle">
            <div>
              <a
                href="#"
                class="
                  w-full
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
              >
                <span class="sr-only">Sign in with Google</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8088 9.2025C17.8088 8.61 17.7563 8.0475 17.6663 7.5H9.19125V10.8825H14.0438C13.8263 11.9925 13.1888 12.93 12.2438 13.5675V15.8175H15.1388C16.8338 14.25 17.8088 11.94 17.8088 9.2025Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.19124 18C11.6212 18 13.6537 17.19 15.1387 15.8175L12.2437 13.5675C11.4337 14.1075 10.4062 14.4375 9.19124 14.4375C6.84374 14.4375 4.85624 12.855 4.14374 10.7175H1.15874V13.035C2.63624 15.975 5.67374 18 9.19124 18Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.14375 10.7175C3.95625 10.1775 3.85875 9.59996 3.85875 8.99996C3.85875 8.39996 3.96375 7.82247 4.14375 7.28247V4.96497H1.15875C0.543753 6.17997 0.191254 7.54496 0.191254 8.99996C0.191254 10.455 0.543753 11.82 1.15875 13.035L4.14375 10.7175Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.19124 3.5625C10.5187 3.5625 11.7037 4.02 12.6412 4.9125L15.2062 2.3475C13.6537 0.892501 11.6212 0 9.19124 0C5.67374 0 2.63624 2.025 1.15874 4.965L4.14374 7.2825C4.85624 5.145 6.84374 3.5625 9.19124 3.5625Z"
                    fill="#EA4335"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import Login2 from "./Login2.vue"

const defaultDisplayName = "Bob Smith"
const defaultPhotoURL =
  "https://lh3.googleusercontent.com/a-/AOh14GiZC4GJIdB-hQudPwFBW8KOmlAqb1l-nbZZ6Ns6=s96-c"

const breadcrumbs = [
  {
    label: "Login",
  },
]

export default {
    components: { Header},
    inject: ["db"],
  data() {
    return {
      breadcrumbs,
      email: "",
      password: "",
      photoURL: "",
      name: "",
      error: "",
      checked: false
    }
  },
  methods: {
    addUserInformationToFirebase({ uid, displayName, email, photoURL }) {
      const userRef = ref(this.db, "users/" + uid)
      console.log("userRef", userRef)
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
          onValue(userRef, (snapshot) => {
            if (snapshot.val()) {
              const { displayName, email, photoURL, uid } = snapshot.val()
              this.addUserToVuex({ uid, displayName, email, photoURL })
            }
          })
          this.$router.back()
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
          this.$router.back()
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
          console.log("user", user)
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
          console.log("error with google signin", error)
          // ...
        })
    },
  },

}
</script>