1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent approximately 5 hours on the coding test. The following area areas of improvement that I would work on if I had more time:

* weather icon images for each date (I also couldn't fetch a google map of the data because the provided API key doesn't work for the "Weather Maps" API)
* more styling
* use a framework like React to turn parts of these into reusable components
* input validation, display user friendly text for bad inputs
* auto-complete/type-ahead on textbox for user's input
* toggling visibility would be cleaner code if using jQuery (or by using a framework)
* more helper functions to format the other unformatted numbers (temperature, humidity, wind speed).

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A useful feature introduced in Javascript ES6 was template literals. I used template literals to concatenate the html output that gets rendered to the DOM. 

For example:

divCurrentConditionsData.innerHTML = `<h1>${result.name}'s Current Conditions</h1>
        Current Conditions: ${result.weather[0].main} (${result.weather[0].description})<br/>
        Temperature: ${Math.floor(result.main.temp)}<br/>
        Humidity: ${result.main.humidity}<br/>
        Wind Speed: ${result.wind.speed}<br/>
        Wind Cardinal Direction: ${ConvertWindDirectionToText(result.wind.deg)}<br/>
        Sunrise: ${ConvertUnixTimestampToTime(result.sys.sunrise)}<br/>
        Sunset: ${ConvertUnixTimestampToTime(result.sys.sunset)}<br/><br/>`;