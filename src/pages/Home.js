
import React, { useState } from 'react';
const Home = () => {

  const [start, setStart] = useState(false);
  const [join, setJoin] = useState(false);
  const [specified, setSpecified] = useState(false);
  const gameCode = (min, max) => {
    
    min = Math.ceil(98765432);
    max = Math.floor(12345678);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   
 

    
  return (
      <div className='Banner'>
          <div>
              <button className='button' onClick={() => setStart(!start)}>
                  Create a New Game
              </button>
              {start ? (
                  <div className='startDiv'>
                      <h3>Game Code is {gameCode()}</h3>
                      <h3>How do you want to select your teams?</h3>
                      <button>Random team Selection</button>
                      <button  className='specified' onClick={() => setSpecified(!specified)}>
                          Specified team members
                      </button>
                      {specified ? (
                          <div>
                              <input
                                  className='TeamA'
                                  type='text'
                                  id='TeamA'
                                  name='TeamA'
                                  placeholder='Team A'></input>
                              <input
                                  className='TeamB'
                                  type='text'
                                  id='TeamB'
                                  name='TeamB'
                                  placeholder='Team B'></input>
                          </div>
                      ) : null}
                      <label for='categories'>Choose Music Category:</label>

                      <select name='categories' id='categories'>
                          <option value='Naija'>Naija</option>
                          <option value='90sRnB'>90's RnB</option>
                          <option value='20sRnB'>20's RnB</option>
                          <option value='2010sRnB'>2010's RnB</option>
                          <option value='90shiphop'>90's hiphop</option>
                          <option value='20shiphop'>20's hiphop</option>
                          <option value='2010shiphop'>2010's hiphop</option>
                      </select>
                  </div>
              ) : null}
          </div>
          <form className='joinGame'>
              <h3 className='code'>
                  Already have a game code? Click the button below and type your
                  game code
              </h3>
          </form>
          <button className='button' onClick={() => setJoin(!join)}>
              Join
          </button>
          {join ? (
              <input
                  className='joinInput'
                  type='text'
                  id='join'
                  name='join'
                  placeholder='Type in your game code'></input>
          ) : null}
      </div>
  );
};
              

                


export default Home;
