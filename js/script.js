const city_name = document.getElementById('city-name-enter');
const submitbtn = document.getElementById('submit-btn');
const formSubmit = document.getElementById('getWeather');
var current_date = new Date();
var current_Date = document.getElementById('current_date');
var current_Day = document.getElementById('current_day');
var current_Month = document.getElementById('current_month');
current_Date.innerText = current_date.toLocaleDateString();

var day = current_date.getUTCDay();

switch (day) {
    case 1:
        current_Day.innerText = "monday";
        break;
    case 2:
        current_Day.innerText = "tuesday";
        break;
    case 3:
        current_Day.innerText = "wednesday";
        break;
    case 4:
        current_Day.innerText = "thursday";
        break;
    case 5:
        current_Day.innerText = "friday";
        break;
    case 6:
        current_Day.innerText = "saturday";
        break;
    case 7:
        current_Day.innerText = "sunday";
        break;
};

var enter_city_name = document.getElementById('city-name-enter');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp-status');

const getinfo = async (event) => {
    event.preventDefault();
    var city = enter_city_name.value;
    enter_city_name.value = "";
    if (city == "") {
        document.getElementById('city-name-out').innerHTML = "plese enter city name before search";
    } else {

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=11a8ef0060520d0487e75007fffb5ffa`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temp.innerText = arrdata[0].main.temp;
            document.getElementById('city-name-out').innerHTML = `${arrdata[0].name},${arrdata[0].sys.country}`;
            const temp_status_value = arrdata[0].weather[0].main
            if (temp_status_value == "Clouds") {
                temp_status.innerText = "☁";
            } else if (temp_status_value == "Clear") {
                temp_status.innerText = "⛅️";
            } else if (temp_status_value == "Rain") {
                temp_status.innerText = "☔";
            } else if (temp_status_value == "Mist") {
                temp_status.innerText = "🌫";
            } else {
                temp_status.innerText = temp_status_value;
            }

        } catch {
            document.getElementById('city-name-out').innerHTML = "plese enter correct city name";
        }
    }

}
formSubmit.addEventListener('submit', getinfo);