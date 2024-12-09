import "../Styles/PrestadorPanel/PrestadorAbout.css"

export default function PrestadorAbout(){
    return (
			<div className="prestadorAbout-container">
				<h1 className="prestadorAbout-title">Acerca de</h1>
				<h3 className="prestadorAbout-subTitle">Estudio</h3>
				<h5 className="prestadorAbout-years"><span style={{color: "#EA8C06"}}>10</span> años de experiencia</h5>
				<p className="prestadorAbout-text">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con lorem
					ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
					nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
					Ut wisi enim ad{' '}
				</p>
				<p className="prestadorAbout-subTitle" style={{marginTop: "200px"}}>$ Acordar con el vendedor</p>
			</div>
		);
}