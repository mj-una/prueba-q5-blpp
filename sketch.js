// first test of q5
// blipip soon

let o, s, d, p, e;

function setup() {
	createCanvas(540, 960);
	displayMode("maxed"); // love it!!!

	angleMode(DEGREES);
  frameRate(25);

	s = 1; // slowing
	d = 0.01; // delta
	p = true; // press
	e = false; // end
}

function draw() {
	background(9, 5, 6);

	// polar coordinates
	translate(270, 480); 
  
  for (let i = 50; i > 0; i--) {
    
		// rhythm
		let r = sin(frameCount * 8);
    let fr = map(r, -1, 1, 0.6, 1);

		// slow
		if (mouseIsPressed) {
			if (p) {
				p = false;
				e = true;
				s = 1;
			}
			if (abs(r) > d) r /= s;
			if (abs(fr) > d) fr /= s;
			if (s < 3) s += 0.0005;
		}
		else { // normal
			if (e) {
				e = false;
				p = true;
			}
			if (s > 1) {
				s -= 0.0008;
				if (s < 1) s = 1; 
				r /= s;
				fr /= s;
			}
		}

		// position
		let x = (noise(frameCount * 0.031 + i * 0.079 * fr) - 0.5) * 390 * fr;
		let y = (noise(frameCount * 0.069 + i * 0.067 * fr) - 0.5) * 520 * fr;
    
		// lines
		// if (i % 2 == 0) {
		// 	strokeWeight(map(i, 50, 0, 16, 0));
		// 	line(x, y, 540, 0);
		// 	line(x, y, -540, 0);
		// 	line(x, y, 270, -467.65);
		// 	line(x, y, 270, 467.65);
		// 	line(x, y, -270, -467.65);
		// 	line(x, y, -270, 467.65);
		// }

		// color
		strokeWeight(2);
    stroke(9, 5, 6, 4 * (50 - i));
    fill(
      constrain(map(r, -1, 1, 120, 255) - i * 4, 9, 255),
      constrain(map(r, -1, 1, 170, 190) - i * 5, 5, 255),
      constrain(255 - i * 6, 6, 255)
    );

		// shape
    circle(x, y, (i + 1) * 23);
  }

	// fps?
	// if (frameCount % 90 == 1) console.log(frameRate());
}