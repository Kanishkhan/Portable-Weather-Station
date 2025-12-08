This project implements a complete and fully functional Weather Monitoring System using the STM32F401 microcontroller. The main objective of the system is to continuously sense and analyze multiple environmental parameters such as temperature, humidity, light intensity, and rainfall, and then display the processed data locally as well as transmit it externally for monitoring and analysis. The program demonstrates the integration of several embedded subsystems including ADC, I2C, UART, SysTick interrupts, GPIO control and peripheral synchronization inside a single real-time application.

The temperature and humidity data is collected using the DHT22 digital sensor. The project includes a dedicated bit-banging communication routine to read raw data packets from the DHT22 sensor, extract the temperature and humidity values, convert them into floating-point measurements and handle possible checksum errors. The light intensity measurement is performed using an LDR module connected to the ADC of the microcontroller, and rainfall is monitored using an analog rain sensor whose output is also digitized via the ADC. The system evaluates the rain sensor reading and converts it into a percentage scale to determine whether the weather condition corresponds to clear, drizzle, light rain, or heavy rain.

All sensor values are displayed in real time on a 16x2 LCD connected via an I2C PCF8574 expander. The LCD acts as the local display unit and is updated every time a fresh data packet is received from the sensors. The program also uses UART communication to continuously send the latest sensor data to an external serial terminal in human-readable format. This allows data logging, remote supervision and external application development without modifying the embedded code.

Periodic sensor reading is controlled by the SysTick timer. The SysTick interrupt ensures that the sensors are sampled every fixed interval (approximately every 3 seconds), allowing the microcontroller to remain responsive and efficient even while waiting for the next sampling cycle. During each cycle, the onboard LED toggles to indicate that a new reading has been taken successfully.

The system also includes a built-in alert mechanism using a buzzer. If the rainfall percentage crosses the risk threshold (indicating heavy rain or light rain), the buzzer is immediately activated to warn the user. The buzzer is automatically silenced when safe weather conditions are detected. In this way, the system operates not only as a monitoring device but also as an autonomous alert and safety system.

Overall, this project demonstrates real-time sensor acquisition, digital and analog signal processing, I2C-based LCD interfacing, UART data transmission, GPIO control, and interrupt-driven execution on the STM32F4 platform. It showcases how multiple environmental sensors can be integrated into a single embedded solution that can operate continuously, update automatically, display live feedback and send the same information to external devices for monitoring and data analysis. The project can be extended for smart agriculture, smart home automation, IoT-based weather tracking, hazard warning systems and environmental data logging applications.


Output (sample)

Weather Station
System Ready

T:  92%  H:  65%
L:  48%  R:  10%


Temp:29.4C Hum:64.7% Light:51% Rain:18% Status:HEAVY RAIN
