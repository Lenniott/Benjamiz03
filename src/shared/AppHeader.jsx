import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export function AppHeader() {
  const [menu, setMenu] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavMenuItem = ({ label, link }) => (
    <>
      <Link
        to={link}
        aria-label={label}
        className="block text-left text-lg text-primary-dark sm:py-2 p-2 hover:bg-slate-200 rounded-lg duration-500"
      >
        {label}
      </Link>
      <hr className="border-ternary-light " />
    </>
  );

  const NavList = (props) => (
    <>
      <Link
        to={props.link}
        className="block text-left text-lg font-medium text-primary-dark hover:underline underline-offset-4 sm:mx-4 mb-2 sm:py-2 duration-500"
        aria-label={props.label}
      >
        {props.label}
      </Link>
    </>
  );

  const navList = [
    ["/", "Home", uuidv4()],
    ["/about", "Me", uuidv4()],
   // ["/works", "Works", uuidv4()],
    ["/experience", "Experience", uuidv4()],
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sticky top-0 z-50 w-full"
    >
      <div className="bg-secondary-light z-10 w-full">
        <div className="flex max-w-screen-xl mx-auto px-6 justify-between items-center py-2">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" >
                <div className="flex justify-center items-center gap-2 font-medium text-xs">
                  <div className="grid p-6 bg-primary-dark shadow-sm rounded-lg h-7 w-7 place-content-center">
                    <div className="flex justify-center text-primary-light">
                      Benja
                    </div>
                    <div className="flex justify-center text-primary-light">
                      miz
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:hidden" ref={menuRef}>
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none w-12 h-12 font-general-medium flex justify-center items-center text-lg shadow-md rounded-lg bg-primary-light hover:bg-primary-dark text-se hover:text-primary-light hover:translate-y-0.5 hover:scale-110 duration-500"
              aria-label="Hamburger Menu"
            >
              {showMenu ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
            <div
              className={
                showMenu
                  ? "absolute right-0 m-0 mt-2 pb-8 sm:ml-4 sm:mt-3 md:flex px-5 py-3 pb-full sm: z-10 p-0 justify-between items-center shadow-lg sm:shadow-none bg-primary-light rounded-lg w-full "
                  : "hidden"
              }
            >
              {navList.map((item) => (
                <div key={item[2]} onClick={toggleMenu}>
                  <NavMenuItem label={item[1]} link={item[0]} />
                  <hr className="border-slate-100" />
                </div>
              ))}
            </div>
          </div>
          <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            {navList.map((item) => (
              <div key={item[2]} >
                <NavList label={item[1]} link={item[0]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
