import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logotext } from '../assets';
import logo from '../assets/logo/logoMe.jpeg';

const NavigationBarComponent = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);//

  return (
    <nav
      className={`${styles.paddingX} w-full flex-col items-center py-2 fixed 
      top-0 z-20 bg-white sm:opacity-[0.97] xxs:h-[12vh] justify-center`}>

  <ul className="flex-row justify-center hidden mt-2 list-none sm:flex gap-14">
    {navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`${
          active === nav.title ? 'text-french' : 'text-eerieBlack'
        } hover:text-taupe text-[21px] font-medium font-mova 
          uppercase tracking-[3px] cursor-pointer nav-links`}
        onClick={() => setActive(nav.title)}>
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>

        
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}// your logo comes here
            alt="logo"
            className="sm:w-[100px] sm:h-[100px] w-[45px] h-[45px] object-contain"
          />
          <span className ="text-eerieBlack hover:text-taupe text-[21px] font-medium font-mova 
          uppercase tracking-[3px] ">Eddie Kong</span>

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />

        </Link>
   

        {/* mobile */}
        <div className="flex items-center justify-end flex-1 w-screen sm:hidden">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
   
    </nav>
  );
};

export default NavigationBarComponent;
