import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { AppBar } from '@mui/material';


export default function SearchBar({updateWeatherInfo}){
    let API_URL="https://api.openweathermap.org/data/2.5/weather?q=";
    let API_KEY=import.meta.env.VITE_API_KEY;
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);


    let searchCity= async()=>{
        try{
            let result=await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
            let result1=await result.json();
            let mainResult={
            city:city,
            temperature:result1.main.temp,
            min_temp:result1.main.temp_min,
            max_temp:result1.main.temp_max,
            humidity:result1.main.humidity,
            feelsLike:result1.main.feels_like,
            weather:result1.weather[0].description,
            }
            console.log(mainResult);
            console.log(result1);
            return mainResult;
        }
        catch(error){
            throw error;
        }
    }

    useEffect(()=>{
        async function searchWeather(){
            let result=await fetch(`${API_URL}Nandyal&appid=${API_KEY}&units=metric`);
            let result1=await result.json();
            let mainResult={
              city:"Nandyal",
              temperature:result1.main.temp,
              min_temp:result1.main.temp_min,
              max_temp:result1.main.temp_max,
              humidity:result1.main.humidity,
              feelsLike:result1.main.feels_like,
              weather:result1.weather[0].description,
           }
           console.log(mainResult);
           await updateWeatherInfo(mainResult);
           return mainResult;
        }
        let mainResult1=searchWeather();
        

    },[]);


    let handleInput=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            // console.log(city);
            let mainResult1 = await searchCity();
            await updateWeatherInfo(mainResult1);
            setError(false);
            setCity("");
        }
        catch(error){
            setError(true);
        }
    }

    return(
        <div style={{textAlign:"center",marginTop:"3rem"}}>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handleInput} value={city} required/><br/><br/>
                <Button variant="contained" type="submit" >Search</Button>
            </form>
            {error&&<p style={{color:"red",fontSize:"2rem"}}>Search City Not Found</p>}
        </div>
    )
}