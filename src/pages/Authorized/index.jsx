import React, {useState, useEffect} from 'react';
import './styles.css';
import {Header, Map, Profile} from '../../components';
import {WithAuth} from '../../contexts';
import map_img from '../../assets/images/map.png';

function Authorized(events) {
  const {logOut} = events;
  const [content, setContent] = useState('map');

  const pages = {
    profile: <Profile/>,
  }


  function clickNavItemFunc(e){
    if(e.name === 'out'){
      window.confirm('Вы точно хотите выйти?') && logOut();
    }
    else setContent(e.name);
  }

  return (<>
    <div className="Authorized">
			<Header clickNavItem={clickNavItemFunc} activeContent={content}/>
      <div className="Authorized__container">
        <Map/>
        {pages[content] && (
          <div className="Page-overlay" onClick={e => setContent('map')}>
            <div className="Page-content" onClick={e => e.stopPropagation()}>{pages[content]}</div>
          </div>
        )}
      </div>
    </div>
  </>);
}

export default WithAuth(Authorized);
