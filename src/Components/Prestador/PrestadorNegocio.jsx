import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { useEffect, useState } from "react";
import {
      actualizarEtapa,
  getAllProducts,
  getOfertasInterrumpidas,
  getOFertasPendientes,
  getOfertasTerminadas,
} from "../../../redux/actions";
import "../Styles/Admin/AdminGeneral.css";

export default function MiNegocio() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const [selectedTab, setSelectedTab] = useState("pendientes"); // pestaña seleccionada

  useEffect(() => {
    dispatch(getOFertasPendientes(userId));
    dispatch(getOfertasInterrumpidas(userId));
    dispatch(getOfertasTerminadas(userId));
  }, [dispatch, userId]);

  const ofertasPendientes = useSelector((state) => state.ofertasPendientes);
  const ofertasTerminadas = useSelector((state) => state.ofertasTerminadas);
  const ofertasInterrumpidas = useSelector(
    (state) => state.ofertasInterrumpidas
  );

  const getCurrentOfertas = () => {
    if (selectedTab === "pendientes") return ofertasPendientes;
    if (selectedTab === "terminadas") return ofertasTerminadas;
    if (selectedTab === "interrumpidas") return ofertasInterrumpidas;
    return [];
  };

  const handleActualizarEtapa = (id) => {
      dispatch(actualizarEtapa(id))
  }

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <NavBar />
      <div className="adminGeneral-container p-8">
        <h1 className="adminGeneral-title text-3xl font-bold mb-8">
          Mi negocio
        </h1>

        {/* Botones para cambiar pestaña */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-full ${
              selectedTab === "pendientes"
                ? "bg-green-500 text-white"
                : "bg-white text-green-500 border border-green-500"
            }`}
            onClick={() => setSelectedTab("pendientes")}
          >
            Activo
          </button>
          <button
            className={`px-6 py-2 rounded-full ${
              selectedTab === "terminadas"
                ? "bg-green-500 text-white"
                : "bg-white text-green-500 border border-green-500"
            }`}
            onClick={() => setSelectedTab("terminadas")}
          >
            Terminado
          </button>
          <button
            className={`px-6 py-2 rounded-full ${
              selectedTab === "interrumpidas"
                ? "bg-green-500 text-white"
                : "bg-white text-green-500 border border-green-500"
            }`}
            onClick={() => setSelectedTab("interrumpidas")}
          >
            Interrumpido
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentOfertas()?.map((op) => (
            <div key={op._id} className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{op.titulo}</h3>
                <span className="text-gray-500">{op.estadoFinal}</span>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Comprador:</label>
                <p>{op.comprador?.nombre || "No asignado"}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Código de pedido:</label>
                <p>{op._id}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Presupuesto:</label>
                <p>{op.presupuesto || "-"}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Etapa:</label>
                <p>
                  {op.etapasRealizadas} de {op.cantidadDeEtapas}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                  Ver Más
                </button>
                {selectedTab === "terminadas" ? (
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                    Agregar imagen
                  </button>
                ) : (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
                    onClick={() => handleActualizarEtapa(op._id)}
                  >
                    Entregar etapa
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
