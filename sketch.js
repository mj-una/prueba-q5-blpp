// first test of q5
// blipip soon

let slowing, delta;
let pressed, ended;

let dejavu;

function preload() {
	dejavu = loadFont("./fonts/DejaVuSansMono.ttf");
}

function setup() {
	createCanvas(540, 960);
	displayMode("maxed"); // love it!!!

	textFont(dejavu);
	textSize(20);
	textAlign(CENTER, CENTER);
	angleMode(DEGREES);
	rectMode(CENTER);
	strokeWeight(2);
  frameRate(25);

	slowing = 1;
	delta = 0.01;
	pressed = true;
	ended = false;
}

function draw() {
	background(9, 5, 6);

	// polar coordinates
	translate(270, 480); 
  
	// repeat for 50 circles
  for (let i = 50; i > 0; i--) {
    
		// rhythm
		let r = sin(frameCount * 8);
    let fr = map(r, -1, 1, 0.6, 1);

		// slow
		if (mouseIsPressed) {
			if (pressed) {
				pressed = false;
				ended = true;
				slowing = 1;
			}
			if (abs(r) > delta) r /= slowing;
			if (abs(fr) > delta) fr /= slowing;
			if (slowing < 3) slowing += 0.0005;
		}
		else { // normal
			if (ended) {
				ended = false;
				pressed = true;
			}
			if (slowing > 1) {
				slowing -= 0.0008;
				if (slowing < 1) slowing = 1; 
				r /= slowing;
				fr /= slowing;
			}
		}

		// position
		let x = (noise(frameCount * 0.031 + i * 0.079 * fr) - 0.5) * 390 * fr;
		let y = (noise(frameCount * 0.069 + i * 0.067 * fr) - 0.5) * 520 * fr;

		// circles
		push();
    stroke(9, 5, 6, 4 * (50 - i));
    fill(
      constrain(map(r, -1, 1, 120, 295) - i * 4, 9, 255),
      constrain(map(r, -1, 1, 170, 190) - i * 5, 5, 255),
      constrain(255 - i * 6, 6, 265)
    );
    circle(x, y, (i + 0.5) * 22);
		pop();
  }

	// BUG!!!!!!!
	circle(2000, 0, 0);

	// button previw (the ui will be in blipip.html)
	push();
	stroke(200, 100, 190, 60);
	fill(200, 100, 190, 10);
	rect(0, -421, 50, 30, 6);
	noStroke();
	fill(200, 100, 190, 90)
	text("esc", 0, -420)
	pop();

	// fps?
	// if (frameCount % 90 == 1) console.log(frameRate());
}