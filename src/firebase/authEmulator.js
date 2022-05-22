import { default as config } from "../config"
import { initializeApp } from "firebase/app"
import { 
    getAuth, 
    connectAuthEmulator, 
    signInWithEmailAndPassword, 
    signOut,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";


const app = initializeApp(config);
const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

const login = async (email, password) => {
    try {
        await setPersistence(auth, browserSessionPersistence);
        await signInWithEmailAndPassword(auth, email, password);
        return;
    } catch (err) {
        throw new Error(err);
    }
}

const logout = async () => {
    try {
        await signOut(auth);
        return;
    } catch (err) {
        console.log("[!] FATAL: Error on logout");
    }
    
}

const getToken = async () => {
    try {
        const token = await auth.currentUser.getIdToken();
        return token;
    } catch (err) {
        console.log("[-] No user token found (not logged in?)")
    }   
}

const getEmail = async () => {
    try {
        return auth.currentUser.email;
    } catch (err) {
        console.log("[!] FATAL: No email address found")
    }
}

export default app;

export {
    auth,
    login,
    logout,
    getToken,
    getEmail
};