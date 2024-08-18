import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            Main
          </NavLink>
          <NavLink
            to="/uncontrolled_form"
            className={({ isActive }) =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            Uncontrolled Form
          </NavLink>
          <NavLink
            to="/react_form"
            className={({ isActive }) =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            React Hook Form
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
