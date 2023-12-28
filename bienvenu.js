// Initialize Firebase with configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// Access Firestore and Authentication services
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign In function
const signIn = () => {
  // Get user input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Attempt to sign in using Firebase Auth
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Successfully signed in
      // Redirect to a new page or perform other actions
      window.location.href = "plan2.html";
      console.log(result);
    })
    .catch((error) => {
      // Handle sign-in errors
      console.log(error.code);
      console.log(error.message);
    });
}
