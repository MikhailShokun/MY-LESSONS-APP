import {initializeApp} from "firebase/app";
import {
    getAuth, GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBl4AnR-vUmr0uHclsA2ls-dKg9Vb9nsG0",
    authDomain: "my-lessons-app.firebaseapp.com",
    projectId: "my-lessons-app",
    storageBucket: "my-lessons-app.appspot.com",
    messagingSenderId: "731092792993",
    appId: "1:731092792993:web:dc8eb02cf80fc65157a2e0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const User = () => {
    onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        return currentUser
    })
}

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        // console.log(result);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        window.location.pathname = "/lessons";
    }).catch((error) => {
        console.log(error.message)
    })
};

export const RegisterWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // const emailRegister = user.email;
            // localStorage.setItem("emailRegister", emailRegister);
            const email = user.email;
            localStorage.setItem("email", email);
            window.location.pathname = "/lessons";
        })
        .catch((error) => {
            console.log(error.message)
        });
};

export const LoginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // const emailLogin = user.email;
            // localStorage.setItem("emailLogin", emailLogin);
            const email = user.email;
            localStorage.setItem("email", email);
            window.location.pathname = "/lessons";
            // console.log(user)
        })
        .catch((error) => {
            console.log(error.message)
        });
};

export const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear()
        window.location.pathname = "/"
    })
}