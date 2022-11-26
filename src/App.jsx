import React, {useState, useEffect} from 'react';
import {Authorized, Unauthorized} from './pages';
import {WithAuth} from './contexts';

function App(events) {
  const {isLoggedIn, logOut, logIn} = events;

  return (
    <div className="Wrapper">
      {
        isLoggedIn
        ? <Authorized/>
        : <Unauthorized/>
      }
    </div>
  );
}

export default WithAuth(App);
