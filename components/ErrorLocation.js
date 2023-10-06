import React from 'react'

function ErrorLocation(props) {
    return (
        <div>
            <h4 className='text-red-700'>
                Sorry we could not get your location: {props.errorMsg}
            </h4>
            <h4>Rather, you can search for weather in another city:</h4>
        </div>
    )
}

export default ErrorLocation;