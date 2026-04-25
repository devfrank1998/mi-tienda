import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_JS4tIR5CecDCBV0MEidyAfD_5zkIhgo",
  authDomain: "oromercado-72e58.firebaseapp.com",
  projectId: "oromercado-72e58",
  storageBucket: "oromercado-72e58.firebasestorage.app",
  messagingSenderId: "986562255505",
  appId: "1:986562255505:web:6b64fe873ad644e5087d30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);