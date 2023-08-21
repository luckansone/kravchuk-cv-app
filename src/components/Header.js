import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
import About from "./About";
import linkedInIcon from "../img/linkedin-icon.png";
import githubIcon from "../img/github-icon.png";
import telegramIcon from "../img/telegram-icon.png";
import instagramIcon from "../img/instagram-icon.png";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.app.isModalOpen);
  const toggleMenuRef = useRef();
  const getLinkClass = ({ isActive }) => {
    return isActive ? classes.active : undefined;
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openModalHandler = () => {
    dispatch(actions.toggleModal());
  };

  const onToggleMenuHandler = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showMobileMenu &&
        toggleMenuRef.current &&
        !toggleMenuRef.current.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenuRef, setShowMobileMenu, showMobileMenu]);

  return (
    <>
      <header className={classes.header}>
        <nav>
          <div
            className={`${classes.toggle} ${
              showMobileMenu ? classes["toggle-active"] : ""
            }`}
            onClick={onToggleMenuHandler}
            ref={toggleMenuRef}
          >
            <div className={`${classes.line} ${classes["line-1"]}`}></div>
            <div className={`${classes.line} ${classes["line-2"]}`}></div>
            <div className={`${classes.line} ${classes["line-3"]}`}></div>
          </div>
          <ul
            className={`${classes.list} ${classes.main} ${
              showMobileMenu ? classes.show : ""
            }`}
          >
            <li>
              <NavLink
                to="/kravchuk-cv-app"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["main-link"]}`
                    : classes["main-link"]
                }
              >
                <div>
                  <span>My CV App</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="profile" className={getLinkClass}>
                Profile
              </NavLink>
            </li>
            <li>
              <button type="button" onClick={openModalHandler}>
                About App
              </button>
            </li>
          </ul>
          <div className={classes["social-networks"]}>
            <ul className={classes.list}>
              <li>
                <a
                  href="https://www.linkedin.com/in/olena-kravchuk-47b896192/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/luckansone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Github icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.me/screamofdolphin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegramIcon} alt="Telegram icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lkrav_o?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isModalOpen && <About />}
    </>
  );
};

export default Header;
