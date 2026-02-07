# 🌦 Smart Weather Monitoring System

## Overview
The **Smart Weather Monitoring System** is a web-based dashboard designed to visualize real-time weather data from a portable weather station. It displays key environmental metrics such as temperature, humidity, light intensity, and rain levels in an intuitive and visually appealing interface.

Currently, the project verifies the UI and logic using a **simulation mode**, which generates random sensor values to demonstrate the dashboard's capabilities without simulated hardware.

## Features
- **Real-Time Data Display**: Visualizes Temperature, Humidity, Light Intensity, and Rain Level.
- **Dynamic Status Indicators**:
    - **Rain Status**: automatically categorized as "Heavy Rain", "Light Rain", "Drizzle", or "Clear Sky" based on sensor values.
    - **Buzzer Alert**: Visual indicator for the buzzer status (ON/OFF) based on rain thresholds.
- **Interactive Simulation**: A "Simulate Sensor Readings" button allows users to test the dashboard response with randomized data.
- **Responsive Design**: Modern, glassmorphism-inspired UI that works on various screen sizes.

## Technologies Used
- **HTML5**: For semantic structure.
- **CSS3**: For styling, including gradients, glassmorphism effects, and responsive grid layout.
- **JavaScript**: For DOM manipulation and data simulation logic.

## Setup & Usage
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Kanishkhan/Portable-Weather-Station.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd Portable-Weather-Station
    ```
3.  **Open `index.html`**:
    Simply open the `index.html` file in your preferred web browser.

## Project Structure
```
Portable-Weather-Station/
├── index.html   # Main HTML structure
├── style.css    # Styling and layout
├── script.js    # Logic for data simulation and UI updates
└── README.md    # Project documentation
```

## Future Improvements
- Integration with actual hardware sensors (e.g., STM32, ESP32).
- Historical data logging and graphing.
- Cloud connectivity for remote monitoring.

---
*Created by [Kanishkhan](https://github.com/Kanishkhan)*
