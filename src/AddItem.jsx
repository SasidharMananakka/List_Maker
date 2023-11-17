// AddItem.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Items');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async () => {
    if (itemName.trim() !== '') {
      // Call the onAddItem prop to update the state in the parent component (NutritionMeter.jsx)
      onAddItem(itemName);

      // Reset the input field
      setItemName('');

      // Add the new item directly to the JSON file using json-server
      const response = await fetch('http://localhost:3000/Items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName, id: Date.now() }),
      });

      if (!response.ok) {
        console.error('Failed to add item to JSON file.');
      }

      // Update the local state to include the new item
      setItems([...items, { name: itemName, id: Date.now() }]);
    } else {
      // Handle validation or show a warning to the user
      console.error('Item name cannot be empty.');
    }
  };

  const handleDeleteItem = async (itemId) => {
    // Delete the item from the JSON file using json-server
    const response = await fetch(`http://localhost:3000/Items/${itemId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete item from JSON file.');
    }

    // Update the local state to remove the deleted item
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">List Maker</h1>

      <div className="card p-4 rounded-md shadow-md border-2 border-blue-400">
        <h2 className="text-lg font-semibold text-gray-800">Add New Item</h2>
        <label className="mt-3 block text-sm font-medium text-gray-700">Item Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleAddItem} className="mt-3 bg-blue-500 text-white p-2 rounded-md">
          Add Item
        </button>
      </div>

      {/* Display the list of items */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Item List</h2>
        {items.map((item) => (
          <div key={item.id} className="mt-2 bg-white p-2 rounded-md shadow-md border-2 border-blue-400">
            <span>{item.name}</span>
            <button onClick={() => handleDeleteItem(item.id)} className="ml-2 bg-red-500 text-white p-2 rounded-md">
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Back to main page link */}
      <Link to="/" className="block mt-4 text-blue-500 text-sm">
        Back to Main Page
      </Link>
    </div>
  );
};

export default AddItem;
