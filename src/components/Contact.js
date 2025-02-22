import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Need Help? <br />Contact Us!</h2>
          <p className="mt-4 text-gray-600">
            We are here to assist you with your food orders, queries, and feedback. Let us know how we can help you have the best experience!
          </p>
          <p className="mt-2 text-gray-600">
            Select the most relevant category and fill out the form to get in touch with us.
          </p>
          <h3 className="mt-6 text-xl font-semibold">How can we assist you?</h3>
          <ul className="mt-2 list-decimal pl-5 text-gray-700">
            <li>Issue with my order</li>
            <li>Payment and refund queries</li>
            <li>Report a missing or incorrect item</li>
            <li>Feedback and suggestions</li>
            <li>Partnership inquiries</li>
            <li>Technical support</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <label className="block font-medium">Select a category</label>
          <select className="w-full p-2 border rounded mt-2">
            <option>Issue with my order</option>
            <option>Payment and refund queries</option>
            <option>Report a missing or incorrect item</option>
            <option>Feedback and suggestions</option>
            <option>Partnership inquiries</option>
            <option>Technical support</option>
            <option>Others</option>
          </select>

          <label className="block mt-4 font-medium">Your Name *</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />

          <label className="block mt-4 font-medium">Your Email *</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />

          <label className="block mt-4 font-medium">Your Message *</label>
          <textarea className="w-full p-2 border rounded h-24" placeholder="Describe your issue"></textarea>

          <label className="block mt-4 font-medium">Upload Screenshot (optional)</label>
          <input type="file" className="w-full p-2 border rounded" />

          <button className="mt-4 bg-red-600 text-white p-2 w-full rounded hover:bg-red-700">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;