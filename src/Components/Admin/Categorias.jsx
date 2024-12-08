import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Admin/Categorias.css"
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
    <div className="category-main-container">
      <AdminNavBar/>
      <div className="p-4">
       

        {/* Formulario para agregar categorías */}
        <div className="category-create">
          <h2 className="category-title">Crear Categoría</h2>
          <div className="">
            <input
              type="text"
              placeholder="Nombre de la categoría"
              className="category-input"
              value={newCategoria}
              onChange={(e) => setNewCategoria(e.target.value)}
            />
          <div className="category-button-container">
            <button
              className="category-button"
              onClick={handleCreateCategoria}
            >
              Crear categoría
            </button>
          </div>
          </div>
        </div>

        {/* Formulario para agregar subcategorías */}
        <div className="category-create">
          <h2 className="category-title">Crear Subcategoría</h2>
          <div className="flex gap-4 items-center">
            <select
              className="category-input"
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
              className="category-input"
              value={newSubcategoria}
              onChange={(e) => setNewSubcategoria(e.target.value)}
            />
          </div>
          <div className="category-button-container">
          <button
              className="category-button"
              onClick={handleCreateSubcategoria}
            >
              Agregar
            </button>
          </div>
        </div>

        {/* Tabla de categorías y subcategorías */}
        <div className="category-create">
          <h2 className="category-title">
            Categorías y Subcategorías
          </h2>
          <table className="category-table">
            <thead style={{backgroundColor: "#06023D",}}>
              <tr>
                <th className="category-th">Categoría</th>
                <th className="category-th">Subcategorías</th>
              </tr>
            </thead>
            <tbody>
              {categorias?.map((cat) => (
                <tr key={cat._id} className="border-t">
                  <td className="category-td">{cat.categoria}</td>
                  <td className="category-td">
                    {cat.subcategoria.length > 0 ? (
                      <ul className="list-disc pl-6">
                        {cat.subcategoria.map((sub, index) => (
                          <li key={index}>{sub}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="category-none">Sin subcategorías</span>
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
