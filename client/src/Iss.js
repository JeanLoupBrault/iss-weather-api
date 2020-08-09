import React, { useEffect, useState } from 'react';
// import { getIssPosition } from '../../server/index';

require('dotenv').config();

const Iss = () => {
  // console.log('process.env', process.env)
  // const APP_ID = process.env.APP_ID;
  // const APP_KEY = process.env.APP_KEY;
  // const APP_ID = '';
  // const APP_KEY = '';

  const [issPosition, setIssPosition] = useState([]);


  useEffect(() => {
    getIssPosition();

  }, []);

  const getIssPosition = async () => {
    const response = await fetch(`http://api.open-notify.org/iss-now.json`);
    const data = await response.json();
    setIssPosition(data);
    console.log('data', data);
  }


  return (
    <div>
      isscurrentpos
      {setIssPosition}
    </div>
  );
}

export default Iss;