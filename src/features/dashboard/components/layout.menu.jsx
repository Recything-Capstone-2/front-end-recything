import { NavLink } from "react-router-dom";

export const Menu = ({ label, href, icon }) => {

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center justify-start py-1.5 px-2 text-base font-medium rounded-lg gap-x-3 font-inter ${
          isActive ? "bg-gray-100 text-gray-900" : "hover:bg-gray-100 text-gray-500"
        }`
      }
    >
      <div className="text-primary-05">
        {icon}
      </div>
      {label}
    </NavLink>
  );
};