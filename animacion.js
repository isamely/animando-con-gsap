
document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("load", () => {
		//accedemos al archivo svg que enlazamos en el html
		let doc = document.getElementById("ilustracion").contentDocument;
		// capturamos cada uno de los id
		let vaca = doc.getElementById("vaca");
		let luz = doc.getElementById("luz");
		let ufo_super = doc.getElementById("ufo_super");
		//movemos la vaca
		//TweenMax.from(vaca, 2, {x:-2000});
		//desaparecemos la luz
		TweenMax.set(luz, {opacity:0});
		TweenMax.set(vaca, {opacity:0});

		var linea = new TimelineMax({
			paused: true
		});
		linea.from(ufo_super, 2, {x:-1000})
			.to(vaca, 0.5, {opacity:1})
			.to(luz, 0.5, {opacity:1})
			.to(vaca, 3, {y: -230, scale: 0.4, rotation: 20})
			.to(vaca, 0.2, {opacity:0})
			.to(luz, 0.4, {opacity:0})
			.to(ufo_super,1.8, {x: 1000})
		
		let pausar = document.getElementById("pausar");	
		pausar.addEventListener("click", () => {
			linea.play()
		});	
		//console.log(vaca);
	}, false);
});