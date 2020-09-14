import React, { useEffect, useState } from 'react';
// import { getWeather } from '../../server/index';
import styled from 'styled-components';

require('dotenv').config();

const Weather = () => {
    // console.log('process.env', process.env)
    // const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;
    // const APP_ID = '';
    // const APP_KEY = '';

    const [weather, setWeather] = useState([]);


    useEffect(() => {
        getWeather();

    }, []);

    const getWeather = async () => {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${APP_KEY}&query=fetch:ip`);
        const data = await response.json();
        setWeather(data);
        console.log('data: ', data);
        console.log('typeof data: ', typeof data);
        // console.log('data.iss_position: ', data.iss_position);
        // console.log('data.iss_position.latitude: ', data.iss_position.latitude);
    }


    return (
        <div>
            <WeatherPos>
                Weather at my current position
        {setWeather}
            </WeatherPos>
            <div>

                {setWeather}
            </div>
        </div>

    );
}

const WeatherPos = styled.div`
height: 300px;
width: 100%;
text-decoration: underline;
color: blue;
background-color: lightgray;
`;

export default Weather;