import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../redux/actions";
import AdminNavBar from "../Layouts/AdminNavBar";
import "../Styles/AdminGeneral.css"
import SearchIcon from "../../assets/search.png"

export default function AdminGeneral() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);
console.log(products, 'pr');

  // Filtrar productos según el término de búsqueda
  const filteredProducts = products?.filter((p) =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <AdminNavBar />
      <div className="adminGeneral-container">
        <h1 className="adminGeneral-title">
          Administración General
        </h1>

        <input
          type="text"
          placeholder="Buscar productos..."
          className="mb-4 p-2 border rounded-md w-full max-w-md"
          value={searchTerm} // Vincular el estado al input
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado al cambiar el input
        />

        <div className="mb-4 flex gap-4">
          <button className="px-4 py-2 ">Todos</button>
          <button className="px-4 py-2 ">Productos</button>
          <button className="px-4 py-2 ">Servicios</button>
        </div>

        <table className="w-full rounded-lg shadow-md overflow-hidden">
          <thead className="text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Código</th>
              <th className="py-2 px-4 text-left">Descripción</th>
              <th className="py-2 px-4 text-left">Datos Bancarios</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((p) => (
              <tr key={p._id} className="border-t bg-white">
                <td className="py-2 px-4 mt-2">{p._id}</td>
                <td className="py-2 px-4">{p.nombre}</td>
                <td className="py-2 px-4">
                  <p>{p.usuario.nombre}</p>
                  <p>{p.usuario.alias}</p>
                  <p>{p.usuario.banco}</p>
                </td>
                <td className="py-2 px-4">{p.estado}</td>
                <td className="py-2 px-4">
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                    Dar de baja
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
            <tbody style={{ color: "#06023D" }}>
              {products?.map((p) => (
                <tr key={p._id} className="bg-white border rounded-lg" style={{ borderRadius: "30px" }}>
                  <td className="py-2 px-4">{p._id}</td>
                  <td className="py-2 px-4">{p.nombre}</td>
                  <td className="py-2 px-4">
                    <p>{p.usuario.nombre}</p>
                    <p>{p.usuario.alias}</p>
                    <p>{p.usuario.banco}</p>
                  </td>
                  <td className="py-2 px-4">{p.estado}</td>
                  <td className="py-2 px-4">
                    <button className="adminGeneral-button03" style={{whiteSpace: "nowrap"}}>
                      Dar de baja
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
}
