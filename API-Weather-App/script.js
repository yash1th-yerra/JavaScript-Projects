


/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '582a16598bmsh4110b17fd172a56p1ca2dajsn577da57231d6',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  // const weather = async ()=>{
  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   return result
    

  // } catch (error) {
  //   console.error(error);
  // }
  // }
  return fetch(url,options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err))
  // showWeatherData(weather)
  



  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData)
  document.getElementById('temp').innerText = `${weatherData.main.temp}`
  document.getElementById('min-temp').innerText = `${weatherData.main.temp_min}`
  document.getElementById('max-temp').innerText = `${weatherData.main.temp_max}`
  document.getElementById('city-name').innerText = `${weatherData.name}`
  document.getElementById('weather-type').innerText = `${weatherData.weather[0].main}`
  
}

