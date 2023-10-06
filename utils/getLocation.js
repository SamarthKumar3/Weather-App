"use client"
// import { useState } from "react";

// const getLocation = () => {

//     const [errorMsg, setErrorMsg] = useState('');
//     const [latLong, setLatLong] = useState('');
//     const [isLocationAllowed, setIsLocationAllowed] = useState(false);

//     const success = (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         setLatLong(`${latitude},${longitude}`);
//         setErrorMsg('');
//         setIsLocationAllowed(true);
//     }

//     const error = () => {
//         setErrorMsg("Unable to retrieve your location");
//         setIsLocationAllowed(false);
//     }

//     const handleTrackLocation = () => {
// if (!navigator.geolocation) {
//     setErrorMsg("Geolocation is not supported by your browser");
// } else {
//     navigator.geolocation.getCurrentPosition(success, error);
// }
//     }

//     return {
//         latLong,
//         handleTrackLocation,
//         errorMsg,
//         isLocationAllowed
//     };
// }

// export default getLocation;

import { useState, useEffect } from "react";

const getLocation = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [latLong, setLatLong] = useState('');
    const [isLocationAllowed, setIsLocationAllowed] = useState(null);

    useEffect(() => {
        navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
            if (permissionStatus.state === 'granted') {
                setIsLocationAllowed(true);
            } 
        });

    }, []);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLatLong(`${latitude},${longitude}`);
        setErrorMsg('');
        setIsLocationAllowed(true);
    }

    const error = () => {
        setErrorMsg("Unable to retrieve your location");
        setIsLocationAllowed(false);
    }

    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setErrorMsg("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return {
        latLong,
        handleTrackLocation,
        errorMsg,
        isLocationAllowed,
    };
}

export default getLocation;
