// click abrir fullscreen
function clickAbrirFs() {
	if (document.documentElement.requestFullscreen) {
		// document.documentElement.requestFullscreen(); // CHR

		document.documentElement.requestFullscreen().then(() => {
		}).catch((error) => {
			e1 = error;
		});
	}

	else if (document.documentElement.webkitRequestFullscreen)
		document.documentElement.webkitRequestFullscreen(); // SFI
	else if (document.documentElement.mozRequestFullScreen)
		document.documentElement.mozRequestFullScreen(); // FFX

	flSended = true;
}

// click cerrar fullscreen
function clickCerrarFs() {
	if (document.exitFullscreen)
		document.exitFullscreen(); // CHR
	else if (document.webkitExitFullscreen)
		document.webkitExitFullscreen(); // SFI
	else if (document.mozCancelFullScreen)
		document.mozCancelFullScreen(); // FFX
}

// consecuencias de abrir fullscreen
function cambiarHaciaAbierta() {
	flPortada = false;

	setTimeout(() => {
		document.querySelector("header").style.display = "none";
		document.querySelector("footer").style.display = "none";
		document.querySelector("main").style.width = "100svw";
		document.querySelector("main").style.height = "100svh";
		flOpened = true;
		let _w, _h;
		
		// caso vertical
		if (window.visualViewport.width * 16 < window.visualViewport.height * 9) {
			flVertical = true;
			_w = 1080 * FACTOR;
			_h = (window.visualViewport.height * _w) / window.visualViewport.width;
		}
		// caso horizontal
		else {
			flVertical = false;
			_h = 1920 * FACTOR;
			let prp = (window.visualViewport.width * _h) / window.visualViewport.height;
			_w = constrain(prp, 1080 * FACTOR, _h);
		}
		console.log(_w, _h);
		resizeCanvas(_w, _h);
	}, 0);
}

// consecuencias de cerrar fullscreen
function cambiarHaciaCerrada() {
	flPortada = true;
	document.querySelector("header").style.display = "flex";
	document.querySelector("footer").style.display = "flex";
	document.querySelector("main").style.height = "80svh";
	resizeCanvas(1080 * FACTOR, 1920 * FACTOR);
}

// cambio estado screen
function eventoCambioFs() {
	
  if ( // estaba abierta y se cerro
    !document.fullscreenElement && // CHR
    !document.webkitFullscreenElement && // SFI
    !document.mozFullScreenElement // FFX
  ) {
    cambiarHaciaCerrada();
  }
	else { // estaba cerrada y se abrio
    cambiarHaciaAbierta();
		flChanged = true;
  }
}

// escuchar cambio de fullscreen
document.addEventListener("fullscreenchange", eventoCambioFs); // CHR y FFX
document.addEventListener("webkitfullscreenchange", eventoCambioFs); // SFI

// escuchar error de fullscreen
document.addEventListener('fullscreenerror', (event) => { e2 = event });