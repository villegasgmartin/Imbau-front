import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/actions";
import AdminNavBar from "../Layouts/AdminNavBar";
import "../Styles/AdminGeneral.css"
import SearchIcon from "../../assets/search.png"

export default function AdminGeneral() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);
  

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <AdminNavBar />
      <div className="max-w-7xl mx-auto p-4" style={{paddingBottom: "100px"}}>
        <h1 className="adminGeneral-title">
          Administración General
        </h1>
        <div className="adminGeneral-search">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="adminGeneral-search-input"
          />
          <button className="adminGeneral-search-button">
            <img src={SearchIcon} alt="Buscar" className="adminGeneral-search-icon" />
          </button>
        </div>
        <div className="adminGeneral-button-container">
          <button className="adminGeneral-button01">Todos</button>
          <button className="adminGeneral-button02">Servicios</button>
          <button className="adminGeneral-button02">Productos</button>
        </div>
        <div class="adminGeneral-divider"></div>
        <table className="w-full rounded-lg overflow-hidden border-separate" style={{ borderSpacing: "0 15px" }}>
          <thead className="text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Código</th>
              <th className="py-2 px-4 text-left">Descripción</th>
              <th className="py-2 px-4 text-left">Datos Bancarios</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
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
                  <button className="adminGeneral-button03">
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
