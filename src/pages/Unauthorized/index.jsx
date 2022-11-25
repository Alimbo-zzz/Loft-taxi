import React, {useState, useEffect} from 'react';
import {AuthForm} from '../../components';
import logo_img from '../../assets/images/logo_1.svg';
import map_img from '../../assets/images/map.png';
import './styles.css';

function Unauthorized(events) {
  const {changeAuth} = events;



  return (<>
    <div className="Unauthorized">
      <div className="Unauthorized__block" data-name='logo'>
        <img src={logo_img}/>
      </div>
      <div className="Unauthorized__block" data-name='form'>
        <img src={map_img}/>
        <AuthForm formSend={e => changeAuth(true)}/>
      </div>
		</div>
  </>);
}

export default Unauthorized;
