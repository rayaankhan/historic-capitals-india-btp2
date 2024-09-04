# Historical Capitals

## Project Overview

**Historical Capitals** is an interactive web application designed to showcase the rich history of ancient capitals through an engaging, map-based interface. Users can explore historical capitals via a dynamic Leaflet map on the left side of the screen, while a scrollable list of these capitals is available on the right. Interaction is seamless: clicking on any map marker triggers a popup with the capital's name, while selecting a capital from the list brings up its corresponding map marker and displays detailed information below the map. Additionally, the application features a chatbot interface powered by a fine-tuned Gemini-pro-1.5 LLM and a feedback form that automatically sends a confirmation email to users.

## Key Features

- **Interactive Map**: A Leaflet map displays markers representing historical capitals, enhancing user engagement through visual exploration.
- **Synchronized List and Map**: Users can click on either map markers or list items to see the corresponding details, ensuring a cohesive browsing experience.
- **Detailed Information Display**: Detailed historical information about each capital is shown below the map upon selection.
- **Chatbot Interface**: A chatbot powered by a fine-tuned Gemini-pro-1.5 LLM assists users with inquiries related to the site’s content.
- **Feedback Mechanism**: A feedback form allows users to provide suggestions, with an automated email response system in place for acknowledgment.

## Technology Stack

### Frontend
- **[React.js](https://react.dev/)**: A powerful JavaScript library for building interactive user interfaces with a component-based architecture. It allows for dynamic rendering and efficient updates.

### Backend
- **[Node.js](https://nodejs.org/en/)**: A high-performance JavaScript runtime built on Chrome's V8 engine, ideal for scalable server-side applications.
- **[Flask](https://flask.palletsprojects.com/en/3.0.x/)**: A minimalist Python web framework that simplifies the development of web applications with a straightforward approach.

### Mapping
- **[Leaflet](https://leafletjs.com/)**: An open-source JavaScript library for creating interactive maps. It provides an easy way to visualize and interact with geographical data, making it perfect for displaying historical capitals.

### Email Service
- **[SMTP](https://www.smtp.com/resources/api-documentation/)**: The standard protocol for sending emails over the internet, used here to automate the process of sending feedback acknowledgments to users.

### Chatbot
- **[Gemini API](https://ai.google.dev/)**: Google’s cutting-edge AI technology for natural language understanding and generation, enhancing user interaction through intelligent responses.
- **[LangChain](https://www.langchain.com/)**: A framework designed to simplify the integration of large language models into applications, offering tools for prompt engineering, data integration, and model management.

## Getting Started

### Prerequisites

Ensure that Python-3, Node JS, Flask is installed on your device

### Installation Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/rayaankhan/historic-capitals-india-btp2.git
    cd historic-capitals-india-btp2
    ```

2. **Running the Backend Server:**
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

3. **Running the Frontend:**
   ```bash
   npm install
   npm run dev
   ```

## Contribution Guidelines

We welcome contributions to enhance the project. If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

---