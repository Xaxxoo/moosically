
import React, { useState } from 'react';
const Home = () => {
  const [start, setStart] = useState(false);
 

    
  return (
      <div className='Banner'>
          <div>
              <button onClick={() => setStart(!start)}>Create</button>
              {start ? (
                  <div>
                      <p>...</p>
                  </div>
              ) : null} 
          </div>
          <button >Join</button>
          
      </div>
  );
};
              

                


export default Home;
