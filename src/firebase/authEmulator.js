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
        console.log("success, check local cookies");
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
        console.log(err.message);
    }
    
}

const getToken = async () => {
    const token = await auth.currentUser.getIdToken();
    return token;
}

export default app;

export {
    auth,
    login,
    logout,
    getToken
};
