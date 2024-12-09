import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({weatherinfo}){
    let RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    let SNOW_URL="https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8fDA%3D";
    let SUN_URL="https://plus.unsplash.com/premium_photo-1669731124026-84b3f596d72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U1VOJTIwSEVBVHxlbnwwfHwwfHx8MA%3D%3D";
    // let info={
    //     city:"delhi",
    //     feelsLike:18.95,
    //     humidity: 32,
    //     max_temp: 20.05,
    //     min_temp: 20.05,
    //     temperature: 1012,
    //     weather: "haze",
    // }

    return(
        <div style={{display:"flex",textAlign:"center",justifyContent:"center",marginTop:"3rem"}}>
            <Card sx={{ maxWidth: 500 ,}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={weatherinfo.humidity>80?RAIN_URL:weatherinfo.temperature>15?SUN_URL:SNOW_URL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{weatherinfo.city}            
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

                    <p>Temperature : {weatherinfo.temperature}</p>                    
                    <p>Humidity : {weatherinfo.humidity}</p>
                    <p>MinTemp : {weatherinfo.min_temp}</p>
                    <p>MaxTemp : {weatherinfo.max_temp}</p>                   
                    <p>The Weather can be described as {weatherinfo.weather} and feels like {weatherinfo.feelsLike}</p>
            
                </Typography>
        </CardContent>
    </Card>
        </div>
    )
}