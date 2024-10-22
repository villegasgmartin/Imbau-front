import NavBar from "../Layouts/NavBar";

export default function VendedorNegocio () {
    return (
        <div className="bg-[#f8f3e0] min-h-[100vh]">
            <NavBar />
            <main className="p-28">
               
                <h1 className="text-3xl text-[#06023D] mb-20">Tu negocio</h1>
                <div>
                    <div className="flex mb-10">
                        <h2 className="text-2xl text-[#06023D] mr-10">Mis pedidos</h2>
                        <input type="text" className="w-64 rounded-xl" placeholder="Filtrar por palabras clave" />
                    </div>
                    <div className="flex justify-evenly mb-10">
                        <button className="bg-[#EA8C06] text-white border-2 border-[#EA8C06] rounded-full p-1">Todos </button>
                        <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">En preparacion</button>
                        <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">Rechazado</button>
                        <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">En camino</button>
                        <button className=" text-black border-2 border-[#EA8C06] rounded-full p-1">Listo para retirar</button>
                        <button className=" text-black   border-2 border-[#EA8C06] rounded-full p-1">Entregado</button>
                    </div>
                    <table className="w-[90vw]">
                     <thead>
                      <tr className="flex justify-evenly">
                        <tr>

                       <th>Producto</th>
                       <th>Cant.</th>
                       <th>$</th>
                       <th>Destinatario</th>
                       <th>codigo</th>
                       <th>Tiempo</th>
                       <th>Metodo de envio</th>
                       <th>Estado</th>
                        </tr>
                     </tr>
                     </thead>
                     <tbody>
                        <tr></tr> 
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>  
                     </tbody>
                  </table>
                </div>        
                
            </main>
        </div>
    );
}