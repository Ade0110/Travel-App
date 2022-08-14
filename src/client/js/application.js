function handleSubmit(event) {
  event.preventDefault()


// check what postal code  was put into the form field
let city = document.getElementById('city').value
Client.checkForCity(city)

let dateFrom = document.getElementById('dateFrom').value;
let dateTo = document.getElementById('dateTo').value;
console.log("Destination Postal Code:", city)
console.log("From", dateFrom, "to", dateTo)

//variables
  const geoUrl = "http://api.geonames.org/postalCodeSearchJSON?postalcode="+city+"&maxRows=10&lang=en&username=adasiwaju";
  const weatherApikey = "73959f2560a345df897857bedbeedb49";
  const pixabayKey="28790545-008e00dda7c0e56a9b6a2dfab";
//fetch Geonames data
getGeoNames();
function getGeoNames() {
  fetch (geoUrl)
.then((response) => response.json())
.then(data => {
      var geoData = data.postalCodes;

 
      var geo_results = '<p>City: '+geoData[0].placeName+'</p>';
      geo_results += '<p>Latitude: '+geoData[0].lat+'</p>';
      geo_results += '<p>Longitude: '+geoData[0].lng+'</p>';
      document.getElementById('trip').innerHTML = geo_results;
      getWeatherBit(geoData);
      // +data.agreement+'<br>'+data.irony+'<br>'+data.confidence;
  })
}


//get Weatherbit Data
   function getWeatherBit (geoData) {
    // console.log(geoData);
const lat = geoData[0].lat;
const lng = geoData[0].lng;
const weatherUrl = "https://api.weatherbit.io/v2.0/current?lat="+lat+"&lon="+lng+"&key="+weatherApikey+"&include=minutely";
// console.log(lat, lng);

    fetch(weatherUrl)
  .then((response) => response.json())
	.then(data => {
    
			var weatherData = data.data[0];
      var weatherResults = '<p>Temp: ' +weatherData.temp+'</p>';
      weatherResults += '<p>Description: ' +weatherData.weather.description+'</p>';
      document.getElementById('weather').innerHTML = weatherResults;
      getPixabay(weatherData.city_name.split(" ")[0])
		});
}



//Get Pixabay data 
  function getPixabay (city) {
    const pixabayURL= `https://pixabay.com/api/?key=${pixabayKey}&q=${city}&image_type=photo&pretty=true`;
    fetch(pixabayURL)
    .then((response) => response.json())
    .then(data => {
      var pixaData = data.hits[0];
      var pixaResults = pixaData.webformatURL;
      document.getElementById('picture').innerHTML="<img src='"+pixaResults+"'>";
    })
  };


}
export { handleSubmit }