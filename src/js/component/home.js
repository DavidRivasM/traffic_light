import React, { useState } from "react";
import { func } from "prop-types";

//create your first component
export function Home() {
	const [activo, setActivo] = useState("luzVerde");

	const Seleccion = item => {
		setActivo(item.target.className);
	};

	return (
		<div className="text-center mt-5">
			<div className="semaforo">
				<div
					className={
						"luzRoja" + (activo === "luzRoja" ? "Activa" : "")
					}
					onClick={Seleccion}></div>

				<div
					className={
						"luzNaranja" + (activo === "luzNaranja" ? "Activa" : "")
					}
					onClick={Seleccion}></div>

				<div
					className={
						"luzVerde" + (activo === "luzVerde" ? "Activa" : "")
					}
					onClick={Seleccion}></div>
			</div>
		</div>
	);
}

//Aca abajo esta la primera version del trabajo, sin el uso de hooks

// export function Home() {
// 	function Seleccion(evento) {
// 		if (evento.target.className === "luzRoja") {
//             evento.target.className = "luzRojaActiva";
// 		} else if (evento.target.className === "luzRojaActiva") {
// 			evento.target.className = "luzRoja";

// 			//Luz Naranja
// 		} else if (evento.target.className === "luzNaranja") {
// 			evento.target.className = "luzNaranjaActiva";
// 		} else if (evento.target.className === "luzNaranjaActiva") {
// 			evento.target.className = "luzNaranja";

// 			//Luz verde
// 		} else if (evento.target.className === "luzVerde") {
// 			evento.target.className = "luzVerdeActiva";
// 		} else if (evento.target.className === "luzVerdeActiva") {
// 			evento.target.className = "luzVerde";
// 		}
// 	}

// 	return (
// 		<div className="text-center mt-5">
// 			<div className="semaforo">
// 				<div className="luzRoja" onClick={Seleccion}></div>
// 				<div className="luzNaranja" onClick={Seleccion}></div>
// 				<div className="luzVerde" onClick={Seleccion}></div>
// 			</div>
// 		</div>
// 	);
// }
