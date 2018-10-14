//declare default variables
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
	cookieCount = cookieCount + clickPower;
	refreshCookieCount()
})

//Buy click power
buyClickPower.addEventListener("click", function() {
	if (cookieCount >= clickPowerPriceAmount) {
		//subtract cookies from the price of the item
		cookieCount -= clickPowerPriceAmount;
		refreshCookieCount()
		//Upgrade power level
		clickPowerLevelNumber += 1;
		//Update click price
		clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
		//Update click power
		clickPower += 1;
		//refresh shop item
		refreshPowerClick();
	}
})

let refreshCookieCount = function() {
	cookieCounter.innerHTML = cookieCount;
}

let refreshPowerClick = function() {
	clickPowerLevel.innerHTML = clickPowerLevelNumber
	clickPowerPrice.innerHTML = clickPowerPriceAmount;
	clickPowerMultiple.innerHTML = clickPower;
}