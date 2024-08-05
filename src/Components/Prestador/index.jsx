import NavBar from "../Layouts/NavBar";
import PrestadorAbout from "./PrestadorAbout";
import PrestadorActivity from "./PrestadorActivity";
import PrestadorHeader from "./PrestadorHeader";

import PrestadorReviews from "./PrestadorReviews";

export default function Prestador (){
    return (
			<div className="bg-[#f8f3e0]">
				<NavBar />
				<PrestadorHeader />
				<PrestadorAbout />
				<PrestadorActivity />
				<PrestadorReviews />
			</div>
		);
}