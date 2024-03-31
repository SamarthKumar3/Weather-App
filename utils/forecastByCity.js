"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ErrorLocation from '../components/ErrorLocation';

function ForecastByCity(props) {
    const [formData, setFormData] = useState({
        weather: '',
        temp: '',
        temp_min: '',
        temp_max: '',
        humidity: '',
        wind: 0,
        visibility: '',
        weatherIcon: ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const icon = "http://openweathermap.org/img/wn/" + formData.weatherIcon + "@2x.png";


    useEffect(() => {
        const getCityWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric#`);
                const weatherData = await response.data;
                if (weatherData.cod === '404') {
                    throw new Error(weatherData.message);
                } else {
                    setFormData({
                        weather: weatherData.weather[0].main,
                        temp: weatherData.main.temp,
                        temp_min: weatherData.main.temp_min,
                        temp_max: weatherData.main.temp_max,
                        humidity: weatherData.main.humidity,
                        wind: weatherData.wind.speed,
                        visibility: weatherData.visibility,
                        weatherIcon: weatherData.weather[0].icon
                    });
                }
            }
            catch (err) {
                setErrorMsg(err.response.data.message);
                console.log(err);
            }
        }
        getCityWeather();
    }, [props.city])

    const date = new Date();
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return <>
        {errorMsg !== '' ?
            <>
                <div className='text-black glass-box items-center justify-center flex flex-col py-2 px-4 md:px-7 md:py-5 col-start-1 row-start-1 col-span-8 row-end-[8]'>
                    <ErrorLocation errorMsg={errorMsg} />
                </div>
                
            </>
            :
            <>
                <div className='text-black glass-box items-center justify-center flex flex-col py-2 px-4 md:px-7 md:py-5 col-start-1 row-start-1 row-span-4 w-fit'>
                    <h1 className='text-xl max-[320px]:text-base sm:text-3xl md:text-4xl'>{props.city.charAt(0).toUpperCase() + props.city.slice(1).toLowerCase()}</h1>
                    <h5 className='text-xs max-[300px]:text-[8px] mt-2 md:text-base'>{formattedDate}</h5>
                </div>

                <div className='glass-box items-center py-2 px-5 justify-center flex flex-col row-start-1 col-start-6 row-end-6 col-end-9 md:col-start-7 gap-y-3'>
                    <h1 className='text-3xl min-[480px]:text-5xl xl:text-6xl text-center'>{formData.temp.toString().split('.')[0]}°<span className='text-base'>C</span></h1>
                    <div className='flex justify-center items-center gap-x-2 xl:gap-x-5'>
                        <h6 className='text-xs sm:text-sm xl:text-lg'>{formData.temp_max.toString().split('.')[0]}°</h6>/
                        <h6 className='text-xs sm:text-sm xl:text-lg'>{formData.temp_min.toString().split('.')[0]}°</h6>
                    </div>
                </div>
                <div className='text-black flex items-center justify-center glass-box py-2 px-2 md:px-5 mr-2 row-start-6 col-start-1 col-span-2 row-span-1'>
                    <div className='flex gap-y-5 flex-col items-center '>
                        <img src={icon} className='border glass-box2 rounded-2xl' />
                        <h6 className='text-xs max-[300px]:text-[8px] sm:text-sm xl:text-lg'>{formData.weather}</h6>
                    </div>
                </div>

                <div className='text-black flex items-center justify-center glass-box py-2 px-2 md:px-5 mr-2 row-start-6 col-start-3 col-span-2 row-span-1'>
                    <div className='flex gap-y-5 flex-col items-center '>
                        <h2 className='text-lg min-[400px]:text-2xl min-[500px]:text-3xl  lg:text-4xl'>{formData.humidity}<span className='text-xs md:text-base lg:text-lg'>%</span></h2>
                        <h6 className='text-xs max-[300px]:text-[8px] min-[420px]:text-lg  xl:text-xl'>Humidity</h6>
                    </div>
                </div>

                <div className='text-black flex justify-center items-center  glass-box py-2 px-2 md:px-5 mr-2 row-start-6 col-start-5  col-span-2 row-span-1'>
                    <div className='flex gap-y-5 flex-col items-center '>
                        <h2 className='text-lg min-[400px]:text-2xl min-[500px]:text-3xl  lg:text-4xl'>{formData.visibility / 1000}<span className='text-xs md:text-base lg:text-lg'> km</span></h2>
                        <h6 className='text-xs max-[300px]:text-[8px] min-[420px]:text-lg  xl:text-xl'>Visibility</h6>
                    </div>
                </div>
                <div className='text-black flex justify-center items-center glass-box py-2 px-2 md:px-5 row-start-6 col-start-7  col-span-2 row-span-1'>
                    <div className='flex flex-col items-center '>
                        <h2 className='text-lg min-[400px]:text-2xl min-[500px]:text-3xl lg:text-4xl'>{(formData.wind).toPrecision(2)}<span className='text-[8px] md:text-base lg:text-lg'> m/s</span></h2>
                        <h6 className='text-[10px] max-[300px]:text-[8px] min-[420px]:text-lg xl:text-xl mt-2'>Wind Speed</h6>
                    </div>
                </div>
            </>
        }

    </>
}

export default ForecastByCity;