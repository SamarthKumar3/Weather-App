"use client"
import React from 'react';
import ForecastByCoords from '../../../../utils/forecastByCoords';
import { useParams } from 'next/navigation'

function MyWeather() {
    const params = useParams();
    const latLong = params.latLong;


    return (
        <div className='flex justify-center h-full content-center flex-wrap '>
            <div className='w-3/4 md:w-1/2 relative'>
                
                    <ForecastByCoords latLong={latLong} />
        
            </div>
        </div>

    )
}

export default MyWeather;