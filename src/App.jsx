import React, {useState, useEffect} from 'react';
import {Authorized, Unauthorized} from './pages';

function App() {
  const [isAuthorized, setAuthorized] = useState(false);



  return (
    <div className="Wrapper">
      {
        isAuthorized
        ? <Authorized changeAuth={setAuthorized}/>
        : <Unauthorized changeAuth={setAuthorized}/>
      }
    </div>
  );
}

export default App;
