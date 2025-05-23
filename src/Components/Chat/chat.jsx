import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../Chat/chat.css";

import {
  getChatsCliente,
  // getChatsEscort,
  getMensajesChat,
  enviarMensaje,
  deleteChat,
  postOferta,
} from "../../../redux/actions"; // Asegúrate de que la ruta sea correcta

export default function Chat() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats); // Acceder a los chats desde Redux
  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  const [rol, setRol] = useState(null); // Nueva variable de estado para el rol
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(false); // Nuevo estado para actualizar mensajes
  const [mostrarSidebar, setMostrarSidebar] = useState(true); // Estado para mostrar/ocultar el sidebar
  const [crearOfertaOpen, setCrearOfertaOpen] = useState(false);

  useEffect(() => {
    const storedRol = localStorage.getItem("rol");
    setRol(storedRol);
    if (storedRol === "USER_BUYER") {
      dispatch(getChatsCliente());
    } else if (storedRol === "USER_SERVICE") {
      dispatch(getChatsCliente());
      // dispatch(getChatsEscort());
    } else {
      setMensajeError("Error: Rol no válido o no definido.");
    }
  }, [dispatch]);

  useEffect(() => {
    if (chatSeleccionado) {
      dispatch(getMensajesChat(chatSeleccionado._id));
    }
  }, [dispatch, chatSeleccionado, refreshTrigger]);

  const handleSeleccionarChat = (chat) => {
    setChatSeleccionado(chat);
    setMostrarSidebar(false); // Ocultar la lista de chats después de seleccionar uno
  };

  const handleEnviarMensaje = async () => {
    if (!nuevoMensaje.trim()) return;
    try {
      const chatId = chatSeleccionado._id;
      //  const telefono = chatSeleccionado.telefono;
      //  const nombreUsuario = chatSeleccionado.usuarioNombre
      const nuevoMensajeObj = {
        mensaje: nuevoMensaje,
        fecha: new Date().toISOString(),
        tipo: "usuario", // Ajusta según corresponda
      };

      await enviarMensaje({ chatId, mensaje: nuevoMensaje });

      // Actualiza el estado sin recargar la página
      setChatSeleccionado((prevChat) => ({
        ...prevChat,
        mensajes: [...prevChat.mensajes, nuevoMensajeObj],
      }));

      setNuevoMensaje(""); // Limpiar input
    } catch (err) {
      console.error(err);
      setMensajeError("Error al enviar el mensaje.");
    }
  };

  const handleBorrarChat = async (id) => {
    try {
      dispatch(deleteChat(id))
        .then(() => {
          alert("Chat eliminado exitosamente");
          setChatSeleccionado(null); // Deselecciona el chat eliminado
          dispatch(getChatsCliente()); // Actualiza la lista de chats
        })
        .catch((err) => {
          console.error(err);
          alert(data.error || "Error al eliminar el chat");
        });
    } catch (error) {
      console.error("Error al eliminar el chat:", error);
      alert("Error al eliminar el chat");
    }
  };

  const [oferta, setOferta] = useState({
    titulo: "",
    descripcion: "",
    resultado: "",
    duracion: "",
    etapas: false,
    etapasRealizadas: 0,
    cantidadDeEtapas: 0,
    presupuesto: 0,
    tiempoPorEtapas: "",
  });
const handleCrearOferta = () => {
  if (!chatSeleccionado || !chatSeleccionado.usuarioComprador) {
  
    
    alert("Debe seleccionarse un chat válido.");
    return;
  }

  const payload = {
    ...oferta,
    etapas: oferta.etapas === "true" || oferta.etapas === true, // Convertir string a boolean si es necesario
    cantidadDeEtapas: parseInt(oferta.cantidadDeEtapas),
    presupuesto: parseInt(oferta.presupuesto),
    idComprador: chatSeleccionado.usuarioComprador, // Usar el ID del comprador desde el chat seleccionado
  };

  dispatch(postOferta(payload));
  setCrearOfertaOpen(false);
  alert("Oferta enviada correctamente");
};


  return (
    <div className="chat-container">
      {/* Botón para mostrar la lista de chats (visible solo en mobile) */}
      <div className="btn-ver-container">
        <button
          className="btn-ver-chats"
          onClick={() => setMostrarSidebar((prev) => !prev)}
        >
          {mostrarSidebar ? "Cerrar Chats" : "Ver Chats"}
        </button>
      </div>
      {/* Pop up de crear oferta */}
      {crearOfertaOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white pt-[50px] pr-[50px] pb-[30px] pl-[50px] rounded-xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <h3 className="chat-oferta-title">
              Oferta para {chatSeleccionado?.usuarioNombre || "cliente"}
            </h3>
            <div className="chat-divider"></div>
            {/* Aquí van los inputs */}
            <label className="chat-oferta-label">Nombre del proyecto</label>
            <input
              type="text"
              value={oferta.titulo}
              onChange={(e) => setOferta({ ...oferta, titulo: e.target.value })}
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">¿Qué ofreces en este servicio?</label>
            <input
              type="text"
              value={oferta.descripcion}
              onChange={(e) =>
                setOferta({ ...oferta, descripcion: e.target.value })
              }
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">
              ¿Qué entregables recibirá el cliente al final del proyecto?
            </label>
            <input
              type="text"
              value={oferta.resultado}
              onChange={(e) =>
                setOferta({ ...oferta, resultado: e.target.value })
              }
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">
              ¿Cuándo terminarás el proyecto?
            </label>
            <input
              type="text"
              value={oferta.duracion}
              onChange={(e) =>
                setOferta({ ...oferta, duracion: e.target.value })
              }
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">
              ¿Es un proyecto de varias etapas?
            </label>
            <select
              value={oferta.etapas}
              onChange={(e) => setOferta({ ...oferta, etapas: e.target.value })}
              className="chat-select-oferta"
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>

            <p className="text-sm mb-1 text-gray-600">
              *Los pagos se liberan por etapa
            </p>
            <p className="text-sm mb-3 text-gray-600">
              *Los datos de las etapas se pueden renegociar
            </p>

            <label className="chat-oferta-label">Cantidad de etapas</label>
            <input
              type="number"
              value={oferta.cantidadDeEtapas}
              onChange={(e) =>
                setOferta({ ...oferta, cantidadDeEtapas: e.target.value })
              }
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">Tiempo por etapa</label>
            <input
              type="text"
              value={oferta.tiempoPorEtapas}
              onChange={(e) =>
                setOferta({ ...oferta, tiempoPorEtapas: e.target.value })
              }
              className="chat-input-oferta"
            />

            <label className="chat-oferta-label">Presupuesto final</label>
            <input
              type="number"
              value={oferta.presupuesto}
              onChange={(e) =>
                setOferta({ ...oferta, presupuesto: e.target.value })
              }
              className="chat-input-oferta"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCrearOferta}
                className="chat-enviarOferta-button"
              >
                Enviar oferta
              </button>
              <button
                onClick={() => setCrearOfertaOpen(false)}
                className="chat-cancelarOferta-button"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar de chats */}
      {/* <div className={`chat-sidebar ${mostrarSidebar ? "visible" : "hidden"}`}> */}
      <div className={`chat-sidebar`}>
        <h3>Mis mensajes</h3>
        {chats?.chat && chats.chat.length > 0 ? (
          chats.chat.map((chat) => (
            <div
            key={chat._id}
            className={`chat-item ${
              chatSeleccionado?._id === chat._id ? "active" : ""
            }`}
            onClick={() => handleSeleccionarChat(chat)}
            >
              <p>
                {rol === "USER_SERVICE"
                  ? `${chat.proveedorNombre}`
                  : `${chat.usuarioNombre}`}
              </p>
              <button
                className="delete-chat-btn"
                onClick={() => handleBorrarChat(chat._id)}
                >
                Borrar
              </button>
            </div>
          ))
        ) : (
          <p>No hay chats disponibles</p>
        )}
      </div>

      {/* Ventana principal del chat */}
      <div className="chat-main">
        {chatSeleccionado ? (
          <>
            <div className="title-chat">
              <h3>
                Chat de {chatSeleccionado.proveedorNombre} y{" "}
                {chatSeleccionado.usuarioNombre}
              </h3>
            {rol && rol==='USER_SERVICE'  && (
              <button className="crearOferta-button" onClick={() => setCrearOfertaOpen(true)}>Crear oferta</button>
            )}
            </div>
            <div className="chat-divider"></div>
            <div className="chat-messages">
              {chatSeleccionado.mensajes.length > 0 ? (
                chatSeleccionado.mensajes.map((mensaje, idx) => (
                  <div
                  key={idx}
                  className={`mensaje ${
                    mensaje.tipo === "usuario" ? "sent" : "received"
                  }`}
                  >
                    <p>{mensaje.mensaje}</p>
                    <small>{new Date(mensaje.fecha).toLocaleString()}</small>
                  </div>
                ))
              ) : (
                <p>Aún no hay mensajes en este chat.</p>
              )}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={nuevoMensaje}
                onChange={(e) => setNuevoMensaje(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="input-mensaje"
              />
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}} >
              <button onClick={handleEnviarMensaje} className="chat-send-button">Enviar</button>
            </div>
          </>
        ) : (
          <p>Selecciona un chat para ver los mensajes.</p>
        )}
      </div>
    </div>
  );
}
