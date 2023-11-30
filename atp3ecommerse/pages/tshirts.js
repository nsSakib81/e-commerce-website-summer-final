import axios from 'axios';
import React, { useState } from 'react';

const TShirts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data); // Assuming the response contains an array of products
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
   console.log(products);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">T-Shirts</h2>
        <div className="mt-4">
          <button
            onClick={viewProducts}
            className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-gray-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'View Products'}
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <div className="grid grid-cols-2 gap-4">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 p-4 rounded shadow-md"
              >
                <h4 className="text-lg font-semibold mb-2">{product.productName}</h4>
                <p className="text-gray-700">{product.productId}</p>
                <p className="text-indigo-600 mt-2">${product.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirts;
