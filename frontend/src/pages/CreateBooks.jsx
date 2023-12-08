import React from "react";

const CreateBooks = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label
          htmlFor="field1"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Field 1
        </label>
        <input
          type="text"
          id="field1"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="field2"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Field 2
        </label>
        <input
          type="text"
          id="field2"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="field3"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Field 3
        </label>
        <input
          type="text"
          id="field3"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default CreateBooks;
