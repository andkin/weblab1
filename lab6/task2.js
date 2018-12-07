function compareAge(humanFirst, humanSecond) {
  return humanFirst.age - humanSecond.age;
}

/*	[{
		name: "Andrey",
		age: "21"

		},{

		name: "Ivan",
		age: "20"

		},{
		
		name: "Vlad",
		age: "33"
		
		},{
		
		name: "Kris",
		age: "15"
		
		},{
		
		name: "Sasha",
		age: "25"
		
	}]*/
	/*function User(x,y){
		this.firstName = x,
		this.age = y
	}

	var Human = function(name, age){
		this.name = name;
		this.age = age;
		this.users = [];

		this.add = function(user){
			this.users.push([[user]]);
		}
		this.getAllUsers = function(){
			var arr = this.users;
			for(var i in arr){
				console.log(i+ ': ' + arr[i]);
			}
		}
	}
	var andrey = new Human('Andrey', '21');
	var oxana = new Human('Oxana', '25');
console.log('Неотсортированный массив');
for (var i = 0; i < Human.length; i++) 
	{
		console.log(Human.name + ': ' + Human.age);
	}*/

/*Human.sort(compareAge);
console.log();
console.log('Отсортированный массив');
for (var i = 0; i < Human.length; i++) 
	{
		console.log(Human.name + ': ' + Human.age);
	}*/

	let array = [];
function handler(name,age){
	let human = new Human(name,age);
	addToArray(human);
}

var andrey = handler('Andrey', '21');
var oxana = handler('Oxana', '25');
var vlad = handler('Vlad', '34');
var oleg = handler('Oleg', '11');
var ihor = handler('Ihor', '65');


function Human(newHumanName, newHumanAge){
	
		this.name = newHumanName;
		this.age = newHumanAge;
}

function addToArray(human){
	array[array.length]=human;
	sort(array);

}

var andrey = new Human('Andrey', '21');
function sort(array){
for(let j=0;j<array.length-1;j++)
	for(let i=0;i<array.length-1-j;i++){
		if(array[i].age>array[i+1].age){
			
			let tempAge = array[i].age;
			let tempName = array[i].name;
			
			array[i].age = array[i+1].age;
			array[i].name = array[i+1].name;
			array[i+1].age=tempAge;
			array[i+1].name=tempName;
		}
	}
}
console.log('Oтсортированный массив');
for(let i=0;i<array.length;i++){
console.log(array[i].name + ' ' + array[i].age);
}