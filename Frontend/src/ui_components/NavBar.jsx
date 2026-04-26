import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({
  darkMode,
  handleDarkMode,
  isAuthenticated,
  username,
  setIsAuthenticated,
  setUsername,
}) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    setUsername(null);
  }

  function handleContactsClick() {
    if (location.pathname === "/about") {
      // Already on About page, scroll to footer directly
      setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      }, 100);
    } else {
      // Navigate to About page with scroll parameter
      navigate("/about?scrollToFooter=true");
    }
  }

  return (
    <>
      <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </Link>
        <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          {isAuthenticated ? (
            <>
              <li><NavLink
                  to={`/profile/${username}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Привет, {username} !
                </NavLink></li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  О нас
                </NavLink>
              </li>

              <li className="cursor-pointer">
                <button
                  onClick={handleContactsClick}
                  className="bg-none border-none p-0 text-left cursor-pointer"
                >
                  Контакты
                </button>
              </li>

              <li onClick={logout} className="cursor-pointer">
                Выход
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Вход
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Регистрация
                </NavLink>
              </li>
            </>
          )}

          <li className="font-semibold">
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Создать пост
            </NavLink>
          </li>
        </ul>

        <Switch onCheckedChange={handleDarkMode} checked={darkMode} />
        <FaHamburger
          className="text-2xl cursor-pointer hidden max-md:block dark:text-white"
          onClick={() => setShowNavBar((curr) => !curr)}
        />
      </nav>

      {showNavBar && (
        <ResponsiveNavBar
          isAuthenticated={isAuthenticated}
          username={username}
          logout={logout}
        />
      )}
    </>
  );
};

export default NavBar;
