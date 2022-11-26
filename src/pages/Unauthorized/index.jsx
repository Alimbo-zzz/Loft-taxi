import React, {useState, useEffect} from 'react';
import {AuthForm} from '../../components';
import logo_img from '../../assets/images/logo_1.svg';
import map_img from '../../assets/images/map.png';
import {WithAuth} from '../../contexts';
import './styles.css';

function Unauthorized(events) {
  const {logIn} = events;

  const send = (e) => {
    (e.sendType === "SignIn") && logIn(e.mail, e.password).catch(err => alert(err));
  }

  return (<>
    <div className="Unauthorized">
      <div className="Unauthorized__block" data-name='logo'>
        <img src={logo_img}/>
      </div>
      <div className="Unauthorized__block" data-name='form'>
        <img src={map_img}/>
        <AuthForm formSend={send}/>
      </div>
		</div>
  </>);
}

export default WithAuth(Unauthorized);
