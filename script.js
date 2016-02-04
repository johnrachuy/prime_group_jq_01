var totalCash = 100;
var appleCounter = 0;
var orangeCounter = 0;
var bananaCounter = 0;
var grapeCounter = 0;


function Fruit (name, price) {
	this.name = name;
	this.price = price;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function setPrice() {
	apple.price += randomNumber(-50, 50);
	if (apple.price > 999) {
		apple.price = 999;
	} else if (apple.price < 50) {
		apple.price = 50;
	}
	$('.apple').children().first().remove();
	$('.apple').prepend('<p>The price of apples today is $' + (apple.price / 100) + '</p>');

	orange.price += randomNumber(-50, 50);
	if (orange.price > 999) {
		orange.price = 999;
	} else if (orange.price < 50) {
		orange.price = 50;
	}
	$('.orange').children().first().remove();
	$('.orange').prepend('<p>The price of oranges today is $' + (orange.price / 100) + '</p>');

	banana.price += randomNumber(-50, 50);
	if (banana.price > 999) {
		banana.price = 999;
	} else if (banana.price < 50) {
		banana.price = 50;
	}
	$('.banana').children().first().remove();
	$('.banana').prepend('<p>The price of bananas today is $' + (banana.price / 100) + '</p>');

	grape.price += randomNumber(-50, 50);
	if (grape.price > 999) {
		grape.price = 999;
	} else if (grape.price < 50) {
		grape.price = 50;
	}
	$('.grape').children().first().remove();
	$('.grape').prepend('<p>The price of grapes today is $' + (grape.price / 100) + '</p>');

	console.log(apple.price);
}

var apple = new Fruit('apple', randomNumber(50, 999));
var orange = new Fruit('orange', randomNumber(50, 999));
var banana = new Fruit('banana', randomNumber(50, 999));
var grape = new Fruit('grape', randomNumber(50, 999));


$(document).ready(function() {

	$('body').prepend('<div class="cash">Total Cash: $' + totalCash + '</div>');

	$('#fruit-counter').append('<div class="apple">Apple</div>');
	$('#fruit-counter').append('<div class="orange">Orange</div>');
	$('#fruit-counter').append('<div class="banana">Banana</div>');
	$('#fruit-counter').append('<div class="grape">Grape</div>');

	$('.apple').append('<button class="apple-button">Buy Apple</button>');
	$('.orange').append('<button class="orange-button">Buy Orange</button>');
	$('.banana').append('<button class="banana-button">Buy Banana</button>');
	$('.grape').append('<button class="grape-button">Buy Grape</button>');

	$('.apple').append('<img src="http://weknowyourdreamz.com/images/apple/apple-01.jpg" height="200" width="200" />');
	$('.orange').append('<img src="http://images6.fanpop.com/image/photos/34500000/Orange-Fruit-orange-34512935-600-600.png" height="200" width="200" />');
	$('.banana').append('<img src="http://www.granini.com/data/images/fruit_images/full/banana.png" height="200" width="200" />');
	$('.grape').append('<img src="http://www.jennagardens.com/wp-content/uploads/2014/11/superior-full-bunch-additional-image.jpg" height="200" width="200" />');

	var $apple = $('.apple').children().last();
	var $orange = $('.orange').children().last();
	var $banana = $('.banana').children().last();
	var $grape = $('.grape').children().last();

	$apple.data('value', appleCounter);
	$orange.data('value', orangeCounter);
	$banana.data('value', bananaCounter);
	$grape.data('value', grapeCounter);

	$('.apple').prepend('<p>The price of apples today is $' + (apple.price / 100) + '</p>');
	$('.orange').prepend('<p>The price of oranges today is $' + (orange.price / 100) + '</p>');
	$('.banana').prepend('<p>The price of bananas today is $' + (banana.price / 100) + '</p>');
	$('.grape').prepend('<p>The price of grapes today is $' + (grape.price / 100) + '</p>');

	var newPrice = window.setInterval(setPrice, 15000);

	$('.apple').append('<p>You have purchased ' + appleCounter + ' apple(s) today!</p>');
	$('.orange').append('<p>You have purchased ' + orangeCounter + ' orange(s) today!</p>');
	$('.banana').append('<p>You have purchased ' + bananaCounter + ' banana(s) today!</p>');
	$('.grape').append('<p>You have purchased ' + grapeCounter + ' bunch(es) of grapes today!</p>');


	$('.apple-button').on('click', function() {
		if (totalCash < apple.price / 100) {
			alert('Sorry, you don\'t have enough money to purchase an apple!');
		} else {
			totalCash -= (apple.price / 100);
			$('body').children().first().remove();
			$('body').prepend('<div class="cash">Total Cash: $' + Number(Math.round(totalCash + 'e2' ) + 'e-2') + '</div>');
			$('.apple').children().last().remove();
			$(this).data('value', appleCounter++);
			$('.apple').append('<p>You have purchased ' + appleCounter + ' apple(s) today!</p>');
		}
	});

	$('.orange-button').on('click', function() {
		if (totalCash < orange.price / 100) {
			alert('Sorry, you don\'t have enough money to purchase an orange!');
		} else {
			$('.orange').children().last().remove();
			$(this).data('value', orangeCounter++);
			$('.orange').append('<p>You have purchased ' + orangeCounter + ' orange(s) today!</p>');
			totalCash -= (orange.price / 100);
			$('body').children().first().remove();
			$('body').prepend('<div class="cash">Total Cash: $' + Number(Math.round(totalCash + 'e2' ) + 'e-2') + '</div>');
		}
	});

	$('.banana-button').on('click', function() {
		if (totalCash < banana.price / 100) {
			alert('Sorry, you don\'t have enough money to purchase a banana!');
		} else {
			$('.banana').children().last().remove();
			$(this).data('value', bananaCounter++);
			console.log(bananaCounter);
			$('.banana').append('<p>You have purchased ' + bananaCounter + ' banana(s) today!</p>');
			totalCash -= (banana.price / 100);
			$('body').children().first().remove();
			$('body').prepend('<div class="cash">Total Cash: $' + Number(Math.round(totalCash + 'e2' ) + 'e-2') + '</div>');
		}
	});

	$('.grape-button').on('click', function() {
		if (totalCash < grape.price / 100) {
			alert('Sorry, you don\'t have enough money to purchase any grapes!');
		} else {
			$('.grape').children().last().remove();
			$(this).data('value', grapeCounter++);
			$('.grape').append('<p>You have purchased ' + grapeCounter + ' bunch(es) of grapes today!</p>');
			console.log(grapeCounter);
			totalCash -= (grape.price / 100);
			$('body').children().first().remove();
			$('body').prepend('<div class="cash">Total Cash: $' + Number(Math.round(totalCash + 'e2' ) + 'e-2') + '</div>');
		}
	});


});

