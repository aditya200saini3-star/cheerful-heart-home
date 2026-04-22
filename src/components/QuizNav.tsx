import { Link, useLocation } from "react-router-dom";

const QuizNav = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <nav className="fixed top-0 w-full z-50 glass inner-glow-top">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground hover:scale-105 transition-transform">
          QuizMaster
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link
            to="/"
            className={`transition-all duration-300 hover:scale-105 ${
              isActive("/") && pathname === "/"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/difficulty"
            className={`transition-all duration-300 hover:scale-105 ${
              isActive("/difficulty") || isActive("/categories") || isActive("/quiz")
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Play
          </Link>
        </div>
        <Link
          to="/difficulty"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 md:px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Play Now
        </Link>
      </div>
    </nav>
  );
};

export default QuizNav;