import { Link } from "react-router-dom";
import { BsGithub } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useEffect, useState } from "react";

import './styles.scss';
import Button from "../Button";

function Navbar() {
  const [handleButton, setHandleButton] = useState('light');

  useEffect(() => {
    const isTheme = localStorage.getItem('theme');

    if (!isTheme) {
      localStorage.setItem('theme', 'light');
      return;
    }

    if (isTheme === 'dark') {
      setHandleButton('light');
      return;
    }

    setHandleButton('dark');
  }, []);

  const theme = localStorage.getItem('theme');

  function handleTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      setHandleButton('dark');
      localStorage.setItem('theme', 'light');
    }

    if (theme === 'light') {
      setHandleButton('light');
      localStorage.setItem('theme', 'dark');
    }

    window.location.reload();
  }

  return (
    <nav className="navbar" id={theme === 'dark' ? 'navbar--dark' : 'navbar--light'}>
      <ul className="navbar-list">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/settoken'>Token</Link></li>
        <li><Link to='https://github.com/reecco/openai-frontend'><BsGithub /></Link></li>
      </ul>
      <button
        className="btn-theme"
        id={theme === 'dark' ? 'btn--dark' : 'btn-light'}
        onClick={handleTheme}
      > {handleButton === 'light' ? (<MdLightMode/>) : (<MdDarkMode/>)}
      </button>
    </nav>
  );
}

export default Navbar;