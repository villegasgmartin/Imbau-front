import NavBar from "../Layouts/NavBar";
import PrestadorAbout from "./PrestadorAbout";
import PrestadorActivity from "./PrestadorActivity";
import PrestadorHeader from "./PrestadorHeader";
import PrestadorReviews from "./PrestadorReviews";
import "../Styles/PrestadorPanel/PrestadorPanel.css"

export default function PrestadorPanel () {
    return(
        <div className="prestador-main-container">
				<NavBar />
				<PrestadorHeader /> 
				<PrestadorAbout />
				<PrestadorActivity />
				<PrestadorReviews />
			</div>
    )
}