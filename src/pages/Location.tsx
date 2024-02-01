import React, { useState, useEffect } from 'react';

const Location = () => {
  const [ip, setIp] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [error, setError] = useState<string>('');

  /*=============get location===================*/
  async function getUserLocation() {
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (!response.ok) {
        throw new Error('Failed to fetch user location.');
      }
      const data = await response.json();
      setIp(data.ip);
      window.alert(ip);
      setLocation(data.city + ',' + data.region);
      setArea(JSON.stringify(data)); // Stringify the data object
    } catch (error: any) {
      setError('Error fetching user location: ' + error.message);
    }
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  const FullLoc = () => (
    <span>
      {area}
    </span>
  );

  return (
    <div className='location_page'>
      <div className='p-2 w-full flex justify-start'>
        <span className='text-blue-900 italic text-3xl font-semibold'>Select Your location on the map:</span>
      </div>
      {/*==========location================*/}
      <div className='w-full flexcenter flex-col '>
        {/*=======search for location====*/}
        <div className='w-full flexcenter flex-col'>
          <div className='flexcenter gap-2 w-full'>
            <button className='w-24 h-10 border border-black bg-cyan-300 rounded-lg'>Search</button>
            <input className='border border-black w-[300px] h-10 p-2 rounded-lg text-sm font-bold' type="text" placeholder='Your country...' />
          </div>
          {/*============map==============*/}
          <div className='google_map' id='google_map'></div>
          <span className='text-lg font-bold'>Client side IP geolocation using <a className='text-blue-800 underline' href="https://ipinfo.io/">ipinfo.io</a></span>
          <div className='w-[98%] p-3 flexcenter flex-col border-y-2 border-[#403e3e] m-2 '>
            <div className='flexcenter'>
              <p>IP: </p><span className='ip'>{ip}</span>
            </div>
            <div className='flexcenter'>
              <p>Location: </p><span className='location'>{location}</span>
            </div>
          </div>
        </div>
        {/*=============set location=============*/}
        <div className='flexcenter flex-col'>
          <h3>Full response:</h3>
          <FullLoc />
          <span>Location may vary up to 10 kms/6 miles.</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
