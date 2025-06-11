// Options for the geolocation API request headers
const locoptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8f9d98bd0dmshee6a5bc23d5fb40p15e5b4jsn8b79c246f9af",
    "x-rapidapi-host": "geocodeapi.p.rapidapi.com",
  },
};

// Automatically fetch current location on window load
window.onload = () => {
  currentlocation();
};

// Fetch city name using latitude and longitude
async function fetchlocation(lat, lon) {
  const url = `https://geocodeapi.p.rapidapi.com/GetLargestCities?latitude=${lat}&longitude=${lon}&range=50000`;
  try {
    const response = await fetch(url, locoptions);
    const result = await response.json();

    // Return first city's name if available
    if (Array.isArray(result)) {
      return result[0].City;
    } else if (result.City) {
      return result.City;
    } else {
      alert("City not found");
      return "City Not Found";
    }
  } catch (error) {
    console.error(error);
    return "Error";
  }
}

// Get current location using browser's geolocation API
async function currentlocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const city = await fetchlocation(lat, lon);
      
      // Autofill the input with current city and fetch weather
      const input = document.querySelector(".search-bar");
      if (input) {
        input.value = city;
        weatherreport(city);
      }
    },
    (error) => {
      console.warn("Browser location failed:", error);
    }
  );
}

// Attach click event to "Current Location" button
document.getElementById("get-location").addEventListener("click", currentlocation);

// Weather API request headers
const weatheroptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8f9d98bd0dmshee6a5bc23d5fb40p15e5b4jsn8b79c246f9af",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

// Trigger weather search on search icon click
document.querySelector(".search-icon").addEventListener("click", () => {
  const city = document.querySelector(".search-bar").value;
  weatherreport(city);
});

// Fetch weather data for a given city
async function weatherreport(city) {
  const weatherurl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  
  // Show loading spinner
  document.querySelector(".main-content").innerHTML = "<div class='spinner'></div>";

  try {
    const res = await fetch(weatherurl, weatheroptions);
    const report = await res.json();
    display(report); // Render weather info
  } catch (error) {
    console.error(error);
  }
}

// Display weather info on the page
function display(report) {
  document.querySelector(".main-content").innerHTML =
    `<div>
      <div class="weather-data">
        <img src="icons/geo-alt.svg" class="loc-icon">
        <span class="city">${report.location.name},${report.location.country}</span>
        
        <span class="temperature">${report.current.temp_c}&deg;C</span>
        
       <img src=${report.current.condition.icon} class="weather-icon">
       <span class="condition">${report.current.condition.text}</span>
      </div>  
      </div>
       <div class="extra-data change-mode">
        <div class="extra-data-info">
          <img class="extra-data-icon" src="icons/humidity.png">
          <span class="extra-data-text">Humidity</span>
          <span>${report.current.humidity}%</span>
          
        </div>
        <div class="extra-data-info">
          <img class="extra-data-icon" src="icons/wind.png">
          <span class="extra-data-text">Wind Speed</span>
          <span>${report.current.wind_kph}km/hr</span>
          
        </div>
        <div class="extra-data-info">
          <img class="extra-data-icon" src="icons/cloud.png">
          <span class="extra-data-text">Pressure</span>
          <span>${report.current.pressure_in}in</span>
         
        </div>
        </div>`;

  // Add event listeners to convert °C <=> °F
  const convertButtons = document.querySelectorAll(".convert");
  convertButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      // Toggle temperature class and update value
      const farhen = document.querySelector(".temperature").classList.toggle("farehnite");
      if (farhen) {
        document.querySelector(".temperature").textContent = `${report.current.temp_f}°F`;
        btn.innerHTML = "Convert to &deg;C";
      } else {
        document.querySelector(".temperature").textContent = `${report.current.temp_c}°C`;
        btn.innerHTML = "Convert to &deg;F";
      }
    });
  });
}

// Toggle dark/light mode for all "mode" buttons
const modeButtons = document.querySelectorAll(".mode");
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle dark mode class for all applicable elements
    document.querySelectorAll(".change-mode").forEach((el) =>
      el.classList.toggle("dark-mode")
    );
    document.body.classList.toggle("dark-mode");
    
    // Update button text accordingly
    if (btn.textContent === "Dark Mode") {
      btn.textContent = "Light Mode";
    } else {
      btn.textContent = "Dark Mode";
    }
  });
});

// Toggle mobile menu on hamburger icon click
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
