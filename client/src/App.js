import React from 'react';
import Iss from './Iss';
import styled from 'styled-components';
import Weather from './Weather';

function App() {
  return (

    <div>

      <header className="App-header">

        <h1>
          ISS Weather API
        </h1>


      </header>
      <form>
        <label>Your position: </label>
        <input type="text" placeholder="Indicate your position (ex: latitude: 10.4289, longitude: -9.4545" id="yourPos"></input>
        <submit>
          <button>Submit</button>
        </submit>
      </form>
      <IssPosBox>
        <Iss />
        The ISS position is:

      </IssPosBox>
      <IssPosBox>

        The weather at my current position is:
        <Weather />
      </IssPosBox>
    </div>
  );
}

const IssPosBox = styled.div`
height: 300px;
width: 100%;
text-decoration: underline;
color: blue;
background-color: lightgray;
border: 15px solid green;
padding: 20px;
margin: 20px;
`;

export default App;
