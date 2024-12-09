import { useEffect, useState } from "react";
import NavBar from "../Layouts/NavBar";
import categorias from "../../../utils/categorias";
import { postServicio } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import "../Styles/CrearServicio.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Styles/CrearProducto.css"
import AttachFileIcon from '@mui/icons-material/AttachFile';

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
        <div className="">
            <NavBar/>
            {index === 1 ? 
                (<div className="crearProducto-first-container">	
                        <div className="crearServicio-container">
                            <h4 className="crearServicio-title">
                                Empeza describiendo todo sobre tu servicio
                            </h4>
                            <p className="crearServicio-instruction">A que categoria pertenece tu servicio?</p>
                            <div className="flex flex-col">
                            {categorias.map((c, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryClick(c.categoria)} // Al hacer clic, selecciona la categoría
                                    className={`p-3 text-start border-b-2 text-xl transition duration-300 
                                    ${
                                    selectedCategory === c.categoria 
                                    ? "bg-[#06023D] text-white font-bold" // Fondo y texto al estar seleccionada
                                    : "hover:bg-gray-200 hover:text-black" // Hover para las no seleccionadas
                                }`}
                                >
                                    {c.categoria}
                                </button>
                                ))}
                            </div>
                            <div className="crearServicio-button-container01">
                                <button
                                    onClick={() => handleIndex(2)}
                                    className= 'crearServicio-button'>
                                    Continuar
                                </button>
                            </div>
                        </div>
                </div>) : 
            index === 2 ? 
            (<div className=""
                >	<div className="  ">
                <div className="crearProducto-first-container">
                    <div className="crearServicio-container">
                        <h4 className="crearServicio-title">
                        Empezá describiendo todo sobre tu servicio
                        </h4>
                        <div className="crearProducto-section02">
                            <div>
                            <p className="crearServicio-label" style={{marginBottom: "10px", marginTop: "30px"}}>¿Cuál es la ubicación exacta 
                            donde ofreces el servicio?</p>
                            <input
                                placeholder="Dirección"
                                className="crearServicio-input"
                                type="text"
                                name="direccion"
                                value={input.direccion}
                                onChange={handleChange}                               
                            ></input>
                            </div>
                            <div className="crearServicio-checkbox">
                            <input 
                                            type="checkbox"
                                            name="ocultardireccion"
                                            checked={input.ocultardireccion}
                                            onChange={handleChange}
                                        /> <p className="crearServicio-text01">Ocultar dirección exacta</p>
                            </div>                   
                            <input
                                placeholder="Provincia"
                                className="crearServicio-input"
                                type="text"
                                name="Provicia"
                                value={input.Provicia}
                                onChange={handleChange}
                            ></input>                       
                            <input
                                placeholder="Ciudad"
                                className="crearServicio-input"
                                type="text"
                                name="Ciudad"
                                value={input.Ciudad}
                                onChange={handleChange}
                            ></input>                             
                                <input
                                placeholder="Barrio"
                                className="crearServicio-input"
                                type="text"
                                name="Barrio"
                                value={input.Barrio}
                                onChange={handleChange}
                            ></input>
                         
                         <div className="crearServicio-button-container">
                        <button
                                onClick={() => handleIndex(1)}
                                className= 'crearServicio-button-back'
                                
                                >
                                    <ArrowBackIosIcon/>
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(3)}
                                className= 'crearServicio-button'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 3 ? 
            (<div className=""
                >	<div className="">
                <div className="crearProducto-first-container ">
                    <div className="crearServicio-container">
                        <h4 className="crearServicio-title">
                        Completá las características de tu servicio
                        </h4>
                        <div className=" ">
                        <p className="crearServicio-instruction instruction-movile">Hacelo para tener una mejor ubicación en los resultados 
                        de búsqueda y aumentar las posibilidades de que te contraten.</p>
                        <input
                                placeholder="Años de experiencia"
                                className="crearServicio-input"
                                type="text"
                                // name="direccion"
                                // value={input.direccion}
                                // onChange={handleChange}                               
                            ></input>
                            <div className="crearServicio-checkbox">
                            <p className="crearServicio-instruction instruction-movile">Asesoramiento online?</p>
                            <input type="checkbox"/>
                            </div>                   
                           
                         
                         <div className="crearServicio-button-container ">
                        <button
                                onClick={() => handleIndex(2)}
                                className= "crearServicio-button-back"
                                
                                ><ArrowBackIosIcon/>
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(4)}
                                className= 'crearServicio-button'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 4 ? 
            (<div className=""
                >	<div className=" ">
                <div className="crearProducto-first-container">
                    <div className="crearServicio-section03">
                        <h4 className="crearServicio-title">
                        Agregá un título y una descripción
                        </h4>
                        <div className=" ">
                        <p className="crearServicio-instruction">Agregá las características que distinguen tu servicio</p>
                        <div className="crearServicio-section04-info">
                        <div>
                            <label htmlFor="" className="crearServicio-label">Título</label>
                            <input
                                    placeholder="Instalación y reparación de aires acondicionados"
                                    className="crearServicio-input"
                                    type="text"
                                    name="titulo"
                                    value={input.titulo}
                                    onChange={handleChange}                               
                                ></input>
                        </div>
                        
                        <div>
                        <label htmlFor="" className="crearServicio-label">Descripción</label>
                            <input 
                                placeholder="Agrega todo lo que incluye tu servicio como el detalle de los materiales, condiciones o plazos y lo que no para evitar malentendidos."
                                className="crearServicio-input"
                                type="text"
                                name="descripcion"
                                value={input.descripcion}
                                onChange={handleChange}
                            ></input> 
                        </div>                      
                        <p className="crearServicio-aviso">No incluyas datos de contacto, e-mail, teléfono, direcciones ni enlaces a redes sociales.</p>
                         
                        </div>
                         <div className="crearServicio-button-container " >
                        <button
                                onClick={() => handleIndex(3)}
                                className= "crearServicio-button-back"
                                ><ArrowBackIosIcon/>
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(5)}
                                className= 'crearServicio-button'
                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
          index === 5 ? 
            (<div className="crearProducto-first-container"
                >	<div className="">
                <div className=" ">
                    <div className="crearServicio-container">
                        <h4 className="crearServicio-title">
                        Subí fotos o archivos que demuestren tu servicio
                        </h4>
                        <div className=" ">
                        <p className="crearServicio-instruction instruction-movile">Para no perder exposición, asegurate de que tus fotos no contengan
                        textos promocionales, datos de contacto, logos ni marcas de agua.</p>
                        <div className="crearServicio-foto-infoContainer">
                            <p className="crearServicio-image-text">Revisá que todas las imágenes estén nítidas, bien iluminadas y en formato .jpg o .png. Considerá que una buena imagen debe medir 1200 x 900 px. 
                            De lo contrario, que tenga un mínimo de 600 x 400 px.</p>                            
                            <div>
                                <input
                                    id="upload"
                                    placeholder="Instalación y reparación de aires acondicionados"
                                    className="crearServicio-foto-input"
                                    type="file"
                                    name="img"
                                    value={input.img}
                                    onChange={handleChange}>
                                </input>
                                <label htmlFor="upload" className="crearServicio-foto-label">
                                    <AttachFileIcon sx={{
                                color: "#4284F3",
                                fontSize: "30px"
                                }}/>
                                </label>
                            </div>
                        </div>
                              <h4 className="crearServicio-title">
                              ¡Podés agregar videos! <span className="crearServicio-text01" style={{fontSize: "18px"}}>(opcional)</span>
                              </h4>
                              <p className="crearServicio-instruction instruction-movile">Agregá tu video de YouTube y mostrá de la mejor manera tu servicio.</p>
                              <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="crearServicio-input"
                                type="text"
                                name="video"
                                value={input.video}
                                onChange={handleChange}                               
                            ></input>                    
                            <div className="crearServicio-button-container section-foto-margin" >
                             <button
                                onClick={() => handleIndex(4)}
                                className= 'crearServicio-button-back'                                
                                ><ArrowBackIosIcon/>
                                Volver
                            </button>
                            <button
                                onClick={() => handleIndex(6)}
                                className= 'crearServicio-button'                                
                                >
                                Continuar
                            </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div></div>) : 
            index === 6 ? (<div className="crearProducto-first-container"   
                >	<div className="">
                <div className=" ">
                    <div className="crearServicio-container">
                        <h4 className="crearServicio-title">
                        Definí las condiciones de contratación
                        </h4>
                        <div className=" ">
                        <div className="crearServicio-lastSection-container">
                            <p className="crearServicio-label">¿Cuál es el precio? (opcional)</p>
                            <input
                                placeholder="Instalación y reparación de aires acondicionados"
                                className="crearServicio-input"
                                type="text"
                                name="precio"
                                value={input.precio}
                                onChange={handleChange}                               
                            ></input> 
                            <p className="crearServicio-image-text" style={{marginTop: "0"}}>Podés acordar el precio. Si tu servicio no tiene un precio fijo, podés acordarlo con la persona interesada luego de que te contacte y cobrá lo que corresponda.</p>
                        </div>
                         
                         <div className="crearServicio-button-container">
                        <button
                                onClick={() => handleIndex(5)}
                                className= 'crearServicio-button-back'
                                
                                ><ArrowBackIosIcon/>
                                Volver
                            </button>
                            <button
                                onClick={handleSubmit}  
                                className= "crearServicio-button"
                                
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