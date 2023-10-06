"use client"
import React, { useEffect, useState } from 'react';
import ForecastByCity from '../../../../utils/forecastByCity';
import { useParams } from 'next/navigation'
import axios from 'axios';

function MyWeather() {
    const params = useParams();
    const [imgSrc, setImgSrc] = useState('');
    const city = params.city;

    useEffect(() => {
        const getImg = async () => {
            try {
                const url = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`);
                const src = await url.data.photos[0].image.web;
                setImgSrc(src);
            }
            catch (err) {
                console.log(err);
            }
        }
        getImg();
    }, []);



    return (
        <div className='flex justify-center h-full content-center flex-wrap '>
            <div className='w-3/4 md:w-1/2 relative'>
                <div style={{ backgroundImage: `url(${imgSrc || '/City-Backup.jpg'})`}} className='bg-no-repeat bg-center bg-cover h-full rounded-3xl weather-card grid grid-rows-8 grid-cols-8 gap-y-10 gap-x-1 p-2 md:p-4 ' >
                    <ForecastByCity city={city}/>
                </div>
            </div>
        </div>
    )
}

export default MyWeather;