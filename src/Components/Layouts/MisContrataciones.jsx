import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { useEffect, useRef, useState } from "react";
import {
      actualizarEtapa,
  agregarImagenOferta,
  borrarOferta,
  getAllProducts,
  getOfertasInterrumpidas,
  getOFertasPendientes,
  getOfertasTerminadas,
  putEstadoOferta,
} from "../../../redux/actions";
import "../Styles/Admin/AdminGeneral.css";

export default function MisContrataciones() {
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
    const handleActualizarEstado = (id) => {
      dispatch(putEstadoOferta(id));
    };
      const handleBorrarOferta = (id) => {
        dispatch(borrarOferta(id));
      };
  
const [selectedOferta, setSelectedOferta] = useState(null);
const [showModal, setShowModal] = useState(false);


const handleVerMas = (oferta) => {
  setSelectedOferta(oferta);
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
  setSelectedOferta(null);
};

const fileInputRef = useRef(null);

const handleFileUploadClick = (id) => {
  // Guardamos el ID actual en una variable para subir luego
  setOfertaIdParaImagen(id);
  fileInputRef.current?.click();
};

const [ofertaIdParaImagen, setOfertaIdParaImagen] = useState(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file && ofertaIdParaImagen) {
    dispatch(agregarImagenOferta(ofertaIdParaImagen, file));
    setOfertaIdParaImagen(null);
  }
};


  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <NavBar />
      <div className="adminGeneral-container p-8">
      
        <h1 className="adminGeneral-title text-3xl font-bold mb-8">
          Mis contrataciones
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
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
                  onClick={() => handleVerMas(op)}
                >
                  Ver Más
                </button>         
           

             
              </div>
            </div>
          ))}
          {showModal && selectedOferta && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  onClick={closeModal}
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedOferta.titulo}
                </h2>
                <p>
                  <strong>Estado:</strong> {selectedOferta.estadoFinal}
                </p>
                <p>
                  <strong>Comprador:</strong>{" "}
                  {selectedOferta.comprador?.nombre || "No asignado"}
                </p>
                <p>
                  <strong>Prestador:</strong>{" "}
                  {selectedOferta.proveedor?.nombre || "No asignado"}
                </p>
                <p>
                  <strong>Descripcióm:</strong>{" "}
                  {selectedOferta.descripcion || "No asignado"}
                </p>
                <p>
                  <strong>Código de pedido:</strong> {selectedOferta._id}
                </p>
                <p>
                  <strong>Presupuesto:</strong>{" "}
                  {selectedOferta.presupuesto || "-"}
                </p>
                <p>
                  <strong>Etapas:</strong> {selectedOferta.etapasRealizadas} de{" "}
                  {selectedOferta.cantidadDeEtapas}
                </p>
                <p>
                  <strong>Tiempo por etapas:</strong>{" "}
                  {selectedOferta.tiempoPorEtapas || "-"}
                </p>
                {selectedOferta.estadoFinal === 'terminado' && (<img src={selectedOferta.imagen} alt="" width={200} />)}
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
