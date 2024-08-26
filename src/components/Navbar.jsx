import { useState, useEffect, useRef } from "react";
import menu from "../assets/svg/menu.svg";
import closeBar from "../assets/svg/close.svg";
import Toggle from "../shared/Toggle";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ toggleDarkTheme, isDarkMode }) {
  const Links = [
    { name: "projects" },
    { name: "contact" },
    { name: "about" },
    { name: "experience" },
  ];

  const [close, setClose] = useState(false);

  const handleNav = () => {
    setClose(!close);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setClose(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between p-5 items-center" ref={navRef}>
      <div className="flex flex-row items-center gap-2">
        <h1 className="capitalize text-xl font-semibold">Sok Cheapanha</h1>
        {isDarkMode ? (
            <MdLightMode
              className="text-blue-500 text-2xl cursor-pointer"
              onClick={toggleDarkTheme}
            />
          ) : (
            <MdDarkMode
              className="text-yellow-500 text-2xl cursor-pointer"
              onClick={toggleDarkTheme}
            />
          )}
      </div>
      <nav className="flex-row gap-5 text-xl hidden md:flex items-center">
        {Links.map((link) => (
          <a href={`#${link.name}`} className="uppercase" key={link.name}>
            {link.name}
          </a>
        ))}
      </nav>
      <div className="block md:hidden">
        {close ? (
          <img
            src={closeBar}
            alt="closeBar"
            className="w-5 h-5"
            onClick={handleNav}
          />
        ) : (
          <img src={menu} alt="menu" className="w-5 h-5" onClick={handleNav} />
        )}
      </div>
      {close && (
        <div className="absolute mx-2 my-16 right-0 top-0 w-[150px] text-sm shadow-xl ease-in-out duration-500 md:hidden rounded-lg bg-white dark:bg-gray-800">
          <Toggle Contents={Links} />

        </div>
      )}
    </header>
  );
}
