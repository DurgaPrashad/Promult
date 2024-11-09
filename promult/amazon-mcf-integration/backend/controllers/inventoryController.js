const mcfApi = require("../config/amazonMcfConfig");

// Controller function to sync inventory
exports.syncInventory = async (req, res) => {
  try {
    // Make a GET request to the Amazon MCF API to fetch inventory data
    const response = await mcfApi.get("/inventory"); // Example API endpoint
    // Send the fetched data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Handle any errors that occur during the API request
    res.status(500).json({ message: "Failed to sync inventory" });
  }
};