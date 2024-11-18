import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, activateUser } from "../../../redux/actions";
import AdminNavBar from "../Layouts/AdminNavBar";
import "../Styles/AdminUsers.css"
import SearchIcon from "../../assets/search.png"

export default function AdminUsers() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers);

  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users?.usuarios?.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (uid) => {
    swal({
      title: "Dar de baja?",
      text: `¿Está seguro que desea dar de baja este usuario?`,
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((respuesta) => {
      if (respuesta) {
        dispatch(deleteUser(uid));
        swal({
          text: `Se ha dado de baja el usuario`,
          icon: "success",
        });
      } else {
        swal({
          text: "No se ha dado de baja el usuario",
          icon: "info",
        });
      }
    });
  };

  const handleActivateUser = (uid) => {
    swal({
      title: "Dar de alta?",
      text: `¿Está seguro que desea dar de alta este usuario?`,
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((respuesta) => {
      if (respuesta) {
        dispatch(activateUser(uid));
        swal({
          text: `Se ha dado de alta el usuario`,
          icon: "success",
        });
      } else {
        swal({
          text: "No se ha dado de alta el usuario",
          icon: "info",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <AdminNavBar />
      <div className="max-w-7xl mx-auto p-4">
 
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Usuarios</h1>
        <input
          type="text"
          placeholder="Buscar usuarios..."
          className="mb-4 p-2 border rounded-md w-full max-w-md"
          value={searchTerm} // Vincular el estado al input
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado al cambiar el input
        />
        <div className="adminUsers-divider"></div>
        <table className="w-full rounded-lg shadow-md overflow-hidden">
          <thead className="text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Datos Bancarios</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, index) => (
              <tr key={index} className="border-t bg-white">
                <td className="py-2 px-4 mt-2">{user.nombre}</td>
                <td className="py-2 px-4">{user.correo}</td>
                <td className="py-2 px-4">
                  <p>{user.banco}</p>
                  <p>{user.alias}</p>
                  <p>{user.cbu}</p>
                </td>
                <td className="py-2 px-4">
                  {user.estado === true ? <p>Activo</p> : <p>Inactivo</p>}
                </td>
                <td className="py-2 px-4">
                  {user.estado === true ? (
                    <button
                      className="text-blue-400"
                      onClick={() => handleDeleteUser(user.uid)}
                    >
                      Dar de baja
                    </button>
                  ) : (
                    <button
                      className="text-blue-400"
                      onClick={() => handleActivateUser(user.uid)}
                    >
                      Dar de alta
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  