import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

export const config = {
  firebaseConfig: {
  apiKey: "AIzaSyCxXRtk4S0qhjtWMNmL31RkcPBxvtsugf4",
  authDomain: "dev-dashboard-9eff0.firebaseapp.com",
  projectId: "dev-dashboard-9eff0",
  storageBucket: "dev-dashboard-9eff0.appspot.com",
  messagingSenderId: "508965551787",
  appId: "1:508965551787:web:94b81878585fe4dceac1ee"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
}
};
