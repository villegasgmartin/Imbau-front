import banner2 from '../../assets/banner2.png';
import preFooter from '../../assets/prefooter.png'
export default function Banner2() {
	return (
		<div className=" mt-10 mb-10">
			<img src={banner2} alt="" className="w-[100vw]"/>
			<img src={preFooter} alt="" className='w-[70vw] ml-[15vw]'/>
			<p >Cambiar </p>
		</div>
	);
}
