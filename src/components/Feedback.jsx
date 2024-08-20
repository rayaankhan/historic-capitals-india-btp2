import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Feedback({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Load SMTP.js dynamically
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleFeedback = async (e) => {
    e.preventDefault();

    if (!window.Email) {
      setStatus('Failed to load Email service');
      return;
    }

    try {
      window.Email.send({
        Host: 'smtp.gmail.com',
        Username: 'shivhareyash007@gmail.com', // Your Gmail address
        Password: 'hzhl zdgi tqff wfld', // Replace with your Gmail app password
        To: 'r.shashigupta@gmail.com', // Replace with recipient email address
        From: email,
        Subject: 'Feedback from Website',
        Body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      })
      .then((message) => {
        setStatus('Feedback sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
        setStatus('Error sending feedback');
      });
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus('Error sending feedback');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative flex flex-col items-center p-4 bg-slate-200 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto md:overflow-hidden">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center">Feedback</div>
        <form
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleFeedback}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Feedback
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
}

export default Feedback;
