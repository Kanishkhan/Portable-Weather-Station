function simulateData() {

  // Random sensor values like STM32
  let temperature = (Math.random() * 40 + 10).toFixed(1);
  let humidity = (Math.random() * 100).toFixed(1);
  let light = Math.floor(Math.random() * 101);
  let rain = Math.floor(Math.random() * 101);

  // Update UI
  document.getElementById("tempVal").innerText = `${temperature} °C`;
  document.getElementById("humVal").innerText = `${humidity} %`;
  document.getElementById("lightVal").innerText = `${light} %`;
  document.getElementById("rainVal").innerText = `${rain} %`;

  // Rain status logic — copied from STM32 code
  let rainStatus = "";
  if (rain < 20) rainStatus = "HEAVY RAIN";
  else if (rain < 40) rainStatus = "LIGHT RAIN";
  else if (rain < 70) rainStatus = "DRIZZLE";
  else rainStatus = "CLEAR SKY";

  document.getElementById("rainStatus").innerText = rainStatus;

  // Buzzer logic — ON only if rain < 40
  if (rain < 40) 
    document.getElementById("buzzerMode").innerText = "ON";
  else
    document.getElementById("buzzerMode").innerText = "OFF";
}
