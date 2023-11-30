import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function AddProducts() {
    const [productName, setproductName]= useState('');
    const [productId, setproductId] = useState('');
    const [prize, setprize] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const body = { productName: productName,productId: productId, prize: prize };
  
      try {
        const response = await axios.post('http://localhost:3001/products/addProduct', body); 
        console.log(response);
        if (response.data) {
          router.push('/tshirts'); 
        } else {
          alert('product cant add ! please try again');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
              Product ID
            </label>
            <input
              type="text"
              id="productId"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={productId}
              onChange={(e) => setproductId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prize" className="block text-sm font-medium text-gray-700">
              Prize
            </label>
            <input
              type="text"
              id="prize"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={prize}
              onChange={(e) => setprize(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-indigo-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

