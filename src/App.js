// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NutritionMeter from './NutritionMeter';
import AddItem from './AddItem';

function App() {
  const [nutritionItems, setNutritionItems] = useState([]);

  const handleAddItem = (itemName) => {
    // Your logic to add the new item to the JSON file and update the state
    const newItem = {
      name: itemName,
      // Add other properties as needed
    };

    // Update the state with the new item
    setNutritionItems([...nutritionItems, newItem]);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<NutritionMeter nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} />}
          />
          <Route path="/add-item" element={<AddItem onAddItem={handleAddItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
