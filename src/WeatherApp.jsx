import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBar from "./SearchBar";


export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:18.95,
        humidity: 32,
        max_temp: 20.05,
        min_temp: 20.05,
        temperature: 18.05,
        weather: "haze",
    });

    let updateWeatherInfo= async (val)=>{
        setWeatherInfo(val);
    }

    return(
        <div>
           <SearchBar updateWeatherInfo={updateWeatherInfo}/>        
           <InfoBox weatherinfo={weatherInfo}/>
        
        </div>
    )
}