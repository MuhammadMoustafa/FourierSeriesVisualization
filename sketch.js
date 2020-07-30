let time = 0;
let wave = [];

let radius = 100;
let slider;

function setup() {
	createCanvas(windowWidth, 500);
	circleSlider = createSlider(1, 30, 1);
	timeSlider = createSlider(1, 1000, 1);
}

function draw() {
	background(0)

	let smallCircleCenterX = 0;
	let smallCircleCenterY = 0;



	translate(200, 200)

	for (let i = 0; i < circleSlider.value(); i++) {

		let n = 2 * i + 1
		// let n = i + 1
		prevX = smallCircleCenterX;
		prevY = smallCircleCenterY;

		noFill()
		stroke(255, 100)
		radius = 100 * 4 / (n * PI)

		ellipse(smallCircleCenterX, smallCircleCenterY, radius * 2)
		smallCircleCenterX += radius * cos(n * time);
		smallCircleCenterY += radius * sin(n * time);

		fill(255)
		ellipse(smallCircleCenterX, smallCircleCenterY, radius / 10)
		stroke(255)
		line(prevX, prevY, smallCircleCenterX, smallCircleCenterY)

		//translate(-200, 0)
	}

	translate(400, 0)
	wave.unshift(smallCircleCenterY)
	line(smallCircleCenterX - 400, smallCircleCenterY, 0, wave[0])

	beginShape();
	noFill()
	wave.forEach((value, index) => {
		vertex(index, value);
	});
	endShape();

	time += timeSlider.value() / 20

	if (wave.length > 5000) {
		wave.pop()
	}
}