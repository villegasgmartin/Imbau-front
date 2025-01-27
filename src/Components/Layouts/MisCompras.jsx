import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { getCompras } from "../../../redux/actions";
import "../Styles/Layouts/MisCompras.css"
import SearchIcon from "../../assets/search.png"

export default function MisCompras() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

  useEffect(() => {
    dispatch(getCompras());
  }, [dispatch]);

  const products = useSelector((state) => state.comprasPorUsuario);
  console.log(products, "productos");

  // Filtrar productos según el término de búsqueda
  const filteredProducts = Array.isArray(products?.productos)
    ? products.productos.filter((p) =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <NavBar />
      <div className="misCompras-container">
        <h1 className="misCompras-title">Mis compras</h1>
        <div className="misCompras-search">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="mb-4 p-2 border rounded-md w-full max-w-md"
            value={searchTerm} // Vincular el estado al input
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado al cambiar el input
          />
          <button className="misCompras-search-button">
            <img src={SearchIcon} alt="Buscar" className="misCompras-search-icon" />
          </button>
        </div>
        <div className="misCompras-divider"></div>
        <div className="misCompras-table-container">
          <table  className="w-full rounded-lg shadow-md overflow-hidden border-separate" style={{ borderSpacing: "0 15px" }}>
            <thead className="text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Código</th>
                <th className="py-2 px-4 text-left">Producto</th>
                <th className="py-2 px-4 text-left">Estado</th>
                <th className="py-2 px-4 text-left">$</th>
                
              </tr>
            </thead>
            <tbody  style={{ color: "#06023D" }}>
              {filteredProducts.map((p) => (
                <tr key={p._id}  className="border-t bg-white rounded-lg" style={{ borderRadius: "30px" }}>
                  <td className="py-2 px-4 mt-2">{p.id}</td>
                  <td className="py-2 px-4">{p.nombre}</td>
                  <td className="py-2 px-4">
                  {p.estado}
                  </td>
                  <td className="py-2 px-4">${p.precio}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
