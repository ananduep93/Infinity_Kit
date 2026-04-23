import { authService } from './auth.js';
import { syncService } from './sync.js';

export const authUI = {
    updateNavbar() {
        const navLinksContainer = document.querySelector('.nav-links');
        const navRight = document.getElementById('navRight');
        
        if (!navLinksContainer || !navRight) return;

        // Remove existing auth buttons to avoid duplicates
        const existingAuthButtons = navLinksContainer.querySelectorAll('.auth-nav-link');
        existingAuthButtons.forEach(btn => btn.remove());

        const isLoggedIn = authService.isLoggedIn();

        if (isLoggedIn) {
            // Show Logout
            const logoutBtn = document.createElement('a');
            logoutBtn.href = '#';
            logoutBtn.className = 'auth-nav-link logout-link';
            logoutBtn.innerHTML = '<span>Logout</span>';
            logoutBtn.onclick = (e) => {
                e.preventDefault();
                authService.logout();
            };
            navLinksContainer.appendChild(logoutBtn);
        } else {
            // Show Sign In & Sign Up
            const signInBtn = document.createElement('a');
            signInBtn.href = 'signin.html';
            signInBtn.className = 'auth-nav-link';
            signInBtn.textContent = 'Sign In';
            
            const signUpBtn = document.createElement('a');
            signUpBtn.href = 'signup.html';
            signUpBtn.className = 'auth-nav-link';
            signUpBtn.textContent = 'Sign Up';

            navLinksContainer.appendChild(signInBtn);
            navLinksContainer.appendChild(signUpBtn);
        }
    },

    init() {
        authService.onAuthChange((user) => {
            this.updateNavbar();
            
            if (user) {
                console.log("User logged in, syncing data...");
                if (window.syncService) {
                    window.syncService.syncCloudToLocal();
                }
                window.dispatchEvent(new CustomEvent('authChanged', { detail: { user } }));
            }
        });
    }
};

// Auto-init if we're in a browser environment
if (typeof window !== 'undefined') {
    authUI.init();
}
