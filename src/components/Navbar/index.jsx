import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-start">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          🏠 Início
        </Link>

        <Link
          to="/favoritos"
          className="text-xl text-pink-500 font-semibold hover:text-pink-700 transition-colors duration-300"
        >
          ⭐ Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
