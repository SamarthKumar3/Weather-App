"use client"
import React , {useState} from 'react'
import ErrorLocation from '../../../components/ErrorLocation';
import getLocation from '../../../utils/getLocation';
import Link from 'next/link';

function SearchLocation() {
    const [city, setCity] = useState('');

    const { errorMsg } = getLocation();


    return <div className='h-full'>
        <div className='flex justify-center flex-col content-center items-center flex-wrap h-full text-center gap-y-5'>

            {errorMsg === '' ?
                <div>
                    <h4 className='text-2xl md:text-3xl'>Search some city to get the weather: </h4>
                </div>
                :
                <ErrorLocation errorMsg={errorMsg} />
            }
            <input id='weatherID' type='text' className='border border-red-950 rounded-md p-2 ' placeholder='City Name' onChange={e => setCity(e.target.value)}/>
            <Link href={`/search-location/${city}`} className='border border-red-950 rounded-2xl px-5 py-1 font-semibold'>Go</Link>
        </div>
    </div>
}

export default SearchLocation;