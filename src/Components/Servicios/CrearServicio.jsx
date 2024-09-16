import { useEffect, useState } from "react";
import NavBar from "../Layouts/NavBar";
import categorias from "../../../utils/categorias";
import { postServicio } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function CrearServicio () {
    const dispatch = useDispatch()
    const [index, setIndex] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null); 
	const handleIndex = (s) => {
		setIndex(s);
	};
    const [input, setInput] = useState({
        
        img:'',
        direccion:'',
        ocultardireccion: false,
        Provicia:'',
        Ciudad:'',
        Barrio:'',
        rubro:'',
        titulo:'',
        descripcion:'',
        video:'',
        precio:''        
    })
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setInput({
          ...input,
          [name]: type === "checkbox" ? checked : value
        });
      };
      
    const handleCategoryClick = (categoria) => {
        setSelectedCategory(categoria); // Cambia la categoría seleccionada
        setInput({
          ...input,
          rubro: categoria // Actualiza el input con la categoría seleccionada
        });
      };

        const validateFields = () => {
        const { direccion, Provicia, Ciudad, rubro, titulo, descripcion } = input;
        if (!direccion || !Provicia || !Ciudad || !rubro || !titulo || !descripcion) {
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

    const handleSubmit = () => {
        if (!validateFields()) {
            return; // Detener si hay campos obligatorios vacíos
        }

        swal({
            title: 'Crear servicio?',
            text: `Verifique los datos del producto antes de continuar`,
            icon: 'warning',
            buttons: ['No', 'Si']
        }).then((respuesta) => {
            if (respuesta) {
                dispatch(postServicio(input));				
                swal({
                    text: `Se ha registrado el servicio`,
                    icon: 'success'
                });
            } else {
                swal({
                    text: 'No se ha creado el servicio',
                    icon: 'info'
                });
            }
        });
    }; 

    return (
        <div className="transition duration-700 h-max ">
          <NavBar/>
          {index === 1 ? 
             (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
         >	<div className=" w-[40%] ">
         <div className="h-min-96 rounded-xl ">
             <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                 <h4 className="text-start color-main bold text-3xl">
                     Empeza describiendo todo sobre tu servicio
                 </h4>
                 <p className="py-2 text-2xl">A que categoria pertenece tu servicio?</p>
                 <div className="flex flex-col">
                 {categorias.map((c, index) => (
                    <button
                    key={index}
                    onClick={() => handleCategoryClick(c.categoria)} // Al hacer clic, selecciona la categoría
                    className={`p-2 text-start border-b-2 text-xl hover:bg-gray-200 transition duration-300 ${
                      selectedCategory === c.categoria ? "bg-gray-300 font-bold" : ""
                    }`} // Estilo condicional si está seleccionada
                  >{c.categoria} {'->'}</button>
                ))}
                </div>
                <button
                  onClick={() => handleIndex(2)}
                  className= 'w-60 h-12  p-2 mt-10 text-[#06023d] rounded-xl border-2 border-[#06023d] shadow-lg shadow-gray-400 mb-5 hover:bg-[#06023d] hover:text-white transition duration-500'>
                     Continuar
                </button>
             </div>
         </div>
     </div></div>) : 
          index === 2 ? 
            (<div className="w-[99vw] flex justify-center items-start pt-10 bg-[#f8f3e0] pb-10"
                >	<div className=" w-[40%] ">
                <div className="h-min-96 rounded-xl ">
                    <div className="bg-white h-fit  shadow-lg shadow-gray-400 rounded-xl p-20">
                        <h4 className="text-start color-main bold text-3xl">
                        Empezá describiendo todo sobre tu servicio
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-start ">
                        <p>¿Cuál es la ubicación exacta 
                        donde ofreces el servicio?</p>
                        <input
                                placeholder="direccion"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="direccion"
                                value={input.direccion}
                                onChange={handleChange}                               
                            ></input>
                            <div className="flex flex-evenly items-center">
                            <input 
                                            type="checkbox"
                                            name="ocultardireccion"
                                            checked={input.ocultardireccion}
                                            onChange={handleChange}
                                        /> <p>Ocultar dirección exacta</p>
                            </div>                   
                            <input
                                placeholder="Provincia"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="Provicia"
                                value={input.Provicia}
                                onChange={handleChange}
                            ></input>                       
                            <input
                                placeholder="Ciudad"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="Ciudad"
                                value={input.Ciudad}
                                onChange={handleChange}
                            ></input>                             
                                <input
                                placeholder="Barrio"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="Barrio"
                                value={input.Barrio}
                                onChange={handleChange}
                            ></input>
                         
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
                        Completá las características de tu servicio
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-start ">
                        <p>Hacelo para tener una mejor ubicación en los resultados 
                        de búsqueda y aumentar las posibilidades de que te contraten.</p>
                        <input
                                placeholder="años de experiencia"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                // name="direccion"
                                // value={input.direccion}
                                // onChange={handleChange}                               
                            ></input>
                            <div className="flex flex-evenly items-center">
                            <input type="checkbox"/> <p>Asesoramiento online?</p>
                            </div>                   
                           
                         
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
                        Agregá un título y una descripción
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-start ">
                        <p>Agregá las características que distinguen tu servicio</p>
                        <label htmlFor="">Titulo</label>
                        <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="titulo"
                                value={input.titulo}
                                onChange={handleChange}                               
                            ></input>
                            <label htmlFor="">Descripcion</label>
                            <input 
                                placeholder="Agrega todo lo que incluye tu servicio como el detalle de los materiales, condiciones o plazos y lo que no para evitar malentendidos."
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="descripcion"
                                value={input.descripcion}
                                onChange={handleChange}
                            ></input>                       
                           <p className="text-red-400 border-2 border-red-400 rounded-xl p-4">No incluyas datos de contacto, e-mail, teléfono, direcciones ni enlaces a redes sociales.</p>
                         
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
                        Subí fotos o archivos que demuestren tu servicio
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-start ">
                        <p>Para no perder exposición, asegurate de que tus fotos no contengan
                        textos promocionales, datos de contacto, logos ni marcas de agua.</p>
                        <p className="text-orange-400 border-2 border-orange-400 p-4 rounded-xl">Revisá que todas las imágenes estén nítidas, bien iluminadas y en formato .jpg o .png. Considerá que una buena imagen debe medir 1200 x 900 px. 
                        De lo contrario, que tenga un mínimo de 600 x 400 px.</p>                            
                        <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="file"
                                name="img"
                                value={input.img}
                                onChange={handleChange}                               
                            ></input>
                              <h4 className="text-start color-main bold text-3xl">
                              ¡Podés agregar videos! (Opcional)
                              </h4>
                              <p>Agregá tu video de YouTube y mostrá de la mejor manera tu servicio.</p>
                              <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="video"
                                value={input.video}
                                onChange={handleChange}                               
                            ></input>                    
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
                        Definí las condiciones de contratación
                        </h4>
                        <div className=" mt-5  flex flex-col justify-start items-start ">
                        <p>¿Cuál es el precio? (opcional)</p>

                        <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="text-xl color-main  border-2 border-black mb-5 rounded-lg pl-5 thin w-96 h-12 shadow-md shadow-gray-400"
                                type="text"
                                name="precio"
                                value={input.precio}
                                onChange={handleChange}                               
                            ></input>
                                                
                           <p className="text-orange-400 border-2 border-orange-400 rounded-xl p-4">Podés acordar el precio. Si tu servicio no tiene un precio fijo, podés acordarlo con la persona interesada luego de que te contacte y cobrá lo que corresponda.</p>
                         
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
                                Finalizar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : ''}
        </div>
    )
}