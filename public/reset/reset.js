import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyD-21i_c71ZztSOOAVHg2Y2REK3031UzGM",
    authDomain: "wishlist-website-b0f92.firebaseapp.com",
    databaseURL: "https://wishlist-website-b0f92-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wishlist-website-b0f92",
    storageBucket: "wishlist-website-b0f92.appspot.com",
    messagingSenderId: "1075962776143",
    appId: "1:1075962776143:web:a9f688ac1125c7edfcf83a",
    measurementId: "G-04H8TLJ8EK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const resetPassword = async () => {

    const loginEmail = document.getElementById('login-email').value;

    try {
        const userCredential = await sendPasswordResetEmail(auth, loginEmail);
        
    }catch (error){
        console.error("An Error Occured", error);
    }
}


document.getElementById('login_btn').addEventListener("click", resetPassword);