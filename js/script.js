let weather = {
    "ApiKey" : "8956af9be42e5f981ce6222a1a1e56d2",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.ApiKey
        ).then((response) => response.json())
        .then((data) => this.diplayWeather(data));
    },
    diplayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max, humidity } = data.main;
        //const { speed } = data.wind;
        document.querySelector(".datosbuscadosCiudad").innerText = name;
        document.querySelector(".iconotiempo").src = "https://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".gradosennumero").innerText = (temp-273.15).toFixed() + "º";
        document.querySelector(".datosbuscadosPais").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".descripciontiempo").innerText = description;
        document.querySelector(".temperaturamaxima").innerText = (temp_max-273.15).toFixed() + "º" ;
        document.querySelector(".temperaturaminima").innerText = (temp_min-273.15).toFixed() + "º";
        document.body.style.backgroundImage  =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".ciudadabuscar").value);
    }
};

document
.querySelector(".botonenviar")
.addEventListener("click", function () {
    weather.search();
});

document
.querySelector(".ciudadabuscar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});