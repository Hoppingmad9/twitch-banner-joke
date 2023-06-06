let windowSize
let logoSize
let logoHeight
let logoWidth
let pixelWidth
let pixelHeight

const scaler = 10
const logo = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", "T", "T", "T", " ", "W", " ", " ", " ", " ", " ", "W", " ", "I", " ", "T", "T", "T", " ", " ", "C", "C", " ", "H", " ", "H", " "],
	[" ", " ", "T", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "I", " ", " ", "T", " ", " ", "C", "C", " ", " ", "H", " ", "H", " "],
	[" ", " ", "T", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "I", " ", " ", "T", " ", " ", "C", " ", " ", " ", "H", " ", "H", " "],
	[" ", " ", "T", " ", " ", "W", "W", " ", " ", " ", "W", "W", " ", "I", " ", " ", "T", " ", " ", "C", " ", " ", " ", "H", "H", "H", " "],
	[" ", " ", "T", " ", " ", " ", "W", " ", "W", " ", "W", " ", " ", "I", " ", " ", "T", " ", " ", "C", " ", " ", " ", "H", " ", "H", " "],
	[" ", " ", "T", " ", " ", " ", "W", "W", "W", "W", "W", " ", " ", "I", " ", " ", "T", " ", " ", "C", "C", " ", " ", "H", " ", "H", " "],
	[" ", " ", "T", " ", " ", " ", " ", "W", " ", "W", " ", " ", " ", "I", " ", " ", "T", " ", " ", " ", "C", "C", " ", "H", " ", "H", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", "S", "S", " ", " ", " ", " ", " ", " ", " ", "S", "S", "S", " ", " ", " ", " ", " ", " ", " ", "S", "S", "S", " ", " ", " ", " "],
	[" ", " ", "S", "S", " ", " ", " ", " ", " ", "S", "S", " ", "S", "S", " ", " ", " ", " ", " ", "S", "S", " ", "S", "S", " ", " ", " "],
	[" ", " ", " ", "S", "S", " ", " ", " ", "S", "S", " ", " ", " ", "S", "S", " ", " ", " ", "S", "S", " ", " ", " ", "S", "S", " ", " "],
	[" ", " ", " ", " ", "S", "S", " ", "S", "S", " ", " ", " ", " ", " ", "S", "S", " ", "S", "S", " ", " ", " ", " ", " ", "S", "S", " "],
	[" ", " ", " ", " ", " ", "S", "S", "S", " ", " ", " ", " ", " ", " ", " ", "S", "S", "S", " ", " ", " ", " ", " ", " ", " ", "S", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
]

function setup() {
	createCanvas(windowWidth, windowHeight)
	windowSize = windowWidth * windowHeight
	logoSize = windowSize * 0.03 * scaler
	logoWidth = (Math.sqrt(logoSize/2) * 2)
	logoHeight = (Math.sqrt(logoSize/2))
	pixelWidth = logoWidth/logo[0].length
	pixelHeight = logoHeight/logo.length

	strokeWeight(0)
	
}

function draw() {
	background(155)
	// fill(0)
	// rect(0, 0, logoWidth, logoHeight)
	fill("#6441a5")
	logo.forEach((row, rowIndex) => {
		row.forEach((pixel, colIndex) => {
			if (pixel !== " ") {
				let pixelX = colIndex*pixelWidth
				let pixelY = rowIndex*pixelHeight
				let subPixelWidth = pixelWidth/10
				let subPixelHeight = pixelHeight/10
				push()
				translate(pixelX, pixelY)
				for (let i = 0; i < 10; i++) {
					for (let j = 0; j < 10; j++) {
						if (Math.floor(Math.random() * scaler) === 0) {
							rect(j*subPixelWidth, i*subPixelHeight, subPixelWidth, subPixelHeight)
						}
					}
				}
				pop()
			}
		});
	});
}