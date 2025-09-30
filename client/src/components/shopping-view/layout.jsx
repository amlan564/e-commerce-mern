import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
