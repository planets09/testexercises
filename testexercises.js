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




// Different type of exercise: Using higher order functions:

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


var animalsType = function(item){

	return animals.filter(function(el){
		if(item === el.species || item === el.name)
			return el;
		})
};

animalsType('Maud');