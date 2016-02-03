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

$(document).ready(function() {
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

	$('.apple-button').on('click', function() {
		$(this).data('value', appleCounter++);
		console.log(appleCounter);
	});

	$('.orange-button').on('click', function() {
		$(this).data('value', orangeCounter++);
		console.log(orangeCounter);
	});

	$('.banana-button').on('click', function() {
		$(this).data('value', bananaCounter++);
		console.log(bananaCounter);
	});

	$('.grape-button').on('click', function() {
		$(this).data('value', grapeCounter++);
		console.log(grapeCounter);
	});

});

