import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Layouts/NavBar";
import { getVentas } from "../../../redux/actions";
import { useEffect, useState } from "react";

export default function VendedorNegocio () {
      const dispatch = useDispatch();
      const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

      useEffect(() => {
        dispatch(getVentas());
      }, [dispatch]);

      const products = useSelector((state) => state.ventasPorUsuario);
      console.log(products, "productos");

      // Filtrar productos según el término de búsqueda
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
              />
            </div>
            <div className="flex justify-evenly mb-10">
              <button className="bg-[#EA8C06] text-white border-2 border-[#EA8C06] rounded-full p-1">
                Todos{" "}
              </button>
              <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">
                En preparacion
              </button>
              <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">
                Rechazado
              </button>
              <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">
                En camino
              </button>
              <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">
                Listo para retirar
              </button>
              <button className=" text-black   border-2 border-[#EA8C06] rounded-full p-1">
                Entregado
              </button>
            </div>
            <table className="w-full rounded-lg shadow-md overflow-hidden">
              <thead className="text-gray-700">
                <tr>
                  <th className="py-2 px-4 text-left">Código</th>
                  <th className="py-2 px-4 text-left">Producto</th>
                  <th className="py-2 px-4 text-left">Estado</th>
                  <th className="py-2 px-4 text-left">$</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p._id} className="border-t bg-white">
                    <td className="py-2 px-4 mt-2">{p._id}</td>
                    <td className="py-2 px-4">{p.nombre}</td>
                    <td className="py-2 px-4">{p.estado}</td>
                    <td className="py-2 px-4">${p.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
}