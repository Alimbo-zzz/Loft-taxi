import React, {useState, useEffect} from 'react';
import './styles.css';
import {Header, Map, Profile} from '../../components';
import map_img from '../../assets/images/map.png';

function Authorized(events) {
  const {changeAuth} = events;
  const [content, setContent] = useState('map');

  const pages = {
    map: <Map/>,
    profile: <Profile/>,
  }


  function clickNavItemFunc(e){
    if(e.name === 'out') changeAuth(false);
    else setContent(e.name);
  }

  return (<>
    <div className="Authorized">
			<Header clickNavItem={clickNavItemFunc} activeContent={content}/>
      <img src={map_img} className='map-bg'/>
      {pages[content]}
		</div>
  </>);
}

export default Authorized;
