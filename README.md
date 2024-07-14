# Historical Capitals

## Project Description

This project is a web application that displays a map with multiple pointers representing historical capitals. On the left side of the interface, there is a Leaflet map, and on the right side, there is a scrollable list containing the names of these capitals. Clicking on any pointer on the map opens a popup with the name of the capital. Similarly, clicking on a capital name in the list opens the corresponding popup on the map and displays detailed information about the capital in a box below the map.

## Features

- Leaflet map integration to display historical capitals.
- Interactive pointers on the map with popups.
- Scrollable list of capitals.
- Synchronization between map pointers and list items.
- Detailed information display for each capital.

## Tech Stack

- React.js: For building the user interface.
- Leaflet: For integrating and displaying the map.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rayaankhan/historic-capitals-india-btp2.git
    cd historic-capitals-india-btp2
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:

```bash
npm start
# or
yarn start
```

This will start the development server and open the application in your default browser. The app will automatically reload if you make changes to the code.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with the production build of your application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## Acknowledgements

- [Leaflet](https://leafletjs.com/): An open-source JavaScript library for interactive maps.

---