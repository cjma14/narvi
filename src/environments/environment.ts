export const environment = {
    production: false,
    // Use environment variable or fallback to local dev
    apiUrl: import.meta.env.PUBLIC_API_URL || 'http://localhost:6650/api',
};