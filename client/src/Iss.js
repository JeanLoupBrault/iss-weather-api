import React, { useEffect, useState } from 'react';
// import { getIssPosition } from '../../server/index';
import styled from 'styled-components';

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
    console.log('data: ', data);
    console.log('typeof data: ', typeof data);
    console.log('data.iss_position: ', data.iss_position);
    console.log('data.iss_position.latitude: ', data.iss_position.latitude);
  }


  return (
    <div>
      <IssPos>
        isscurrentpos
        {setIssPosition}
      </IssPos>
      <div>

        {getIssPosition}
      </div>
    </div>

  );
}

const IssPos = styled.div`
height: 300px;
width: 100%;
text-decoration: underline;
color: blue;
background-color: lightgray;
`;

export default Iss;