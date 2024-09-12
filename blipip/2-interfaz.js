	// button
	// stroke(200, 100, 190, 60);
	// fill(200, 100, 190, 10);
	// rect(0, -421, 50, 30, 6);
	// noStroke();
	// fill(200, 100, 190, 90);
	// text("esc", 0, -420);

	function mouseReleased() {

		// fuera del sketch
		if (
			 mouseX < 0 ||
			mouseX > width ||
			mouseY < 0 ||
			mouseY > height
		) return;
	
		// abrir fullscreen
		clickAbrirFs();
	
		// primera vez fs
		if (flIniciar) {
			// btnEsc = new BotonEsc(100, 300, 120, 50);
			flIniciar = false;
		}

		// boton esc
		if (!flPortada) {
			// if (btnEsc.sobre(mouseX, mouseY)) clickCerrarFs();
			return;
		}
	}

	class BotonEsc {
		constructor(p_x, p_y, m_x, m_y) {
			this.pos = {
				x: p_x,
				y: p_y
			}
			this.med = {
				x: m_x,
				y: m_y
			}
			this.txSz = 20;
			this.yCorr = this.txSz * 0.05;
		}

		dibujar() {
			push();
			resetMatrix();
			stroke(200, 100, 190, 60);
			fill(200, 100, 190, 10);
			rect(this.pos.x, this.pos.y, this.med.x, this.med.y, 6); // fondo

			noStroke();
			fill(200, 100, 190, 90)
			textSize(this.txSz);
			text("esc", this.pos.x, this.pos.y - this.yCorr) // texto
			pop();
		}

		sobre(s_x, s_y) {
			if (
				s_x < this.pos.x + this.med.x &&
				s_x < this.pos.x + this.med.x &&
				s_y < this.pos.y + this.med.y
			) return true;
			return false;
		}

		getX() { return this.pos.x; }
		getY() { return this.pos.y; }
		setX(s_x) { this.pos.x = s_x; }
		setY(s_y) { this.pos.y = s_y; }
	}