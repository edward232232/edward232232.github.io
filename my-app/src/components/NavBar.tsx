import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { styles } from "../styles/styles";
import { navLinks } from "../constants";


const NavBar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
    className={`${styles.paddingX} w-full flex-col items-center py-2 fixed 
    top-0 z-20 bg-sky-600 xxs:h-[12vh] justify-center sm:flex sm:justify-between`}
    >
       <div className="flex items-center justify-center w-full sm:w-auto">
        <ul className="flex-row justify-center  mt-2 list-none sm:flex gap-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-blue-500s" : "text-eerieBlack"
              } hover:text-blue-500s text-[21px] font-medium font-mova 
          uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
