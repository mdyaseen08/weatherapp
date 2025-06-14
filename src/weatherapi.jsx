import { IoSearchSharp } from "react-icons/io5";
import Precipitiation from "./precipitiation.png"
import Winds from "./winds.png"
import Sun from "./sunImg.png"
import Rain from "./rain.png"
import ThunderStorm from "./thunderStorm.png"
import Cloudy from "./cloudy.png"


import { useEffect, useState } from "react";

export default function WeatherApi() {

    const [weather, setWeather] = useState(null);
    const [place, setPlace] = useState("chennai");

    const weatherCall = () => {
        // setWeather(document.getElementById("search").value);
        let apiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7447ac85b872802e1bcb9d5821e6a675`);
        let apiData = apiCall.then((item) => item.json());
        apiData.then((weatherData) => setWeather(weatherData));
    }

    // let {name, wind:{speed}, main:{humidity, temp}} = weather;

    useEffect(() => {
        weatherCall();
    }, [])

    // console.log(weather.weather[0].main);
    return (
        <>
            <div className="weatherCard">
                <div className="inputDiv">
                    <input type="text" id="search" onChange={(getPlace) => setPlace(getPlace.target.value)} />
                    <IoSearchSharp className="icon" htmlFor="search" onClick={() => weatherCall()} />
                </div>

                {weather && weather.cod == 200 ? 
                <div>
                    <div className="locationDiv">
                        <h3>{weather?.name}</h3>
                        <p></p>
                    </div>
                    <div className="degreeDiv">
                        <h1>{Math.round(weather?.main.temp - 273.15)}<sup>°C</sup></h1>
                        <img src={weather && weather.weather[0].main == "Clear" ? Sun : 
                        weather.weather[0].main == "Rain" ? Rain : 
                        weather.weather[0].main == "thunderstorm" ? ThunderStorm : Cloudy} alt="" />
                    </div>
                    <div className="unwantedDiv">
                        <div>
                            <img src={Precipitiation} alt="" />
                            <p>Precipitiation</p>
                        </div>
                        <div>
                            <img src={Winds} alt="" />
                            <p>{`Wind Speed: ${weather?.wind.speed}`}</p>
                        </div>
                    </div >
                </div> : <h2 className="invalid">!!! Invalid City Name !!!</h2>}

            </div >
        </>
    )
}

//7447ac85b872802e1bcb9d5821e6a675
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=7447ac85b872802e1bcb9d5821e6a675