const axios = require("axios");

// Create an instance of axios with custom configuration
const mcfApi = axios.create({
  baseURL: "https://mcf.amazon.com", // Base URL for Amazon MCF API
  headers: {
    Authorization: `Bearer ${process.env.MCF_API_TOKEN}`, // Authorization header with token from environment variable
  },
});

// Export the configured axios instance for use in other modules
module.exports = mcfApi;