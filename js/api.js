/**
 * Donau API Service
 * 
 * This service handles all communication between the frontend and the backend API.
 * Currently, it uses mock responses to simulate backend behavior.
 */

const ApiService = {
    baseUrl: window.DONAU_CONFIG ? window.DONAU_CONFIG.API_BASE_URL : 'http://localhost:3000/api',

    async _request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                // Authorization header would be added here if a token exists
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        const config = { ...defaultOptions, ...options };

        if (window.DONAU_CONFIG && window.DONAU_CONFIG.SIMULATE_DELAY) {
            await new Promise(resolve => setTimeout(resolve, window.DONAU_CONFIG.SIMULATE_DELAY));
        }

        try {
            // For now, we simulate the fetch call since no backend exists
            console.log(`[API MOCK] ${config.method || 'GET'} to ${url}`, config.body);
            
            // In a real implementation, you would use:
            // const response = await fetch(url, config);
            // if (!response.ok) throw new Error('API request failed');
            // return await response.json();

            // Mock success response
            return { success: true, message: "Request successful (mocked)" };
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // Authentication
    async login(email, password) {
        return this._request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    async signup(companyName, email, password) {
        return this._request('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ companyName, email, password })
        });
    },

    // Contact
    async sendContact(name, email, message) {
        return this._request('/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email, message })
        });
    },

    // Briefs
    async getBriefs() {
        return this._request('/briefs', {
            method: 'GET'
        });
    },

    async getBriefById(id) {
        return this._request(`/briefs/${id}`, {
            method: 'GET'
        });
    }
};

// Export if using modules, otherwise it remains in global scope
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ApiService;
} else {
    window.DONAU_API = ApiService;
}
