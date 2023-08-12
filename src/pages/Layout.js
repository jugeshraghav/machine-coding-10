import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div className="relative flex  h-full gap-8">
        <div className="h-full fixed top-0 left-0 ">
          <Navbar />
        </div>

        <div className="h-full w-full ml-56">
          <Outlet />
        </div>
      </div>
    </>
  );
};
