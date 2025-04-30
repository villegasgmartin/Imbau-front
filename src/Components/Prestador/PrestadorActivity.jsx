import { useDispatch, useSelector } from "react-redux";
import "../Styles/PrestadorPanel/PrestadorActivity.css";
import { useEffect } from "react";
import { getOfertasTerminadas } from "../../../redux/actions";

export default function PrestadorActivity() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getOfertasTerminadas(userId));
  }, [dispatch, userId]);
  const ofertasTerminadas = useSelector((state) => state.ofertasTerminadas);
  console.log(ofertasTerminadas,'off');
  
  return (
    <div className="prestadorActivity-container flex flex-col">
      <h3 className="prestadorActivity-title">Actividad</h3>
      {!ofertasTerminadas.length ? (
        <p className="prestadorActivity-empty">Aún no hay actividad</p>
      ) : (
        <div className="flex h-96 w-62 bg-yellow-100">
          {ofertasTerminadas.map((o) => {
            return (
              <div key={o._id} className="flex flex-col">
                <h2>{o.titulo}</h2>
                {o.imagen && <img src={o.imagen} alt="" className="w-20" />}
                <p>{o.descripcion}</p>
                <a href="">Ver mas</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
