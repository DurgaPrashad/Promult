// frontend/src/App.js

// Import required modules
import React from "react";
import InventorySync from "./components/InventorySync";
import OrderManager from "./components/OrderManager";
import FulfillmentCheck from "./components/FulfillmentCheck";

// Main App component
function App() {
  return (
    <div className="App">
      <header>
        <h1>Amazon MCF Integration Platform</h1>
      </header>
      <main>
        <InventorySync />
        <OrderManager />
        <FulfillmentCheck />
      </main>
    </div>
  );
}

export default App;