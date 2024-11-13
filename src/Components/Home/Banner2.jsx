import banner2 from '../../assets/banner2.png';
import "../Styles/Banner2.css"

// import preFooter from '../../assets/prefooter.png'
export default function Banner2() {
	return (
		<div className="banner2-img-container">
			<img src={banner2} alt="" className="banner2-img"/>
			{/* <img src={preFooter} alt="" className='w-[70vw] ml-[15vw]'/>
			<p >Cambiar </p> */}
		</div>
	);
}
