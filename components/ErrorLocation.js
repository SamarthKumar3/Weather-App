import Link from 'next/link';
import React from 'react'

function ErrorLocation(props) {
    return (
        <div className='items-center justify-center flex flex-col'>
            <h4 className='text-red-700 mb-3'>
                Sorry we could not complete your request: {props.errorMsg}
            </h4>
            {props.errorMsg === 'city not found' ?
                <Link href='/search-location' className='py-3 px-5 m-2 mt-4 font-semibold text-lime-900 border border-orange-400 rounded-2xl hover:bg-orange-100 ease-in-out duration-300'>
                    Go back
                </Link> : null
            }
        </div>
    )
}

export default ErrorLocation;