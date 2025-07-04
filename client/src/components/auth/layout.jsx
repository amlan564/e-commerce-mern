import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
