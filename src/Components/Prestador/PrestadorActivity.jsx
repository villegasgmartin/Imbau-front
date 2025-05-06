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
    <div className={`prestadorActivity-container ${ofertasTerminadas.length ? 'con-actividad' : 'sin-actividad'}`}>
      <h3 className="prestadorActivity-title">Actividad</h3>
      {!ofertasTerminadas.length ? (
        <p className="prestadorActivity-empty">Aún no hay actividad</p>
      ) : (
        <div className="prestadorActivity-full-container">
          {ofertasTerminadas.map((o) => {
            return (
              <div key={o._id} className="prestadorActivity-subContainer">
                <div className="prestadorActivity-imageContainer">
                  {o.imagen && <img src={o.imagen} alt="" className="prestadorActivity-image" width={"200px"} />}
                </div>
                <h2 className="prestadorActivity-subtitle">{o.titulo}</h2>
                <p className="prestadorActivity-description">{o.descripcion}</p>
                <a href="" className="prestadorActivity-link">Ver más</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
