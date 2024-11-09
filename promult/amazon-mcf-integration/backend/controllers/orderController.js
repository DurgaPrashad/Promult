const mcfApi = require("../config/amazonMcfConfig");

// Controller function to create an order
exports.createOrder = async (req, res) => {
  try {
    // Extract order data from the request body
    const orderData = req.body;
    
    // Make a POST request to the Amazon MCF API to create a new order
    const response = await mcfApi.post("/orders", orderData);
    
    // Send the response data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Handle any errors that occur during the API request
    res.status(500).json({ message: "Failed to create order" });
  }
};