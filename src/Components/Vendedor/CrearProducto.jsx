import { useState } from "react";
import NavBar from "../Layouts/NavBar";
import categorias from "../../../utils/categorias";
import { postProducto } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function CrearProducto () {
    const dispatch = useDispatch()
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
        const { nombre, categoria, subcategoria, marca, entrega, garantia, factura, precio } = input;
        if (!nombre || !categoria || !subcategoria || !marca || !entrega || !garantia || !factura || !precio) {
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

    const subcategoriasFiltradas = categorias.find(
        (c) => c.categoria === input.categoria
    )?.subcategorias || [];

    return (
        <div className="transition duration-700 h-max ">
          <NavBar/>
          {index === 1 ? 
             (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
         >	<div className=" w-[40%] ">
         <div className="h-min-96 rounded-xl ">
             <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                 <h4 className="text-start color-main bold text-3xl">
                     Completa los datos del producto
                 </h4>
                 <div className=" mt-5  flex flex-col justify-start items-start ">
                 <label htmlFor="" className="text-start text-2xl regular" >Nombre del producto</label>
                 <input
                         placeholder="Ej: aires acondicionados"
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="nombre"
                         value={input.nombre}
                         onChange={handleChange}
                        
                     ></input>
                    <label htmlFor="" className="text-start text-2xl regular" >Categoria</label>
                    <select
                                        name="categoria"
                                        value={input.categoria}
                                        onChange={handleCategoriaChange}
                                        className="text-xl color-main border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                    >
                                        <option value="">Selecciona una categoria</option>
                                        {categorias.map((c, index) => (
                                            <option value={c.categoria} key={index}>
                                                {c.categoria}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="subcategoria" className="text-start text-2xl regular">
                                        Sub-Categoria
                                    </label>
                                    <select
                                        name="subcategoria"
                                        value={input.subcategoria}
                                        onChange={handleChange}
                                        className="text-xl color-main border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                    >
                                        <option value="">Selecciona una subcategoría</option>
                                        {subcategoriasFiltradas.map((sub, index) => (
                                            <option value={sub} key={index}>
                                                {sub}
                                            </option>
                                        ))}
                                    </select>
                      <label htmlFor="" className="text-start text-2xl regular">Descripcion general de la subcategoria</label>
                     <input
                         placeholder="Ej: aires acondicionados"
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="descripcionSubcategoria"
                         value={input.descripcionSubcategoria}
                         onChange={handleChange}
                     ></input>
                     <label htmlFor="" className="text-start text-2xl regular">Informacion extra</label>
                     <input
                         placeholder="Tamaño (altura, ancho, profundo), voltaje, estado, etc."
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="info"
                         value={input.info}
                         onChange={handleChange}
                     ></input>
                        <h3 className="text-start text-2xl regular">Caracteristicas principales</h3>
                        <p className="px-20 text-start">Completá estos datos con las especificaciones del fabricante. Podés usar la caja o el envase del producto para consultar la información.</p>
                        <label htmlFor="">Marca</label>
                         <input
                         placeholder="Ej: BGH"
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="marca"
                         value={input.marca}
                         onChange={handleChange}
                     ></input>
                         <label htmlFor="" className="text-start text-2xl regular">Modelo</label>
                         <input
                         placeholder="Ej: Silent Air BS35WCCR"
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="modelo"
                         value={input.modelo}
                         onChange={handleChange}
                     ></input>
                             <label htmlFor="" className="text-start text-2xl regular">Color</label>
                         <input
                         placeholder="Ej:Blanco "
                         className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                         type="text"
                         name="color"
                         value={input.color}
                         onChange={handleChange}
                     ></input>
                     <button
                         onClick={() => handleIndex(2)}
                          className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                        
                     >
                         Continuar
                     </button>
                 </div>
             </div>
         </div>
     </div></div>) : 
          index === 2 ? 
            (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
                >	<div className=" w-[40%] ">
                <div className="h-min-96 rounded-xl ">
                    <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                        <h4 className="text-start color-main bold text-3xl">
                            Foto del producto
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-center      w-inherit">
                           <div className="flex flex-between">
                            <input type="file"  className="w-60 h-60 border-2 border-blue-200" value={input.imagen} name="imagen" onChange={handleChange}/>
                            <div className="flex flex-col justify-around ml-10">
                                <h3>{input.nombre}</h3>
                                <div>
                                <p>Marca: {input.marca} </p>
                                <p>Modelo: {input.modelo}</p>
                                <p>Color: {input.color}</p>     
                                </div>
                                <p>Subi fotos de tu producto!</p>                          
                            </div>
                           </div>                           
                        <div className="flex-between " >
                        <button
                                onClick={() => handleIndex(1)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(3)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 3 ? 
            (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
                >	<div className=" w-[40%] ">
                <div className="h-min-96 rounded-xl ">
                    <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                        <h4 className="text-start color-main bold text-3xl">
                            Codigo universal
                        </h4>
                        <p>Es el número que identifica un producto a nivel global. </p>
                        <p className="border-2 border-orange-200 rounded-xl p-4">Podés encontrar el código en la caja o etiqueta, junto al código de barras.</p>
                        <div className=" mt-5  flex flex-col justify-start items-center  w-inherit">       
                            <div className="flex flex-evenly">
                            <input type="text"  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400" value={input.codigouniversal} name="codigouniversal" placeholder="Ej: 887276246529" onChange={handleChange}/>
                            <div className="flex flex-evenly items-center ml-5">
                            <input type="checkbox" /> 
                            <label htmlFor="">Mi producto no lo tiene</label>
                            </div>
                                </div>                   
                            <p>Tiene entre 8 y 14 números, sin letras.  Los más usuales son el UPC, EAN, JAN e ISBN.</p>                       
                        <div className="flex-between " >
                        <button
                                onClick={() => handleIndex(2)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(4)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 4 ? 
            (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
                >	<div className=" w-[40%] ">
                <div className="h-min-96 rounded-xl ">
                    <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                        <h4 className="text-start color-main bold text-3xl">
                        Stock y código de identificación (SKU)
                        </h4>
                        <p>Es el número que identifica un producto a nivel global. </p>
                        <p className="border-2 border-orange-200 rounded-xl p-4">Indicá cuántas unidades tienes a la venta y asigná un código interno para identificar tu producto.</p>
                        <div className=" mt-5  flex flex-col justify-start items-center  w-inherit">       
                            <div className="flex flex-evenly">
                            <input type="text"  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.stock} name="stock" placeholder="Unidad" onChange={handleChange}/>
                            <div className="flex flex-evenly items-center ml-5">
                            <input type="text"  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.SKU} name="SKU" placeholder="codigo de identificacion" onChange={handleChange}/>
                            </div>
                                </div>                   
                            <p>Tiene entre 8 y 14 números, sin letras.  Los más usuales son el UPC, EAN, JAN e ISBN.</p>                       
                        <div className="flex-between " >
                        <button
                                onClick={() => handleIndex(3)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(5)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 5 ? 
            (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
                >	<div className=" w-[40%] ">
                <div className="h-min-96 rounded-xl ">
                    <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                        <h4 className="text-start color-main bold text-3xl">
                        Para terminar, definamos las condiciones de venta
                        </h4>                       
                        <div className=" mt-5  flex flex-col justify-start items-start  w-inherit">   
                        <label htmlFor="">Precio</label>  
                        <input type="text"  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.precio} name="precio" placeholder="precio" onChange={handleChange}/>                         
                        <label htmlFor="">Forma de entrega</label>
                        <select name="entrega" id=""  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.entrega} onChange={handleChange}>
                            <option value="Por tu cuenta">Por tu cuenta</option>
                            <option value="A acordar con el vendedor">A acordar con el vendedor</option>
                        </select>      
                        <label htmlFor="">Garantia</label>
                        <p>Que tipo de garantia ofreces?</p>
                        <select name="garantia" id=""  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.garantia} onChange={handleChange}>
                        <option value={true}>Si, ofrezco</option>
                        <option value={false}> No, no ofrezco</option>
                        </select> 
                        <label htmlFor="">Factura</label>
                        <p>Ofreces factura A para este producto?</p>
                        <select name="factura" id=""  className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-68 h-12 shadow-md shadow-gray-400" value={input.factura} onChange={handleChange}>
                            <option value={true}>Si, ofrezco</option>
                            <option value={false}> No, no ofrezco</option>
                           
                        </select>        

                                            
                        <div className="flex-between " >
                        <button
                                onClick={() => handleIndex(4)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(6)}
                                className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) :  
          index === 6 ? (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
            >	<div className=" w-[40%] ">
            <div className="h-min-96 rounded-xl ">
                <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                    <h4 className="text-start color-main bold text-3xl">
                    {input.nombre}
                    </h4>
                    <div>
                     <p>Marca: {input.marca} </p>
                     <p>Modelo: {input.modelo}</p>
                     <p>Color: {input.color}</p>     
                    </div>
                    <h4>${input.precio}</h4>
                   
                    <div className=" mt-5  flex flex-col justify-start items-center  w-inherit">       
                                    
                                           
                    <div className="flex-between " >
                    <button
                            onClick={() => handleIndex(5)}
                            className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                            
                            >
                            Volver
                        </button>
                        <button
                            onClick={handleSubmit}
                            className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'
                            
                            >
                            Publicar
                        </button>
                            </div>
                    </div>
                </div>
            </div>
        </div></div>) : ''}
        </div>
    )
}