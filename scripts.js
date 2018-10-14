  /*----------------*/
 /* Cookie Clicker */
/*----------------*/

// defaults
let cookieCount = 0

// DOM declarations
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

// everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
	cookieCount = cookieCount + clickPower;
	refreshCookieCount()
})

// refresh cookie count
let refreshCookieCount = function() {
	cookieCounter.innerHTML = cookieCount;
}


  /*----------------*/
 /* Clicker Powers */
/*----------------*/

// declare default variables
let clickPower = 1;
let clickPowerPriceAmount = 6;
let clickPowerLevelNumber = 1;

// declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

// buy click power
buyClickPower.addEventListener("click", function() {
	if (cookieCount >= clickPowerPriceAmount) {

		//subtract cookies from the price of the item
		cookieCount -= clickPowerPriceAmount;
		refreshCookieCount()

		//Upgrade power level
		clickPowerLevelNumber += 1;

		//Update click price
		clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 4 / 3);

		//Update click power
		clickPower += 1 * Math.floor(clickPowerLevelNumber * (4 / 5));

		//refresh shop item
		refreshPowerClick();
	}
})

// refresh click power
let refreshPowerClick = function() {
	clickPowerLevel.innerHTML = clickPowerLevelNumber;
	clickPowerPrice.innerHTML = clickPowerPriceAmount;
	clickPowerMultiple.innerHTML = clickPower;
}



  /*----------------*/
 /*  Grandmothers  */
/*----------------*/

//set default values
let autoGrandma = false
let grandmaPower = 0;
let grandmaPriceAmount = 144; // set to 500 later
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grandma
buyGrandma.addEventListener("click", function() {
	if (cookieCount >= grandmaPriceAmount) {
		//turn autoGrandma on!
		autoGrandma = true
		autoGrandmaStart();

		//subtract cookies from the price of the item
		cookieCount -= grandmaPriceAmount;
		refreshCookieCount()

		//Upgrade power level
		grandmaLevelNumber += 1;

		//Update click price
		grandmaPriceAmount = Math.floor(grandmaPriceAmount * 7 / 3);

		//Update click power
		grandmaPower += Math.floor(grandmaLevelNumber * 2);

		//refresh shop item
		refreshGrandma();
	}
})

let autoGrandmaStart = function() {
	let grandmaInt = window.setInterval(function(){
		cookieCount += grandmaPower;
		refreshCookieCount();
	}, 1000);
}

let refreshGrandma = function() {
	grandmaLevel.innerHTML = grandmaLevelNumber
	grandmaPrice.innerHTML = grandmaPriceAmount;
	grandmaMultiple.innerHTML = grandmaPower;
}


  /*----------------*/
 /*  Grandmothers  */
/*----------------*/

//set default values
let autoFactory = false
let factoryPower = 0;
let factoryPriceAmount = 2400; // set to 100000 later
let factoryLevelNumber = 0;

//declare DOM variables
let buyFactory = document.getElementById('buy-factory');
let factoryPrice = document.getElementById('factory-price');
let factoryLevel = document.getElementById('factory-level');
let factoryMultiple = document.getElementById('factory-multiple');

//buy a factory
buyFactory.addEventListener("click", function() {
	if (cookieCount >= factoryPriceAmount) {
		//turn autoFactory on!
		autoFactory = true
		autoFactoryStart();

		//subtract cookies from the price of the item
		cookieCount -= factoryPriceAmount;
		refreshCookieCount()

		//Upgrade power level
		factoryLevelNumber += 1;

		//Update click price
		factoryPriceAmount = Math.floor(factoryPriceAmount * 11 / 3);

		//Update click power
		factoryPower += 1000000 * Math.floor(factoryLevelNumber * 12 / 4);

		//refresh shop item
		refreshFactory();
	}
})

let autoFactoryStart = function() {
	let factoryInt = window.setInterval(function(){
		cookieCount += factoryPower;
		refreshCookieCount();
	}, 600000);
}

let refreshFactory = function() {
	factoryLevel.innerHTML = factoryLevelNumber
	factoryPrice.innerHTML = factoryPriceAmount;
	factoryMultiple.innerHTML = factoryPower;
}