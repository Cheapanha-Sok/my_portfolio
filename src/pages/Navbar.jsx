import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/img/Logo.png";
import menu from "../assets/svg/menu.svg"
import closeBar from "../assets/svg/close.svg"
import Toggle from "../shared/Toggle";
export default function Navbar() {
    const Links = [
        { name: "projects" },
        { name: "contact" },
        { name: "about" },
    ];

    const [close, setClose] = useState(false);

    const handleNav = () => {
        setClose(!close);
    };

    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setClose(true);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between p-5 items-center">
            <div className="flex flex-row items-center gap-2">
                <img src={Logo} alt="Logo" className="w-10 md:w-16" />
            </div>
            <ul className="flex-row gap-5 text-xl hidden md:flex">
                {Links.map((link) => (
                    <li key={link.name} className="hover hover:underline">
                        <Link
                            className="cursor-pointer uppercase"
                            to={link.name}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="block md:hidden">
                {close ? <img src={closeBar} alt="closeBar" className="w-5 h-5" onClick={handleNav} /> : <img src={menu} alt="closeBar" className="w-5 h-5" onClick={handleNav} />}

            </div>
            {close && <div className="absolute mx-2 my-16 right-0 top-0 w-[150px] text-sm shadow-xl ease-in-out duration-500 md:hidden rounded-lg">
                <Toggle Contents={Links} />
            </div>}
        </nav>
    );
}
