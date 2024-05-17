import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpdMb_in2bL5mI7VZT-sb4GmYXfpeGMkE",
  authDomain: "adote-o-rs.firebaseapp.com",
  projectId: "adote-o-rs",
  storageBucket: "adote-o-rs.appspot.com",
  messagingSenderId: "885368597970",
  appId: "1:885368597970:web:2197f2f396420607adac0b",
  measurementId: "G-42B6L63Z8L",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
