/**
 * Configuration for the Donau Frontend
 */
const CONFIG = {
    // This would ideally be set via an environment variable or build process
    API_BASE_URL: 'http://localhost:3000/api',
    
    // For development, we might want to simulate a delay
    SIMULATE_DELAY: 500
};

// Export if using modules, otherwise it remains in global scope for standard <script> tags
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.DONAU_CONFIG = CONFIG;
}
