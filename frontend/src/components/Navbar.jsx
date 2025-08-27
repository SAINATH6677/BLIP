import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import * as Icons from "lucide-react"; // ✅ Import all icons as Icons

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side */}
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icons.MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg font-bold">BLiP</h1>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            to="/settings"
            className="btn btn-sm gap-2 transition-colors flex items-center"
          >
            <Icons.Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="btn btn-sm gap-2 flex items-center"
              >
                <Icons.User className="w-5 h-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                className="btn btn-sm gap-2 flex items-center"
                onClick={logout}
              >
                <Icons.LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
