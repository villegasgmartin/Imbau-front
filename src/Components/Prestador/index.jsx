import PrestadorAbout from "./PrestadorAbout";
import PrestadorActivity from "./PrestadorActivity";
import PrestadorHeader from "./PrestadorHeader";
import PrestadorNavBar from "./PrestadorNavBar";
import PrestadorReviews from "./PrestadorReviews";

export default function Prestador (){
    return(
        <div>
            <PrestadorNavBar/>
            <PrestadorHeader/>
            <PrestadorAbout/>
            <PrestadorActivity/>
            <PrestadorReviews/>
        </div>
    )
}