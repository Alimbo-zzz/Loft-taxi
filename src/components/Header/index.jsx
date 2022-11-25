import React, {useState, useEffect} from 'react';
import './styles.css';
import logo_img from '../../assets/images/logo.svg';

function Header(events) {
  const {clickNavItem, activeContent} = events;

  const navList = [
    {name: 'map', value: 'Карта', },
    {name: 'profile', value: 'Профиль',},
    {name: 'out', value: 'Выйти', },
  ]


  return (<>
    <header className="Header">
      <div className="Header__logo"><img src={logo_img}/></div>
      <ul className="Header__navList">
        {navList.map((el, i) => (
          <li
            key={i}
            data-active={activeContent === el.name}
            className="Header__navItem"
            onClick={() => clickNavItem(el)}
          >{el.value}</li>
        ))}
      </ul>
    </header>
  </>);
}

export default Header;
