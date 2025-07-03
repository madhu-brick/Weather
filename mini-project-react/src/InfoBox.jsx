import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import "./InfoBox.css";

export default function InfoBox( {info} ) {
    const INIT_URL = 
        "https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1518873890627-d4b177c06e51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1715731455730-f7d8a4992ebb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    

    const weatherIcon = info.humidity > 80
        ? <ThunderstormIcon />
        : info.temp > 25
            ? <SunnyIcon />
            : <AcUnitIcon />;

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAIN_URL: info.temp>25? HOT_URL: COLD_URL}
            title="weather image"
        />
        <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Box>{weatherIcon}</Box>
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>
                    The weather can be described as <i>{info.weather}</i> and feels
                    like {info.feelsLike}&deg;C
                </p>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}
