let button = document.querySelector(".main__mb");
let firstBlock = document.querySelector(".twoColumnBlock__leftColumn");
let secondBlock = document.querySelector(".twoColumnBlock__rightColumn");
let returnState = 0;
let handler = function()
{
	if(returnState < 1){
		firstBlock.classList.add("leftColumnChanged");
		secondBlock.classList.add("rightColumnChanged");
		returnState = 2;
	}
	else{
		firstBlock.classList.remove("leftColumnChanged");
		secondBlock.classList.remove("rightColumnChanged");
		returnState = 0;
	}
}

button.addEventListener("click", handler);
