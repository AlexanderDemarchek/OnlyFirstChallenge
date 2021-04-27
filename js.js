let button = document.querySelector(".mb");
let firstBlock = document.querySelector(".leftColumn");
let secondBlock = document.querySelector(".rightColumn");
let returnState = 0;
let handler = function()
{
	if(returnState < 1){
		firstBlock.className = "leftColumnChanged";
		secondBlock.className = "rightColumnChanged";
		returnState = 2;
	}
	else{
		firstBlock.className = "leftColumn";
		secondBlock.className = "rightColumn";
		returnState = 0;
	}
}

button.addEventListener("click", handler);
