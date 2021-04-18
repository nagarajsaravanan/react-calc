import React, { useState } from 'react';
import '../assets/scss/theme.css'

const Theme = () => {
  const [lightTheme, setLightTheme] = useState(true);

  const changeTheme = () => {
    if(lightTheme){
      document.getElementsByTagName('body')[0].classList.remove('light-theme');
      document.getElementsByTagName('body')[0].classList.add('dark-theme');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('dark-theme');
      document.getElementsByTagName('body')[0].classList.add('light-theme');
    }
    setLightTheme(!lightTheme);
  }
  return (
    <div className="theme-div">
      <label className="switch">
        <input type="checkbox" onChange={changeTheme} defaultChecked={lightTheme}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Theme;
