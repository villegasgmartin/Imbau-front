import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../Layouts/NavBar'

export default function IdProduct(){
    const { id } = useParams();
    
    const dispatch = useDispatch()
    useEffect(() => (
        dispatch(getProductById(id))
    ),[])
    const product = useSelector((state) => state.productById)
    console.log(product, 'prod');
    
return(
    <main >
        <NavBar/>
    <div className="flex">
        <div>
           <div className="w-[70vw]">Imagen y caracteristicas</div>
            <div>Productos relacionados</div>
           <div>Productos del vendedor</div>
           <div>Rese;as</div>
        </div>
        <div>
            Compra
        </div>
    </div>
    <div>
        Elementos para la compra
    </div>
    </main>
)
}
