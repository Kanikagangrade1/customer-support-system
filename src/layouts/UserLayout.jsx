import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex">
      <UserSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;