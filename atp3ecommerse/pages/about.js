import React from 'react';
import Link from 'next/link';

export const About = () => {
  return (
    
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">About Our Store</h2>
        <p className="text-gray-600 mb-6">Welcome to [Your E-commerce Store Name]! We're thrilled to have you here.</p>
      
        <h3 className="text-lg font-semibold mb-3">Our Story</h3>
        <p className="text-gray-600 mb-6">Founded in [Year], we started [Your E-commerce Store Name] with a passion for providing high-quality products...</p>

        <h3 className="text-lg font-semibold mb-3">Our Values</h3>
        <p className="text-gray-600 mb-4">At [Your E-commerce Store Name], we are committed to...</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-gray-600">Quality: We believe in offering only the best products to our customers.</li>
          <li className="text-gray-600">Customer Satisfaction: Your happiness is our priority. We strive to exceed your expectations.</li>
          <li className="text-gray-600">Innovation: We continuously seek new and exciting products to enhance your shopping experience.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-3">Our Team</h3>
        <p className="text-gray-600 mb-4">We're a dedicated team of individuals who love what we do:</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-gray-600">Emily Johnson - Founder & CEO</li>
          <li className="text-gray-600">David Williams - Chief Marketing Officer</li>
          <li className="text-gray-600">Sophia Brown - Head of Customer Support</li>
          {/* Add more team members here */}
        </ul>

        <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
        <p className="text-gray-600 mb-4">If you have any questions, concerns, or suggestions, please don't hesitate to get in touch:</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-gray-600">Email: support@example.com</li>
          <li className="text-gray-600">Phone: (123) 456-7890</li>
          <li className="text-gray-600">Address: 5678 Commerce Street, City, Country</li>
        </ul>

        <p className="text-gray-600 mb-2">Connect with us on social media:</p>
        <div className="social-links">
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-blue-500 mr-2"></i>
          </a>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-blue-500 mr-2"></i>
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-pink-500 mr-2"></i>
          </a>
        </div>
      </div>
      <div>
    <Link href="http://localhost:3000/">Back</Link>
    </div>
    </div>
    
  );
}

export default About;
