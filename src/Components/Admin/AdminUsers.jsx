import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { useEffect } from "react";
import { getAllProducts, getUsers, deleteUser, activateUser } from "../../../redux/actions";
import AdminNavBar from "../Layouts/AdminNavBar";

export default function AdminUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers);



  //   const handleActivateUser = (e) => {
  //     dispatch(activateUser(e.target.value));
  //   };
      const handleDeleteUser = (uid) => {      
        swal({
          title: "Dar de baja?",
          text: `Esta seguro que desea dar de baja este usuario?`,
          icon: "warning",
          buttons: ["No", "Si"],
        }).then((respuesta) => {
          if (respuesta) {
          dispatch(deleteUser(uid));           
            swal({
              text: `Se ha dado de baja el usuario`,
              icon: "success",
            });
            // setTimeout(function () {
            // 	window.location.href = '/';
            // }, 3000);
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
                text: `Esta seguro que desea dar de alta este usuario?`,
                icon: "warning",
                buttons: ["No", "Si"],
              }).then((respuesta) => {
                if (respuesta) {
                  dispatch(activateUser(uid));
                  swal({
                    text: `Se ha dado de alta el usuario`,
                    icon: "success",
                  });
                  // setTimeout(function () {
                  // 	window.location.href = '/';
                  // }, 3000);
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
        />

        {/* <div className="mb-4 flex gap-4">
          <button className="px-4 py-2 ">Todos</button>
          <button className="px-4 py-2 ">Productos</button>
          <button className="px-4 py-2 ">Servicios</button>
        </div> */}

        <table className="w-full  rounded-lg shadow-md overflow-hidden">
          <thead className="   text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Datos Bancarios</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {users?.usuarios?.map((p, index) => (
              <tr key={index} className="border-t bg-white ">
                <td className="py-2 px-4 mt-2">{p.nombre}</td>
                <td className="py-2 px-4">{p.correo}</td>
                <td className="py-2 px-4">
                  <p>{p.banco}</p>
                  <p>{p.alias}</p>
                  <p>{p.cbu}</p>
                </td>
                <td className="py-2 px-4">
                  {p.estado === true ? <p>Activo</p> : <p>Inactivo</p>}
                </td>
                <td className="py-2 px-4">
                  {p.estado === true ? (
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                      value={p.id}
                      onClick={() => handleDeleteUser(p.uid)}
                    >
                      Dar de baja
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                      value={p.id}
                      onClick={() => handleActivateUser(p.uid)}
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
