import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { getVentas, putProduct } from "../../../redux/actions";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function VendedorNegocio() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState({});

  useEffect(() => {
    dispatch(getVentas());
  }, [dispatch]);

  const products = useSelector((state) => state.ventasPorUsuario);

  const handleStateChange = (id, newState) => {
    setSelectedState((prevState) => ({ ...prevState, [id]: newState }));
  };

  const handleEditState = (id) => {
    swal({
      title: "Cambiar el estado?",
      text: `¿Está seguro que desea cambiar el estado de la venta?`,
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((respuesta) => {
      if (respuesta) {
        const nuevoEstado = selectedState[id];
        if (nuevoEstado) {
          dispatch(putProduct(id, { estado: nuevoEstado }));
          swal({
            text: `Se ha modificado el estado a "${nuevoEstado}"`,
            icon: "success",
          });
        } else {
          swal({
            text: "No se ha seleccionado un nuevo estado",
            icon: "error",
          });
        }
      } else {
        swal({
          text: "No se ha modificado el estado",
          icon: "info",
        });
      }
    });
  };

  const filteredProducts = Array.isArray(products?.productos)
    ? products.productos.filter((p) =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-[#f8f3e0] min-h-[100vh]">
      <NavBar />
      <main className="p-28">
        <h1 className="text-3xl text-[#06023D] mb-20">Tu negocio</h1>
        <div>
          <div className="flex mb-10">
            <h2 className="text-2xl text-[#06023D] mr-10">Mis pedidos</h2>
            <input
              type="text"
              className="w-64 rounded-xl"
              placeholder="Filtrar por palabras clave"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="w-full rounded-lg shadow-md overflow-hidden">
            <thead className="text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Código</th>
                <th className="py-2 px-4 text-left">Producto</th>
                <th className="py-2 px-4 text-left">Estado</th>
                <th className="py-2 px-4 text-left">$</th>
                <th className="py-2 px-4 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p._id} className="border-t bg-white">
                  <td className="py-2 px-4 mt-2">{p.id}</td>
                  <td className="py-2 px-4">{p.nombre}</td>
                  <td className="py-2 px-4">
                    <select
                      className="rounded-lg border-gray-300"
                      value={selectedState[p.id] || p.estado}
                      onChange={(e) => handleStateChange(p.id, e.target.value)}
                    >
                      <option value="En preparación">En preparación</option>
                      <option value="En camino">En camino</option>
                      <option value="Listo para retirar">
                        Listo para retirar
                      </option>
                      <option value="Entregado">Entregado</option>
                      <option value="Rechazado">Rechazado</option>
                    </select>
                  </td>
                  <td className="py-2 px-4">${p.precio}</td>
                  <td className="py-2 px-4">
                    {selectedState[p.id] &&
                      selectedState[p.id] !== p.estado && (
                        <button
                          className="bg-[#EA8C06] text-white rounded-md px-4 py-1"
                          onClick={() => handleEditState(p.id)}
                        >
                          Modificar estado
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
