import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MeteorShower from './MeteorShower';

function Contact({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative flex flex-col items-center p-4 bg-slate-200 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto md:overflow-hidden">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center">Contact Us</div>
        <div className="my-4 text-center">
          <h2 className="text-3xl font-semibold">Who are we?</h2>
          <p className="text-base">
            We are undergraduate students in our fourth year at IIIT Hyderabad. This website is a part of our BTP project under the guidance of Professor R.C. Prasad. We are passionate computer science students and are thrilled to share this website with you. Feel free to contact us for collaborations or freelance work.
          </p>
        </div>
        <div className="flex flex-col items-center my-3 md:flex-row md:justify-evenly p-2">
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[40vh] flex flex-col items-center bg-white rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105">
            <img src="src/assets/yash.png" alt="Yash Shivhare" className="rounded-full w-32 h-32 mb-4" />
            <div className="text-center">
              <p className="font-semibold text-lg">Yash Shivhare</p>
              <p className="text-sm text-gray-500">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://twitter.com/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[40vh] flex flex-col items-center bg-white rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105">
            <img src="src/assets/rayaan.png" alt="Rayaan Khan" className="rounded-full w-32 h-32 mb-4" />
            <div className="text-center">
              <p className="font-semibold text-lg">Rayaan Khan</p>
              <p className="text-sm text-gray-500">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/kimcattrall" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://twitter.com/kimcattrall" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/kimcattrall" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[40vh] flex flex-col items-center bg-white rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105">
            <img src="src/assets/santhoshini.png" alt="Santhoshini Thota" className="rounded-full w-32 h-32 mb-4" />
            <div className="text-center">
              <p className="font-semibold text-lg">Santhoshini Thota</p>
              <p className="text-sm text-gray-500">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://twitter.com/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;