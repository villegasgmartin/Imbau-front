import NavBar from "./NavBar";

export default function MisCompras(){
      return (
        <div className=" flex flex-col justify-evenly items-center">
          <NavBar />
          <h1 className="mt-32">Web en desarrollo</h1>
          <button className="mt-48 mb-12">
            <a
              href="/"
              className="border-2 border-solid border-green-400 rounded-xl p-2 mt-20 hover:bg-green-400 hover:text-white mt-20"
            >
              Volver al inicio
            </a>
          </button>
        </div>
      );
}