// Initialize variables/constants
const appId = '49821b3cc83fba7bca34a94435f92b63'; // API key

// Query the OpenWeatherMap API
function searchWeather(inputLocation) {
    // Fetch current conditions
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${appId}`;
    let longitude, latitude;
    fetch(url)
        .then(result => {
        return result.json();
    }).then(result => {
        populateCurrentConditions(result);

        // Fetch 5-day daily forecast
        longitude = result.coord.lon;
        latitude = result.coord.lat;
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${appId}`;
        fetch(url)
            .then(result => {
            return result.json();
        }).then(result => {
            populateDailyForecast(result);
        })
    })
}

// Display the current conditions at the specified location
function populateCurrentConditions(result) {
    let divCurrentConditionsData = document.getElementById('currentConditionsData');
    let divRawData = document.getElementById('currentConditionsDataRaw');

    if (divCurrentConditionsData) {
        divCurrentConditionsData.innerHTML = `<h1>${result.name}'s Current Conditions</h1>
                                Current Conditions: ${result.weather[0].main} (${result.weather[0].description})<br/>
                                Temperature: ${Math.floor(result.main.temp)}<br/>
                                Humidity: ${result.main.humidity}<br/>
                                Wind Speed: ${result.wind.speed}<br/>
                                Wind Cardinal Direction: ${ConvertWindDirectionToText(result.wind.deg)}<br/>
                                Sunrise: ${ConvertUnixTimestampToTime(result.sys.sunrise)}<br/>
                                Sunset: ${ConvertUnixTimestampToTime(result.sys.sunset)}<br/><br/>`;
    }

    if (divRawData) {
        divRawData.innerHTML = JSON.stringify(result);
    }
}

// Display the 5-day daily forecast at the specified location
function populateDailyForecast(result) {
    let divDailyForecastData = document.getElementById('dailyForecastData');
    let divRawData = document.getElementById('dailyForecastDataRaw');
    let str = '';

    if (divDailyForecastData && result.daily) {
        // The API returns 8 days and includes the current day, so we need to specifically check indexes 1 through 6
        for (let i = 1; i < 6; i++) {
            let currentDay = result.daily[i];
            str += `${ConvertUnixTimestampToDate(currentDay.dt)}<br/>
            Expected Conditions: ${currentDay.weather[0].main} (${currentDay.weather[0].description})<br/>
            High Temperature: ${currentDay.temp.max}<br/>
            Low Temperature: ${currentDay.temp.min}<br/>
            <br/>`;
        }

        divDailyForecastData.innerHTML = `<hr/><h1>5-Day Daily Forecast</h1>${str}`;
    }

    if (divRawData) {
        divRawData.innerHTML = JSON.stringify(result);
    }
}

// This is triggered on load
function init() {
    let searchInput = document.getElementById('searchInput');
    let searchBtn = document.getElementById('searchBtn');
    let rawDataBtn = document.getElementById('rawDataBtn');
    let currentConditionsDataRaw = document.getElementById('currentConditionsDataRaw');
    let dailyForecastDataRaw = document.getElementById('dailyForecastDataRaw');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            let inputLocation = searchInput.value;
            if (inputLocation) {
                searchWeather(inputLocation);
            }
        });
    }

    // Toggles visibility of raw API output
    if (rawDataBtn) {
        rawDataBtn.addEventListener('click', () => {
            if (currentConditionsDataRaw.style.display !== 'none') {
                currentConditionsDataRaw.style.display = 'none';
            } else {
                currentConditionsDataRaw.style.display = '';
            }
            if (dailyForecastDataRaw.style.display !== 'none') {
                dailyForecastDataRaw.style.display = 'none';
            } else {
                dailyForecastDataRaw.style.display = '';
            }
        });
    }
}