
const FACTOR = 0.5; // 1 is 1080x1920

let flPortada, flIniciar, flVertical;

let flTouched = false;
let flClicked = false;
let flSended = false;
let flChanged = false;
let flOpened = false;

let e1 = null;
let e2 = null;

let dejavu;

function preload() {
	dejavu = loadFont("../fonts/DejaVuSansMono.ttf"); // ***
}

function setup() {
	createCanvas(1080 * FACTOR, 1920 * FACTOR).parent("conten");
	displayMode("none");

	textFont(dejavu);
	textSize(20);
	textAlign(CENTER, CENTER);
	angleMode(DEGREES);
	rectMode(CENTER);
	strokeWeight(2);
  frameRate(25);

	flPortada = true;
	flIniciar = true;

	setTimeout(()=>{
		document.getElementById("q5Canvas0").addEventListener("pointerdown", (e) => {
			flClicked = {estado: true, tipo: e.pointerType };
			if (flPortada) clickAbrirFs();
			else clickCerrarFs();
		});


	});
}

function draw() {
	clear();

	if (windowWidth * 16 < windowHeight * 9) {
		background(frameCount % 255, 100);
		flIniciar = true;
	}
	else {
		background(255 - frameCount % 255, 20, frameCount % 255, 100);
		flIniciar = false;
	}

	fill(255, 0, 0);
	circle(0, 0, 50);
	fill(255, 220, 220);
	circle(width, 0, 50);
	fill(255, 0, 220);
	circle(0, height, 50);
	fill(255, 220, 0);
	circle(width, height, 50);

	// polar coordinates
	translate(width / 2, height / 2);

	// landing
	if (flPortada) {
		push();
		textSize(50);
		noStroke();
		fill(120, 90, 250);
		text("click!", 0, 0);
		pop();

		push();
		if (flTouched) text("flTouched", -100, 50);
		if (flClicked.estado) text("flClicked " + flClicked.tipo, -100, 100);
		if (flSended) text("flSended", -100, 125);
		if (flChanged) text("flChanged", -100, 150);
		if (flOpened) text("flOpened", -100, 175);
		textSize(12);
		if (e1) text(`e1: ${JSON.stringify(e1)}`, -150, 230);
		if (e2) text(`e2: ${JSON.stringify(e2)}`, -150, 330);

		pop();
		return;
	}

	stroke(200, 0, 0);
	fill(200, 200, 20, 120);
	rect(0, 0, width * 0.98, width * 0.98);

	stroke(0);
	fill(0,200, 220, 120);
	rect(0, 0, 90 * 5.6, 160 * 5.6)
	fill(110, 210, 250, 150);
	circle(0, 0, 300);

	push();
	if (flTouched) text("flTouched", -100, 50);
	if (flClicked.estado) text("flClicked " + flClicked.tipo, -100, 100);
	if (flSended) text("flSended", -100, 125);
	if (flChanged) text("flChanged", -100, 150);
	if (flOpened) text("flOpened", -100, 175);
	textSize(12);
	if (e1) text(`e1: ${JSON.stringify(e1)}`, -150, 230);
	if (e2) text(`e2: ${JSON.stringify(e2)}`, -150, 330);
	pop();

	if (flIniciar) return;

	// btnEsc.dibujar();
}

function touchStarted() {
	flTouched = true;
}

function mousePressed() {
	flTouched = true;
}