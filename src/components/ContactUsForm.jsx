import React, { useState } from 'react';

const ContactUsForm = ({ currentContent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage(currentContent.FillAllFields);
      return;
    }

    // Example: Handle form submission logic here
    console.log({ name, email, message });
    setErrorMessage('');
    alert(currentContent.Success);
    
    // Clear form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-md mx-auto mt-52">
      <h2 className="text-2xl font-bold mb-5">{currentContent.ContactUs}</h2>
      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            {currentContent.Name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            {currentContent.Email}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            {currentContent.Message}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {currentContent.ContactUs}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;