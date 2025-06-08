import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";

const AdminHeader = ({ setOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b border-gray-200">
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden bg-black text-white cursor-pointer"
        size="lg"
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="bg-black text-white cursor-pointer" size="lg">
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
