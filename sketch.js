let cells = [];
let size = 50;

function setup(){
	canvas = createCanvas(size*10 + 1, size*10 + 1);


	for(let j = 0; j < size; j++){
		for(let i = 0; i < size; i++){
			cells[size*i + j] = new Cell(10*i, 10*j);
		}
	}

	for(let i = 0; i < size*size; i++){
		cells[i].show();
	}

}


//-----------Cell class----------//
class Cell{


	constructor(x_, y_){
		this.x = x_;
		this.y = y_;
	}

	show(){
		stroke(0);
		strokeWeight(1);
		fill(50);
		rect(this.x, this.y, 10, 10);
	}
}