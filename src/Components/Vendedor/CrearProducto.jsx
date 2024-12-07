import { useEffect, useState } from "react";
import NavBar from "../Layouts/NavBar";
// import categorias from "../../../utils/categorias";
import { getCategorias, postProducto } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/CrearProducto.css"
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function CrearProducto () {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getCategorias())
    },[])
       const categoriasData = useSelector((state) => state.categorias);
       const categorias = categoriasData?.categorias || []; 
    
    const [index, setIndex] = useState(1);
	const handleIndex = (s) => {
		setIndex(s);
	};

    const [input, setInput] = useState({
        usuario:'',
        categoria: '',
        subcategoria:'',
        nombre:'',
        descripcionSubcategoria:'',
        marca:'',
        modelo:'',
        color:'',
        info:'',
        imagen:'',
        codigouniversal:'',
        SKU:'',
        stock:0,
        cuota:'',
        entrega:'',
        garantia: false,
        factura: false,
        precio:''
    })

    const validateFields = () => {
        const { nombre, categoria, subcategoria, marca, entrega, garantia, factura, precio, imagen } = input;
        if (!nombre || !categoria || !subcategoria || !marca || !entrega || !garantia || !factura || !precio || !imagen     ) {
            swal({
                title: "Error",
                text: "Por favor, completa todos los campos obligatorios.",
                icon: "error",
                button: "Ok"
            });
            return false;
        }
        return true;
    };

    const handleChange = (e) => {

		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	};
    const handleCategoriaChange = (e) => {
        setInput({
            ...input,
            categoria: e.target.value,
            subcategoria: '' // Resetea la subcategoría cuando cambia la categoría
        });

    };

    const handleSubmit = () => {	
        if (!validateFields()) {
            return; // Detener si hay campos obligatorios vacíos
        }
		swal({
			title: 'Crear producto?',
			text: `Verifique los datos del producto antes de continuar`,
			icon: 'warning',
			buttons: ['No', 'Si']
		}).then((respuesta) => {
			if (respuesta) {
				dispatch(postProducto(input));				
				setRepeatPass('');
				swal({
					text: `Se ha registrado el producto`,
					icon: 'success'
				});

				// setTimeout(function () {
				// 	window.location.href = '/';
				// }, 3000);
			} else {
				swal({
					text: 'No se ha creado el producto',
					icon: 'info'
				});
			}
		});
	}; 

    const subcategoriasFiltradas =
      categorias.find((c) => c.categoria === input.categoria)?.subcategoria ||
      [];

    return (
      <div className="transition duration-700 h-max ">
        <NavBar />
        {index === 1 ? (
          <div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10">
            {" "}
            <div className=" w-[40%] ">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-container">
                  <h4 className="crearProducto-title">
                    Completa los datos del producto
                  </h4>
                  <p className="crearProducto-instruction">Los campos con * son obligatorios</p>
                  <div className=" mt-5  flex flex-col justify-start items-start ">
                    <label htmlFor="" className="crearProducto-label">
                      Nombre del producto*
                    </label>
                    <input
                      placeholder="Ej: aires acondicionados"
                      className="crearProducto-input"
                      type="text"
                      name="nombre"
                      value={input.nombre}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="" className="crearProducto-label">
                      Categoria
                    </label>
                    <select
                    style={{marginBottom: "10px"}}
                      name="categoria"
                      value={input.categoria}
                      onChange={handleCategoriaChange}
                      className="crearProducto-input"
                    >
                      <option value="">Selecciona una categoría</option>
                      {categorias.map((c) => (
                        <option key={c._id} value={c.categoria}>
                          {c.categoria}
                        </option>
                      ))}
                    </select>

                    <select
                      style={{marginTop: "0px"}}
                      name="subcategoria"
                      value={input.subcategoria}
                      onChange={handleChange}
                      className="crearProducto-input"
                      disabled={!input.categoria} // Deshabilitar si no hay categoría seleccionada
                    >
                      <option value="">Selecciona una subcategoría</option>
                      {subcategoriasFiltradas.map((sub, index) => (
                        <option key={index} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>

                    <label htmlFor="" className="crearProducto-label">
                      Descripción general de la subcategoria
                    </label>
                    <input
                      placeholder="Ej: aires acondicionados"
                      className="crearProducto-input"
                      type="text"
                      name="descripcionSubcategoria"
                      value={input.descripcionSubcategoria}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="" className="crearProducto-label">
                      Información extra
                    </label>
                    <input
                      className="crearProducto-input"
                      placeholder="Tamaño (altura, ancho, profundo), voltaje, estado, etc."
                      type="text"
                      name="info"
                      value={input.info}
                      onChange={handleChange}
                    ></input>
                    <h3 className="crearProducto-label">
                      Caracteristicas principales
                    </h3>
                    <p className="crearProducto-text01">
                      Completá estos datos con las especificaciones del
                      fabricante. Podés usar la caja o el envase del producto
                      para consultar la información.
                    </p>
                    <label htmlFor="">Marca</label>
                    <input
                      className="crearProducto-input"
                      placeholder="Ej: BGH"
                      type="text"
                      name="marca"
                      value={input.marca}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="" className="crearProducto-label">
                      Modelo
                    </label>
                    <input
                      className="crearProducto-input"
                      placeholder="Ej: Silent Air BS35WCCR"
                      type="text"
                      name="modelo"
                      value={input.modelo}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="" className="crearProducto-label">
                      Color
                    </label>
                    <input
                      className="crearProducto-input"
                      placeholder="Ej:Blanco "
                      type="text"
                      name="color"
                      value={input.color}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                    <div className="crearProducto-button-container">
                      <button
                        onClick={() => handleIndex(2)}
                        className="crearProducto-button"
                      >
                        Confirmar
                      </button>
                    </div>
              </div>
            </div>
          </div>
        ) : index === 2 ? (
          <div className="crearProducto-main-container">
            {" "}
            <div className="">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-foto-container">
                  <h4 className="crearProducto-title">
                    Foto del producto
                  </h4>
                  <div className=" mt-5  flex flex-col justify-start items-center      w-inherit">
                    <div className="flex flex-between">
                    <div>
                      <input
                        type="file"
                        id="upload"
                        className="crearProducto-foto-input"
                        name="imagen"
                        onChange={handleChange}
                      />
                      <label htmlFor="upload" className="crearProducto-foto-label">
                          <AttachFileIcon sx={{
                            color: "#4284F3",
                            fontSize: "30px"
                          }}/>
                      </label>
                    </div>
                      <div className="crearProducto-foto-infoContainer">
                        <h3 className="crearProducto-product-name">{input.nombre}</h3>
                        <div>
                          <p className="crearProducto-foto-text01">Marca: <span style={{fontFamily: "thin"}}>{input.marca}</span> </p>
                          <p className="crearProducto-foto-text01">Modelo: <span style={{fontFamily: "thin"}}> {input.modelo}</span></p>
                          <p className="crearProducto-foto-text01">Color: <span style={{fontFamily: "thin"}}>{input.color}</span></p>
                        </div>
                        <p className="crearProducto-foto-text02">¡Subi fotos del producto!</p>
                      </div>
                    </div>
                    <div className="crearProducto-foto-buttonContainer">
                      <button
                        onClick={() => handleIndex(1)}
                        className="crearProducto-foto-button"
                      >
                        Volver
                      </button>
                      <button
                        onClick={() => handleIndex(3)}
                        className="crearProducto-foto-button"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : index === 3 ? (
          <div className="crearProducto-main-container">
            {" "}
            <div className="">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-codigo-container">
                  <div>
                    <h4 className="crearProducto-title">
                      Codigo universal
                    </h4>
                    <p className="crearProducto-text01">
                      Es el número que identifica un producto a nivel global.{" "}
                    </p>
                  </div>
                  <p className="crearProducto-codigo">
                    Podés encontrar el código en la caja o etiqueta, junto al
                    código de barras.
                  </p>
                  <div className="crearProducto-codigo-info">
                    <div className="crearProducto-input-checkbox">
                      <input
                        type="text"
                        className="crearProducto-input"
                        value={input.codigouniversal}
                        name="codigouniversal"
                        placeholder="Ej: 887276246529"
                        onChange={handleChange}
                        style={{width: "250px"}}
                      />
                      <div className="crearProducto-checkbox-container">
                        <input type="checkbox" />
                        <label htmlFor="" className="crearProducto-text01"
                        >Mi producto no lo tiene</label>
                      </div>
                    </div>
                    <p className="crearProducto-text01" style={{textAlign: "center"}}>
                      Tiene entre 8 y 14 números, sin letras. Los más usuales
                      son el UPC, EAN, JAN e ISBN.
                    </p>
                    <div className="crearProducto-foto-buttonContainer ">
                      <button
                        onClick={() => handleIndex(2)}
                        className="crearProducto-foto-button"
                      >
                        Volver
                      </button>
                      <button
                        onClick={() => handleIndex(4)}
                        className="crearProducto-foto-button"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : index === 4 ? (
          <div className="crearProducto-main-container">
            {" "}
            <div className="">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-stock-container">
                  <h4 className="crearProducto-title">
                    Stock y código de identificación (SKU)
                  </h4>
                  <p className="crearProducto-text01">
                    Indicá cuántas unidades tienes a la venta y asigná un código
                    interno para identificar tu producto.
                  </p>
                  <div className=" mt-5  flex flex-col justify-start items-center  w-inherit">
                    <div className="flex flex-evenly">
                      <input
                      style={{width: "300px"}}
                        type="text"
                        className="crearProducto-input"
                        value={input.stock}
                        name="stock"
                        placeholder="unidad"
                        onChange={handleChange}
                      />
                      <div className="flex flex-evenly items-center ml-5">
                        <input
                          type="text"
                          className="crearProducto-input"
                          style={{width: "300px"}}
                          value={input.SKU}
                          name="SKU"
                          placeholder="código de identificación"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className="crearProducto-instruction" style={{marginTop: "0"}}>
                      Tiene entre 8 y 14 números, sin letras. Los más usuales
                      son el UPC, EAN, JAN e ISBN.
                    </p>
                    <div className="crearProducto-foto-buttonContainer ">
                      <button
                        onClick={() => handleIndex(3)}
                        className="crearProducto-foto-button"
                      >
                        Volver
                      </button>
                      <button
                        onClick={() => handleIndex(5)}
                        className="crearProducto-foto-button"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : index === 5 ? (
          <div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10">
            {" "}
            <div className=" ">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-container">
                  <h4 className="crearProducto-title">
                    Para terminar, definamos<br/> las condiciones de venta
                  </h4>
                  <div className=" mt-5  flex flex-col justify-start items-start  w-inherit">
                    <label htmlFor="" className="crearProducto-label">Precio</label>
                    <input
                      type="text"
                      className="crearProducto-input"
                      value={input.precio}
                      name="precio"
                      placeholder="$"
                      onChange={handleChange}
                    />
                    <label htmlFor=""  className="crearProducto-label">Forma de entrega</label>
                    <select
                      name="entrega"
                      id=""
                      className="crearProducto-input"
                      value={input.entrega}
                      onChange={handleChange}
                    >
                      <option value="Por tu cuenta">Por tu cuenta</option>
                      <option value="A acordar con el vendedor">
                        A acordar con el vendedor
                      </option>
                    </select>
                    <label htmlFor=""  className="crearProducto-label">Garantia</label>
                    <p className="crearProducto-text01">Que tipo de garantia ofreces?</p>
                    <select
                      name="garantia"
                      id=""
                      className="crearProducto-input"
                      value={input.garantia}
                      onChange={handleChange}
                    >
                      <option value={true}>Si, ofrezco</option>
                      <option value={false}> No, no ofrezco</option>
                    </select>
                    <label htmlFor=""  className="crearProducto-label">Factura</label>
                    <p className="crearProducto-text01">Ofreces factura A para este producto?</p>
                    <select
                      name="factura"
                      id=""
                      className="crearProducto-input"
                      value={input.factura}
                      onChange={handleChange}
                    >
                      <option value={true}>Si, ofrezco</option>
                      <option value={false}> No, no ofrezco</option>
                    </select>

                    <div className="crearProducto-foto-buttonContainer">
                      <button
                        onClick={() => handleIndex(4)}
                        className="crearProducto-foto-button"
                      >
                        Volver
                      </button>
                      <button
                        onClick={() => handleIndex(6)}
                        className="crearProducto-foto-button"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : index === 6 ? (
          <div className="crearProducto-main-container">
            {" "}
            <div className="crearProducto-main-container">
              <div className="h-min-96 rounded-xl ">
                <div className="crearProducto-post-container">
                  <div className="crearProducto-post">
                    <h4 className="crearProducto-product-name">
                      {input.nombre}
                    </h4>
                    <h4 className="crearProducto-product-name">${input.precio}</h4>
                  </div>
                    <div>
                      <p className="crearProducto-foto-text01">Marca: <span style={{fontFamily: "thin"}}>{input.marca}</span> </p>
                      <p className="crearProducto-foto-text01">Modelo: <span style={{fontFamily: "thin"}}> {input.modelo}</span></p>
                      <p className="crearProducto-foto-text01">Color: <span style={{fontFamily: "thin"}}>{input.color}</span></p>
                    </div>
                    <div className="resumen-divider"></div>
                    <div className="crearProducto-foto-buttonContainer ">
                      <button
                        onClick={() => handleIndex(5)}
                        className="crearProducto-foto-button"
                      >
                        Volver
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="crearProducto-foto-button"
                      >
                        Publicar
                      </button>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
}