import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInAnonymously,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, googleProvider } from './firebase-config.js';

export const authService = {
    async loginWithGoogle() {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userId', user.uid);
            return user;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    },

    async signUpWithEmail(email, password, name) {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            if (name) {
                await updateProfile(result.user, { displayName: name });
            }
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userId', result.user.uid);
            return result.user;
        } catch (error) {
            console.error("Email Sign-Up Error:", error);
            throw error;
        }
    },

    async loginWithEmail(email, password) {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userId', result.user.uid);
            return result.user;
        } catch (error) {
            console.error("Email Sign-In Error:", error);
            throw error;
        }
    },

    async loginAnonymously() {
        try {
            const result = await signInAnonymously(auth);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userId', result.user.uid);
            return result.user;
        } catch (error) {
            console.error("Anonymous Sign-In Error:", error);
            throw error;
        }
    },

    async logout() {
        try {
            await signOut(auth);
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userId');
            window.location.href = '/index.html';
        } catch (error) {
            console.error("Logout failed:", error);
        }
    },

    onAuthChange(callback) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userId', user.uid);
            } else {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('userId');
            }
            callback(user);
        });
    },

    getCurrentUser() {
        return auth.currentUser;
    },

    isLoggedIn() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    }
};

// Expose to global window for non-module scripts
if (typeof window !== 'undefined') {
    window.authService = authService;
}
