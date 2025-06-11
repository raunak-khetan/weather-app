# 🌦️ Weather App – SWC Club Project

A responsive weather application built using **HTML**, **CSS**, and **JavaScript**. This project fetches real-time weather data using the **WeatherAPI** and integrates features such as **Dark Mode**, **Temperature Unit Conversion**, **Current Location Detection**, and **Mobile Responsiveness**.

---

## 🚀 Features

### 🌍 1. **Current Location Weather Fetch**
- On page load, the app uses the **Geolocation API** to automatically detect the user's current city.
- Fetches and displays real-time weather data for the detected location.
- Users can also manually search for any city.

---

### 🌡️ 2. **Temperature Conversion (°C ⇄ °F)**
- Toggle between **Celsius (°C)** and **Fahrenheit (°F)** using the **“Convert to °F”** or **“Convert to °C”** button.
- Seamlessly updates temperature without reloading the data.

---

### 🌓 3. **Dark Mode Toggle**
- Switch between **Light** and **Dark Mode** using the **“Dark Mode”** button.
- Applies to the entire app including:
  - Navigation bar
  - Search input
  - Location button
  - Weather data and icons

---

### 📱 4. **Mobile-Responsive Design**
- Fully responsive layout optimized for:
  - **Desktops**
  - **Tablets**
  - **Mobile Phones**
- Features a **hamburger menu** in mobile view for toggling unit conversion and dark mode.
- Icons and text resize gracefully for smaller screens.

---

### ☁️ 5. **Real-time Weather Information**
- Displays:
  - City and Country
  - Temperature
  - Weather Condition (with icon)
  - Humidity
  - Wind Speed
  - Atmospheric Pressure

---

## 🔧 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Weather API** from [weatherapi.com](https://weatherapi.com)
- **Geolocation API**
- **Responsive Design** using media queries

---

## 📁 Project Structure

```plaintext
├── index.html        # Main HTML structure
├── style.css         # Styling and responsive layout
├── script.js         # Weather logic and UI interactivity
├── icons/            # Weather and UI icons
