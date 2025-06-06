// Simulate login/logout with a simple variable
let isAuthenticated = false;

export const login = () => (isAuthenticated = true);
export const logout = () => (isAuthenticated = false);
export const isLoggedIn = () => isAuthenticated;
