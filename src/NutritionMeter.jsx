import React from 'react';
import { Link } from 'react-router-dom';

const NutritionMeter = () => {
  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-4">
          List Maker
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <p className="text-center">
            Welcome to List Maker, your go-to application for effortless list management.
            With a simple and intuitive interface, List Maker empowers you to create, delete, and organize lists seamlessly.
          </p>
          <br />
          <p>
            <strong>Add a New Item:</strong>
            <br />
            - Click on "Add New Item" to navigate to the "Add Item" page.
            <br />
            - Input the name of your new item in the provided text field.
            <br />
            - Click "Add Item" to save your new entry.
          </p>
          <br />
          <p>
            <strong>View and Delete Items:</strong>
            <br />
            - Below the "Add Item" card, you'll find a list of your added items.
            <br />
            - Each item is accompanied by a "Delete" button for easy removal.
          </p>
          <Link
            to="/add-item"
            className="block mx-auto text-center bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Add New Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NutritionMeter;
