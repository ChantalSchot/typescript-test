import {Square, move} from "./tictactoe-square";

const SQUARE_SIZE = 120;


class TicTacToe {
	playerToMove: move;
	board: Square[] = [];
	canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");

	newGame() {
		// player to start game: 
		this.playerToMove = move.X;

		// initialise 3x3 board:
		for (let y = 0; y < 3; y++) {
			for (let x = 0; x < 3; x++) {
				this.board.push(new Square(x,y));
			}
		}

		// console.log current game state:
		this.logState();
	}

	private logState() {
		console.log(`Player to move: ${this.playerToMove}`);
		console.log("Current board:")
		console.log(this.board);
		
		
	}

	drawBoard() {
		game.canvas.width = 3 * SQUARE_SIZE;
		game.canvas.height = 3 * SQUARE_SIZE;

		var ctx = game.canvas.getContext("2d");
		ctx.lineWidth = 5;
		ctx.strokeStyle = "black";

		this.board.forEach(square => {
			const startX = square.x * SQUARE_SIZE;
			const startY = square.y * SQUARE_SIZE;

			ctx.strokeRect(startX, startY, SQUARE_SIZE, SQUARE_SIZE);
		})
	}

	handleClick(e: MouseEvent) {
		console.log(e.offsetX, e.offsetY);
		let coordX = Math.floor(e.offsetX / SQUARE_SIZE);
		let coordY = Math.floor(e.offsetY / SQUARE_SIZE);

		let clickedSquare = game.board.find(sq => sq.x === coordX && sq.y === coordY);
		console.log(clickedSquare.content);

		if (clickedSquare.content != undefined) {
			alert("Square is already filled! Pick another...");
			console.log("Square is already filled...")
		}
		else {
			clickedSquare.fillContent(game.playerToMove);
			game.fillSquare(game.playerToMove, clickedSquare);
		}
		
	}

	fillSquare(player: move, square: Square) {
		var ctx = game.canvas.getContext("2d");
		ctx.lineWidth = 8;

		let startX = square.x * SQUARE_SIZE;
		let startY = square.y * SQUARE_SIZE;
		let padding = 0.1 * SQUARE_SIZE;

		if (player.includes("O")) { 
			// Draw O:
			ctx.strokeStyle = "red";
			const HALF_SQUARE = 0.5 * SQUARE_SIZE;

			ctx.beginPath();
			ctx.arc(startX + HALF_SQUARE, startY + HALF_SQUARE, 0.4*SQUARE_SIZE, 0, 2 * Math.PI);
			ctx.stroke();
			game.playerToMove = move.X;

		} else {
			// Draw X:
			ctx.strokeStyle = "blue";

			ctx.beginPath();
			ctx.moveTo(startX + padding, startY + padding);
			ctx.lineTo((startX + SQUARE_SIZE - padding), (startY + SQUARE_SIZE - padding));
			ctx.moveTo((startX + SQUARE_SIZE - padding), startY + padding);
			ctx.lineTo(startX + padding, (startY + SQUARE_SIZE - padding));
			ctx.stroke();
			game.playerToMove = move.O;
		}
		console.log(game.board);

	}

}

let game = new TicTacToe;
game.newGame();
game.drawBoard();
document.getElementById("myCanvas").addEventListener("click", game.handleClick);


	// Check win condition to see if game is finished
	// Change playerToMove to opposite player
	// add text of current standings
	// add text of who is winner
	// add move counter
	// be creative :-)