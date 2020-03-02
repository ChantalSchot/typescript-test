enum move {
	X = "X", 
	O = "O"
}

class Square {
	content: move;
	x: number;
	y: number;

	constructor(x,y) {
		this.x = x;
		this.y = y;
		console.log("created square at " + this.x + ", " + this.y);
	};

	fillContent(playerSymbol: move): void {
		this.content = playerSymbol;
		console.log("Filling content... x: " + this.x + " y: " + this.y + " with player symbol: " + this.content);		
	}

	getContent(): move {
		return this.content;
	}

}

// let square1 = new Square(1,1);
// square1.fillContent(move.O);
// console.log(square1.getContent());

export { Square, move };