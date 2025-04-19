import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../Chat/chat.css"


import {
  getChatsCliente,
  // getChatsEscort,
  getMensajesChat,
  enviarMensaje,
  deleteChat,
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
     const telefono = chatSeleccionado.telefono;
     const nombreUsuario = chatSeleccionado.usuarioNombre
     const nuevoMensajeObj = {
       mensaje: nuevoMensaje,
       fecha: new Date().toISOString(),
       tipo: "usuario", // Ajusta según corresponda
     };

     await enviarMensaje({ chatId, mensaje: nuevoMensaje });

    // // Hacer POST a la URL de UltraMsg
    // const apiUrl = `https://api.ultramsg.com/instance107301/messages/chat`;
    // const token = "8cwi12b8h0qqzflm"; // Idealmente manejar esto como variable de entorno
    // const body = {
    //     token: token,
    //     to: telefono, // Teléfono del destinatario
    //     body: `Tienes un nuevo mensaje de "${nombreUsuario}" en EL CieloBA`,
    //     priority: 10,
    // };

    // // Llamada POST directa
    // await axios.post(apiUrl, null, { params: body });

    // console.log(`Mensaje enviado a ${telefono}`);

     
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
        alert('Chat eliminado exitosamente');
        setChatSeleccionado(null); // Deselecciona el chat eliminado
        dispatch(getChatsCliente()); // Actualiza la lista de chats
      })
      .catch((err) => {
        console.error(err);
        alert(data.error || 'Error al eliminar el chat');
      })
    } catch (error) {
      console.error('Error al eliminar el chat:', error);
      alert('Error al eliminar el chat');
    }
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
     

 {/* Sidebar de chats */}
 {/* <div className={`chat-sidebar ${mostrarSidebar ? "visible" : "hidden"}`}> */}
 <div className={`chat-sidebar`}>
        <p>Selecciona un chat para empezar a hablar.</p>
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
            <h3>Chat de {chatSeleccionado.proveedorNombre} y {chatSeleccionado.usuarioNombre}</h3>
          </div>
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
              />
              <button onClick={handleEnviarMensaje}>Enviar</button>
            </div>
          </>
        ) : (
          <p>Selecciona un chat para ver los mensajes.</p>
        )}
      </div>

     
    </div>
  );
}
