import { useDispatch } from "react-redux";
import logo from "../../assets/Logotipo crema.png";
import userFem from "../../assets/UserFem.png";
import { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { logout } from "../../../redux/actions";

export default function AdminNavBar() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");
  const rol = localStorage.getItem("rol");
  const dispatch = useDispatch();

  const [navbar, setNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("rol");
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-[#06023D] shadow z-50 sm:rounded-lg opacity-90 text-white">
      {/* Mobile Navbar */}
      <div className="justify-between px-4 mx-auto sm:items-center md:px-8 sm:hidden">
        <div className="flex items-center justify-around py-3 md:py-5 md:block">
          <img src={logo} alt="not found" className="w-36 sm:w-48" />

          <button
            className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className={`flex-1 pb-3 ${navbar ? "block" : "hidden"}`}>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <a
              href="/admin"
              className="mb-4 sm:text-2xl sm:mr-6 hover:underline"
            >
              Mi Panel
            </a>
            <a
              href="/usuarios"
              className="mb-4 sm:text-2xl sm:mr-6 hover:underline"
            >
              Usuarios
            </a>
            <div className="relative mb-4 sm:text-2xl sm:mr-6">
              <div
                className="hover:underline cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Configuración
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                  <a
                    href="/espacio-publicitario"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Espacio Publicitario
                  </a>
                  <a
                    href="/promociones-bancarias"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Promociones Bancarias
                  </a>
                  <a
                    href="/categorias"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Categorías
                  </a>
                </div>
              )}
            </div>
            <button onClick={handleLogOut} className="text-white sm:text-xl">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex sm:justify-evenly items-center">
        <a href="/">
          <img src={logo} alt="not found" className="w-36 sm:w-36" />
        </a>
        <div className="flex sm:flex-row">
          <a href="/admin" className="mb-4 sm:text-xl sm:mr-6 hover:underline">
            Panel
          </a>
          <a
            href="/usuarios"
            className="mb-4 sm:text-xl sm:mr-6 hover:underline"
          >
            Usuarios
          </a>
          <div className="relative sm:text-xl sm:mr-6">
            <div
              className="hover:underline cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Configuración
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                <a
                  href="/espacio-publicitario"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Espacio Publicitario
                </a>
                <a
                  href="/promociones-bancarias"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Promociones Bancarias
                </a>
                <a
                  href="/categorias"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Categorías
                </a>
              </div>
            )}
          </div>
        </div>
        <button onClick={handleLogOut} className="text-white sm:text-xl ml-4">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
