var students = [
	{
		name: 'Evan',
		score: 94,
		isEnrolled: false
	},
	{
		name: 'Matt',
		score: 97,
		isEnrolled: true
	},
	{
		name: 'Courtney',
		score: 100,
		isEnrolled: true
	}
];

var myH1 = document.getElementById('names');
var myH2 = document.getElementById('scores');
var myH3 = document.getElementById('enrolled');


for(var i = 0; i <students.length; i++){
	myH1.innerText = myH1.innerText + students[i].name + " , ";
	myH2.innerText = myH2.innerText + students[i].score + " , ";
	myH3.innerText = myH3.innerText + students[i].isEnrolled + " , ";
}

// Different type of exercise: Higher order functions using .filter() method:
// creates a new array and expects true or false value

var animals = [	
	{name: 'Fluffykins', species: 'rabbit'},
	{name: 'Monroe', species: 'dog'},
	{name: 'Lily', species: 'cat'},
	{name: 'Orlando', species: 'dog'},
	{name: 'Harold', species: 'rabbit'},
	{name: 'Marilyn', species: 'cat'},
	{name: 'Maud', species: 'bird'},
	{name: 'Hyde', species: 'snake'},
	{name: 'Hamilton', species: 'dog'},
	{name: 'Doc', species: 'bird'}
];

// first optional answer:
var animalsType = function(item){

	return animals.filter(function(el){
		return item === el.species;
		});
};

animalsType('dog');

// second optional answer:
const arraySearchBySpecies = (array, type) => array.filter(item => item.species === type);
const arraySearchByName = (array, type) => array.filter(item => item.name === type);

arraySearchByName(animals, 'Maud');
arraySearchBySpecies(animals, 'bird');


// ES06 version:

const prettyPrint = (item) => `${item.name}: ${item.species}`;
console.log(prettyPrint(animals[0]));



// Different type of exercise: Higher order functions using .map() method:
// creates a new array with results of calling a provided function on
//every element in calling array.
var cars = [
	{model: 'Honda', year: 2001, color: 'blue'},
	{model: 'Mazda', year: 1999, color: 'silver'},
	{model: 'Toyota', year: 1992, color: 'red'},
	{model: 'Subaru', year: 2010, color: 'black'},
	{model: 'Hyndai', year: 1993, color: 'white'},
	{model: 'Ford', year: 2015, color: 'blue'}
];

// ES5:
var carType = cars.map(function(item){
	return 'Here is the ' + item.model + ' and the year is ' + item.year + 
	' and last, but not least, the color is ' + item.color + '.';
});

// ES06:
const vehiclesOfColor = (color) => cars.filter(car => car.color === color);
const blueCars = vehiclesOfColor('blue');
blueCars.forEach(console.log); //now it shows all blue cars.

vehiclesOfColor('blue');

const vehiclesFromYear = (year) => cars.filter(car => car.year === year);
vehiclesFromYear(2001);

const vehiclesByModel = (model) => cars.filter(car => car.model === model); 
vehiclesByModel('Ford');


// ES6:

var carType = cars.map((item) => `Here is the model: ${item.model}. This is the color: ${item.color}. And, last but not least, this is the year: ${item.year}.`);
console.log(carType);


// Different type of exercise: Higher order functions using .reduce() method:
// .reduce() is the multi-tool of list transformations.  Takes two parameters
// in a call-back function.


var orders = [
	{amount: 250},
	{amount: 100},
	{amount: 300},
	{amount: 725},
	{amount: 65}
];

var totalAmt = orders.reduce(function(sum, order){
	console.log('Hello', sum, orders);
	return sum + order.amount;
}, 0);

console.log(totalAmt);



const customersGroup =
{
	'Mark Johnson': [
		{name: 'waffle iron', price: 80, quantity: 2},
		{name: 'ties', price: 200, quantity: 3},
		{name: 'knife', price: 15, quantity: 5}
	],
	'Sally Howard': [
		{name: 'blow dryer', price: 180, quantity: 1},
		{name: 'pot', price: 55, quantity: 3},
		{name: 'frying pan', price: 92, quantity: 1}
	]
};

const customerBill = (customer) => customersGroup[customer].reduce((runningTotal, item) => 
runningTotal + item.price * item.quantity, 0);


const prettyPrint = (customerItem) => `Here is the total amount owed: $${customerItem}.00`;

prettyPrint(customerBill('Mark Johnson'));



//Using both .filter() and .reduce() methods:
const customersList =
{
	'Eric Smith': [
		{name: 'silk sweater', price: 200, quantity: 2},
		{name: 'ties', price: 45, quantity: 3},
		{name: 'sneakers', price: 35, quantity: 2},
		{paymentDue: 'October 31, 2015'}
	],
	'Liz Johnson': [
		{name: 'blow dryer', price: 180, quantity: 1},
		{name: 'silk blouse', price: 120, quantity: 3},
		{name: 'purse', price: 300, quantity: 1},
		{paymentDue: 'November 3, 2011'}
	],
	'Andrew Kane': [
		{name: 'dress shirt', price: 65, quantity: 4},
		{name: 'ties', price: 45, quantity: 2},
		{name: 'sneakers', price: 40, quantity: 3},
		{paymentDue: 'January 30, 2011'}
	],
	'Sally Howard': [
		{name: 'silk blouse', price: 80, quantity: 3},
		{name: 'dress', price: 135, quantity: 1},
		{name: 'purse', price: 300, quantity: 2},
		{paymentDue: 'March 31, 2015'}
	],
};