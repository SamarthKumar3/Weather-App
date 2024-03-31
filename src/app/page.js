"use client"
import React, { useState, useEffect } from 'react';

import getLocation from '../../utils/getLocation';

import { redirect } from 'next/navigation';
import Link from 'next/link';

const Home = () => {
  const { latLong, handleTrackLocation, errorMsg, isLocationAllowed } = getLocation();
  console.log(latLong, errorMsg, isLocationAllowed);

  const handleLocationClick = () => {
    handleTrackLocation();
  }

  useEffect(() => {
    if (isLocationAllowed === true) {
      redirect(`/my-weather/${latLong}`); 
    }
    
  },
    [isLocationAllowed, latLong]);

  return (
    <>
      <div className='flex justify-center flex-col content-center flex-wrap h-full text-center gap-y-5'>
        <h1 className='text-7xl md:text-9xl'>Get Started!</h1>
        <h2 className='text-xl md:text-3xl' >Choose to see your location's weather</h2>
        <h2 className='text-xl md:text-3xl'>Or see whats going on somewhere else!</h2>
        <div className='flex items-center justify-center gap-x-5'>
          <button onClick={handleLocationClick} className='py-3 px-5 m-1 font-semibold text-blue-900 border border-purple-400 rounded-2xl hover:bg-purple-100 ease-in-out duration-300'>
            Get my location
          </button>
          <Link href='/search-location' className='py-3 px-5 m-1 font-semibold text-lime-900 border border-orange-400 rounded-2xl hover:bg-orange-100 ease-in-out duration-300'>
            Search by name
          </Link>
        </div>
      </div>

    </>
  )
}

export default Home;