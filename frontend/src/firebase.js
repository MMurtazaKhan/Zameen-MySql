// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQbWbXwYs1Mb8xyJ2ZcK8NLqT0hh0dmzA",
  authDomain: "zameen-7ecb6.firebaseapp.com",
  projectId: "zameen-7ecb6",
  storageBucket: "zameen-7ecb6.appspot.com",
  messagingSenderId: "136536538680",
  appId: "1:136536538680:web:b779587e423baab31270cd",
  measurementId: "G-0WHXMZW1P1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAdx0uxQAk7mSIQ6E9kKrTrfJbdcIDcJlg",
//   authDomain: "project-images-cbfd5.firebaseapp.com",
//   projectId: "project-images-cbfd5",
//   storageBucket: "project-images-cbfd5.appspot.com",
//   messagingSenderId: "121927279357",
//   appId: "1:121927279357:web:1178a80798e8582b8d9494",
//   measurementId: "G-R03JJ7FLY9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const storage = getStorage(app);