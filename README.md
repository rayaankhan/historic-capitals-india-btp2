# Historical Capitals of India

## Project Overview - [Link](https://historicalindiancities.netlify.app/)

**Historical Capitals** is an engaging web application designed to explore the history of ancient capitals through an interactive map-based interface. Users can delve into historical data via a dynamic Leaflet map on the left side of the screen, while a scrollable list of capitals is available on the right. The application provides a seamless experience: clicking a map marker opens a popup with the capital's name, and selecting a capital from the list highlights its marker on the map and shows detailed information below. The app also features a chatbot powered by a fine-tuned Gemini-1.5-flash LLM and a feedback form with automated email acknowledgment.

## Key Features

- **Interactive Map:** Explore historical capitals through a Leaflet map with interactive markers.
- **Synchronized List and Map:** Seamless interaction between the map markers and the list of capitals.
- **Detailed Information Display:** Detailed historical information about each capital displayed below the map.
- **Chatbot Interface:** Advanced AI-driven chatbot for user queries, powered by Gemini API and LangChain.
- **Feedback Mechanism:** Automated email response system for user feedback.

## Technology Stack

### Frontend
- **[React.js](https://react.dev/):** A JavaScript library for building interactive user interfaces with efficient rendering and component-based architecture.

### Backend
- **[Node.js](https://nodejs.org/en/):** A scalable JavaScript runtime for server-side applications, known for its performance and efficiency.
- **[Express.js](https://expressjs.com/):** Express.js is a popular Node.js web framework that provides a robust foundation for building scalable and efficient web applications.
- **[Flask](https://flask.palletsprojects.com/en/3.0.x/):** A minimalist Python web framework for developing web applications with ease.

### Mapping
- **[Leaflet](https://leafletjs.com/):** An open-source library for creating interactive maps, ideal for visualizing geographical data.

### Email Service
- **[SMTP](https://www.smtp.com/resources/api-documentation/):** Standard protocol for sending emails, used for automating feedback acknowledgments.

### Chatbot
- **[Gemini API](https://ai.google.dev/):** Google’s advanced language and multimodal AI models for intelligent user interactions.
- **[LangChain](https://www.langchain.com/):** Framework for integrating large language models into applications, offering tools for prompt engineering and model management.
- **[Gunicorn](https://gunicorn.org/):** Gunicorn is a popular Python WSGI HTTP server that efficiently handles multiple web requests simultaneously.

## Getting Started

### Prerequisites

- **Python 3.x**: Ensure Python 3 is installed on your device.
- **Node.js**: Ensure Node.js is installed for running the frontend.
- **Flask**: Ensure Flask is installed for the backend API.

### Installation Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/rayaankhan/historic-capitals-india-btp2.git
    cd historic-capitals-india-btp2
    ```

2. **Setup and Run the Backend Server:**
   - **Feedback Server:**
   ```bash
   cd backend
   node index.js
   ```
   - **Chatbot API:**
   ```bash
   cd backend/chatbot
   pip3 install -r requirements.txt
   python3 chatbot.py
   ```

3. **Setup and Run the Frontend:**
   ```bash
   npm install
   npm run dev
   ```

## Contributing

We welcome contributions to enhance this project. To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and test them.
4. Submit a pull request with a detailed description of your changes.

## Contributors

- **[Rayaan Khan](https://github.com/rayaankhan)**
- **[Yash Shivhare](https://github.com/YashShivhare007)**
- **[Santhoshini Thota](https://github.com/santhoshinithota)**

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.

## Contact

For any inquiries or feedback, please contact us at [rayaan.khan@students.iiit.ac.in](mailto:rayaan.khan@students.iiit.ac.in).
