import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import ModalLogin from '../../components/Auth/ModalLogin'
import ModalRegister from '../../components/Auth/ModalRegister'
import AuthService from '../../services/AuthService'
import { IconContext } from 'react-icons';
import * as RiIcons from 'react-icons/ri';
import './RegistrationWindow.css';
import './UserTools.css';
import './Navbar.css';


function Navbar() {

  const [sideBar, setSidebar] = useState(false);

  const [isLogged, setisLogged] = useState(false);
  const [modalIsOpenLog, setIsOpenLog] = useState(false);

  const [modalIsOpenReg, setIsOpenReg] = useState(false);

  function logout() {
    AuthService.logout();
  }

  const showSidebar = () => {
    setSidebar(!sideBar);
  }


  return (
    <><div>
      <IconContext.Provider value={{ color: 'red' }}>
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onMouseOver={showSidebar} onMouseOut={showSidebar}>

            <div className="navbar-toggle">
            

              <div className="player-info">
                {/* <span>{userCtx.name}</span>
                <span>Your coins: {userCtx.credits}</span> */}
              </div>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}

              <div className='userTools' >
                <button className="buttonR" onClick={() => setIsOpenReg(true)} >
                <RiIcons.RiRegisteredFill />
                  <span className="buttText">Sign up</span>
                </button>

                <button className="buttonR" onClick={() => setIsOpenLog(true)} >
                <RiIcons.RiLoginBoxFill />
                  <span className="buttText">Login</span>
                </button>
              </div>
              {/* : userCtx && (
                <div className='userTools' >
                  <button className="buttonR" onClick={logout} >
                    <span>Logout</span>
                  </button>
                </div> */}

          </ul>
        </nav>
        <ModalRegister isOpen={modalIsOpenReg} requestClose={setIsOpenReg} setIsOpenReg={setIsOpenReg} />
        <ModalLogin isOpen={modalIsOpenLog} requestClose={setIsOpenLog} setIsOpenLog={setIsOpenLog} setisLogged={setisLogged} />
        </IconContext.Provider>
    </div>
    </>
  )
}

export default Navbar
