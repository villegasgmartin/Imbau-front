import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategorias,
  getSubcategorias,
  postCategoria,
  postSubcategoria,
} from "../../../redux/actions";
import AdminNavBar from "../Layouts/AdminNavBar";

export default function Categorias() {
  const dispatch = useDispatch();

  const [newCategoria, setNewCategoria] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [newSubcategoria, setNewSubcategoria] = useState("");

  useEffect(() => {
    dispatch(getCategorias());
    dispatch(getSubcategorias());
  }, [dispatch]);

  const categorias = useSelector((state) => state.categorias?.categorias);

  const handleCreateCategoria = () => {
    if (newCategoria.trim()) {
      dispatch(postCategoria({ categoria: newCategoria }));
      setNewCategoria("");
    }
  };

  const handleCreateSubcategoria = () => {
    if (newSubcategoria.trim() && selectedCategoria) {
      dispatch(
        postSubcategoria(selectedCategoria, { subcategoria: newSubcategoria })
      );
      setNewSubcategoria("");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f3e0]">
      <AdminNavBar/>
      <div className="p-4">
       

        {/* Formulario para agregar categorías */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Crear Categoría</h2>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Nombre de la categoría"
              className="p-2 border rounded-md flex-grow"
              value={newCategoria}
              onChange={(e) => setNewCategoria(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={handleCreateCategoria}
            >
              Crear
            </button>
          </div>
        </div>

        {/* Formulario para agregar subcategorías */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Crear Subcategoría</h2>
          <div className="flex gap-4 items-center">
            <select
              className="p-2 border rounded-md flex-grow"
              value={selectedCategoria}
              onChange={(e) => setSelectedCategoria(e.target.value)}
            >
              <option value="">Selecciona una categoría</option>
              {categorias?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoria}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Nombre de la subcategoría"
              className="p-2 border rounded-md flex-grow"
              value={newSubcategoria}
              onChange={(e) => setNewSubcategoria(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleCreateSubcategoria}
            >
              Agregar
            </button>
          </div>
        </div>

        {/* Tabla de categorías y subcategorías */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Categorías y Subcategorías
          </h2>
          <table className="w-full rounded-lg shadow-md overflow-hidden bg-white">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-left">Categoría</th>
                <th className="py-2 px-4 text-left">Subcategorías</th>
              </tr>
            </thead>
            <tbody>
              {categorias?.map((cat) => (
                <tr key={cat._id} className="border-t">
                  <td className="py-2 px-4">{cat.categoria}</td>
                  <td className="py-2 px-4">
                    {cat.subcategoria.length > 0 ? (
                      <ul className="list-disc pl-6">
                        {cat.subcategoria.map((sub, index) => (
                          <li key={index}>{sub}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500">Sin subcategorías</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
