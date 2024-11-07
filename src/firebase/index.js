import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ข้อมูลการตั้งค่าจาก Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAgBnkOl2CvQc00lI_1im_UOhIoi2zgV10",
    authDomain: "f-over.firebaseapp.com",
    projectId: "f-over",
    storageBucket: "f-over.firebasestorage.app",
    messagingSenderId: "32926008589",
    appId: "1:32926008589:web:781a85b83aa2c496c45c44"
};

// เริ่มต้น Firebase App
const app = initializeApp(firebaseConfig);

// สร้าง instance ของ auth และ db
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
