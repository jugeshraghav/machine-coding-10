import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "lightgrey" : "",
      padding: "5px",
      borderRadius: "8px",
    };
  };
  return (
    <>
      <div className="bg-slate-900 text-white flex flex-col gap-10 p-10 h-full">
        <h1 className="font-bold text-xl">MyInventory</h1>
        <NavLink to="/" style={getStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/departments" style={getStyle}>
          Departments
        </NavLink>
        <NavLink to="/products" style={getStyle}>
          Products
        </NavLink>
      </div>
    </>
  );
};
