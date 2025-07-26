import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const weatherImages = {
        Clear: "https://media.istockphoto.com/id/484108618/photo/half-blue-half-black-sky-with-clouds-summer-season.webp?a=1&b=1&s=612x612&w=0&k=20&c=ujbuSGJJ_4cmuL7806X3PJ5ogX7CtrkULp1njlYgmfE=",
        Clouds: "https://media.istockphoto.com/id/504878730/photo/cloud.webp?a=1&b=1&s=612x612&w=0&k=20&c=luiTgQAsAKMYkzWTLpcxFZxqe7ew4TsPrnbr22DSqOA=",
        Rain: "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D",
        Thunderstorm: "https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=G8aN12QHfqH8ktSwUanoQNvyYx2anv7Saof78ppYTZw=",
        Snow: "https://media.istockphoto.com/id/614332492/photo/snow-storm.webp?a=1&b=1&s=612x612&w=0&k=20&c=4VA1me8EORfyYTQ7gKlUq6x91PNzsyHvQ3s7jpbopWw=",
        Mist: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlzdHxlbnwwfHwwfHx8MA%3D%3D",
        Haze: "https://images.unsplash.com/photo-1502201684351-c156ded4d3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGF6ZXxlbnwwfHwwfHx8MA%3D%3D",
        Smoke: "https://images.unsplash.com/photo-1625846194936-8e64a0dc2431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21va2V5JTIwd2V0aGVyfGVufDB8fDB8fHww",
        Fog: "https://images.unsplash.com/photo-1510596713412-56030de252c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9nfGVufDB8fDB8fHww",
        Drizzle: "https://images.unsplash.com/photo-1556485689-33e55ab56127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJpenpsZXxlbnwwfHwwfHx8MA%3D%3D",
        Dust: "https://media.istockphoto.com/id/1433075417/photo/field.webp?a=1&b=1&s=612x612&w=0&k=20&c=WvD84K0yZMJjf-UDYwmpBYtWdgs5C11yLoHzJU_0p74=",
        Sand: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNhbmR8ZW58MHx8MHx8fDA%3D"
    };

    const imageURL = weatherImages[info.condition] || "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXIlMjBpY29ufGVufDB8fDB8fHww";

    return (
        <div className="info-container">
            <Card className="weather-card">
                <CardMedia
                    className="weather-image"
                    image={imageURL}
                    title={info.weather}
                />
                <CardContent className="weather-details">
                    <hr></hr>
                    <Typography variant="h4" className="city-name">
                        <span>The wether at <b>{info.city}</b></span>
                    </Typography><br></br>
                    <Typography variant="body1" className="weather-text">
                        <span>&nbsp;&nbsp;<i>(The wether is "{info.weather}")</i></span><br />
                        <span>🌡️ Temperature: <b>{info.temp}&deg;C</b></span><br />
                        <span>🤗 Feels Like: <b>{info.feelLike}&deg;C</b></span><br />
                        <span>🔺 Max: {info.maxTemp}&deg;C &nbsp; 🔻 Min: {info.minTemp}&deg;C</span><br />
                        <span>💧 Humidity: {info.humidity}%</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

