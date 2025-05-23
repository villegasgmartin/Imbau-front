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
import "../Styles/Layouts/MisContrataciones.css"

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
      <div className="misContrataciones-container">
      
        <h1 className="misContrataciones-title">
          Mis contrataciones
        </h1>

        {/* Botones para cambiar pestaña */}
        <div className="misContrataciones-buttonContainer">
          <button
            className={` ${
              selectedTab === "pendientes"
                ? "misContrataciones-buttonActive"
                : "misContrataciones-buttonInactive"
            }`}
            onClick={() => setSelectedTab("pendientes")}
          >
            Activo
          </button>
          <button
            className={` ${
              selectedTab === "terminadas"
                ? "misContrataciones-buttonActive"
                : "misContrataciones-buttonInactive"
            }`}
            onClick={() => setSelectedTab("terminadas")}
          >
            Terminado
          </button>
          <button
            className={` ${
              selectedTab === "interrumpidas"
                ? "misContrataciones-buttonActive"
                : "misContrataciones-buttonInactive"
            }`}
            onClick={() => setSelectedTab("interrumpidas")}
          >
            Interrumpido
          </button>
        </div>
        <div className="misContrataciones-divider"></div>
        {/* Cards */}
        <div className="misContrataciones-cardsContainer">
          {getCurrentOfertas()?.map((op) => (
            <div key={op._id} className="bg-white rounded-xl shadow-md p-6">
              <div className="misContrataciones-subtitleContainer">
                <h3 className="misContrataciones-subtitle">{op.titulo}</h3>
                <span
                  className={`misContrataciones-estado ${
                    op.estadoFinal === "Pendiente"
                      ? "misContrataciones-estadoPendiente"
                      : op.estadoFinal === "terminado"
                      ? "misContrataciones-estadoTerminado"
                      : op.estadoFinal === "interrumpido"
                      ? "misContrataciones-estadoInterrumpido"
                      : ""
                  }`}
                >
                  {op.estadoFinal}
                </span>
              </div>
              <div className="misContrataciones-infoContainer">
                <div>
                  <label className="misContrataciones-label">Comprador:</label>
                  <p className="misContrataciones-info">{op.comprador?.nombre || "No asignado"}</p>
                </div>
                <div>
                  <label className="misContrataciones-label">Código de pedido:</label>
                  <p className="misContrataciones-info">{op._id}</p>
                </div>
                <div>
                  <label className="misContrataciones-label">Presupuesto:</label>
                  <p className="misContrataciones-info">{op.presupuesto || "-"}</p>
                </div>
                <div>
                  <label className="misContrataciones-label">Etapa:</label>
                  <p className="misContrataciones-info">{op.etapasRealizadas} de {op.cantidadDeEtapas}</p>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button
                  className="misContrataciones-verMas"
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
                <h2 className="misContrataciones-modal-title">
                  {selectedOferta.titulo}
                </h2>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Estado:</strong> {selectedOferta.estadoFinal}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Comprador:</strong>{" "}
                  {selectedOferta.comprador?.nombre || "No asignado"}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Prestador:</strong>{" "}
                  {selectedOferta.proveedor?.nombre || "No asignado"}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Descripcióm:</strong>{" "}
                  {selectedOferta.descripcion || "No asignado"}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Código de pedido:</strong> {selectedOferta._id}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Presupuesto:</strong>{" "}
                  {selectedOferta.presupuesto || "-"}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Etapas:</strong> {selectedOferta.etapasRealizadas} de{" "}
                  {selectedOferta.cantidadDeEtapas}
                </p>
                <p className="misContrataciones-modal-info">
                  <strong className="misContrataciones-modal-label">Tiempo por etapas:</strong>{" "}
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
