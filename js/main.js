

var temperature=[]

// 
var inp =document.getElementById('search')
inp.addEventListener('input',function (e) {
  vew =  e.target.value
  console.log(vew);
//  
var myHTTP = new XMLHttpRequest();
myHTTP.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=a8a2009f3c52464798793255230208&q=${vew}&days=3`)
myHTTP.send()
myHTTP.addEventListener('readystatechange',function (){
  console.log(myHTTP.readyState);
  if (myHTTP.status==200 && myHTTP.readyState==4)
{
temperature=JSON.parse(myHTTP.response)
console.log(temperature);

displyposts()
}
})

// 
})





function getnews() 
{
var myHTTP = new XMLHttpRequest();
myHTTP.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=a8a2009f3c52464798793255230208&q=${latlon}&days=3`)
myHTTP.send()
myHTTP.addEventListener('readystatechange',function (){
  console.log(myHTTP.readyState);
  if (myHTTP.status==200 && myHTTP.readyState==4)
{
temperature=JSON.parse(myHTTP.response)
console.log(temperature);

displyposts()
}
})

}

function displyposts()
{


//ToDay
document.getElementById('tarekh').innerHTML = moment().format('LLLL')
document.getElementById('contry').innerHTML = temperature.location.name  + `. ${ temperature.location.region}`
document.getElementById('tempToDay').innerHTML = temperature.current.temp_c
document.getElementById('suuny').innerHTML = temperature.current.condition.text
document.getElementById('icon').innerHTML =`<img src="${temperature.current.condition.icon}" >`
// tomorrow  
document.getElementById('tomorrow').innerHTML = moment(temperature.forecast.forecastday[1].date).format('dddd')
document.getElementById('tomorrowIcon').innerHTML =`<img src="${temperature.forecast.forecastday[1].day.condition.icon}">`
document.getElementById('tomorrowMaxTemp').innerHTML = temperature.forecast.forecastday[1].day.maxtemp_c
document.getElementById('tomorrowMinTemp').innerHTML = temperature.forecast.forecastday[1].day.mintemp_c
document.getElementById('tomorrowText').innerHTML = temperature.forecast.forecastday[1].day.condition.text
// AfterTomorrow
document.getElementById('AfterTomorrow').innerHTML = moment(temperature.forecast.forecastday[2].date).format('dddd')
document.getElementById('AfterTomorrowIcon').innerHTML =`<img src="${temperature.forecast.forecastday[2].day.condition.icon}">`
document.getElementById('AfterTomorrowMaxTemp').innerHTML = temperature.forecast.forecastday[2].day.maxtemp_c
document.getElementById('AfterTomorrowMinTemp').innerHTML = temperature.forecast.forecastday[2].day.mintemp_c
document.getElementById('AfterTomorrowText').innerHTML = temperature.forecast.forecastday[2].day.condition.text

}




var latlon = 'london'
getnews()
function locationn() {
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
function successCallback(Position){
var latitud = Position.coords.latitude
var longitud = Position.coords.longitude
  latlon = latitud + ',' + longitud
  // console.log(latlon);
  // console.log(latitud) //30.0580864
  // console.log(longitud)//31.342592
  getnews()
}
}


function errorCallback(error) {
  console.error("خطاء",error)
}

  
