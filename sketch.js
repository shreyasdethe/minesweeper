let cells = [];
let size = 8;
let w = 35;

let mineCounttotal = 0;
let addmoremines = true;

let gameOver = false;


//---------setup, initialize-------//
function setup(){
	canvas = createCanvas(size*w + 1, size*w + 1);


	for(let j = 0; j < size; j++){
		for(let i = 0; i < size; i++){
			cells[size*i + j] = new Cell(w*i, w*j);
		}
	}

	for(let i = 0; i < size*size; i++){
		cells[i].show();
		//cells[i].isRevealed = true;

		if(random(1) < 0.2 && addmoremines){
			cells[i].isMine = true;
			mineCounttotal++;
			if(mineCounttotal == 10) addmoremines = false;
		}
		else cells[i].isMine = false;
	}

}


//-----draw loop------------//
function draw(){
	for(let i = 0; i < size*size; i++){
		cells[i].show();
	}
}




//----------on Mouse clicked----------//

function mouseClicked(){
	if(!gameOver){
		let cellIndex = 0;

		if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
			let mX = floor(mouseX / w);
			let mY = floor(mouseY / w);
			cellIndex = size*(mX) + mY;

			cells[cellIndex].isRevealed = true;
		}



		if(cells[cellIndex].isMine == false){

			cells[cellIndex].mineCount = 0;
			if((cellIndex + 1) % size != 0)									{ if(cells[cellIndex+1].isMine 		== true)	cells[cellIndex].mineCount++;}
			if(cellIndex % size != 0)										{ if(cells[cellIndex-1].isMine 		== true)	cells[cellIndex].mineCount++;}
			if(cellIndex+size < size*size - 1) 								{ if(cells[cellIndex+size].isMine 	== true)	cells[cellIndex].mineCount++;}
			if(cellIndex-size > 0) 											{ if(cells[cellIndex-size].isMine 	== true)	cells[cellIndex].mineCount++;}
			if(cellIndex+size+1 < size*size - 1 && (cellIndex + 1) % size != 0) 	{ if(cells[cellIndex+size+1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex+size-1 < size*size - 1 && cellIndex % size != 0) 			{ if(cells[cellIndex+size-1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex-size+1 > 0 && (cellIndex + 1) % size != 0) 				{ if(cells[cellIndex-size+1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex-size-1 > 0 && cellIndex % size != 0) 						{ if(cells[cellIndex-size-1].isMine 	== true) 	cells[cellIndex].mineCount++;}
		}

		else{

			cells[cellIndex].mineCount = 0;
			if((cellIndex + 1) % size != 0)									{ if(cells[cellIndex+1].isMine 		== true)	cells[cellIndex].mineCount++;}
			if(cellIndex % size != 0)										{ if(cells[cellIndex-1].isMine 		== true)	cells[cellIndex].mineCount++;}
			if(cellIndex+size < size*size - 1) 								{ if(cells[cellIndex+size].isMine 	== true)	cells[cellIndex].mineCount++;}
			if(cellIndex-size > 0) 											{ if(cells[cellIndex-size].isMine 	== true)	cells[cellIndex].mineCount++;}
			if(cellIndex+size+1 < size*size - 1 && (cellIndex + 1) % size != 0) 	{ if(cells[cellIndex+size+1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex+size-1 < size*size - 1 && cellIndex % size != 0) 			{ if(cells[cellIndex+size-1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex-size+1 > 0 && (cellIndex + 1) % size != 0) 				{ if(cells[cellIndex-size+1].isMine 	== true) 	cells[cellIndex].mineCount++;}
			if(cellIndex-size-1 > 0 && cellIndex % size != 0) 						{ if(cells[cellIndex-size-1].isMine 	== true) 	cells[cellIndex].mineCount++;}

			for(let i = 0; i < size*size; i++){
				if(cells[i].isMine) cells[i].isRevealed = true;
				gameOver = true;
			}
		}
	}
}





//-----------Cell class----------//
class Cell{

	isRevealed;
	isMine;

	mineCount;

	constructor(x_, y_){
		this.x = x_;
		this.y = y_;
		this.mineCount = 0;
	}

	show(){
		stroke(0);
		strokeWeight(1);

		if(this.isRevealed){
			fill(150);
			rect(this.x, this.y, w, w);

			if(this.isMine){
				stroke(0);
				strokeWeight(0.5);
				fill(10);
				ellipse(this.x + w/2, this.y + w/2, w/2, w/2);
			}

			if(!this.isMine){
				textAlign(CENTER);
				textSize(28);
				fill(50);
				text(this.mineCount, this.x + 0.5*w, this.y + 0.75*w);
			}
		}

		else{
			fill(255);
			rect(this.x, this.y, w, w);
		}

		

	}
}
