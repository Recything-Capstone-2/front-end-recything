import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const MenuActive = ({ label, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `text-sm md:text-base font-medium ${
          isActive ? "text-primary-05 border-b-2 border-primary-05" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
};