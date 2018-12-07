var Human = function (name, age, long)	
	{
		this.name = name; //свойство экземпляры
		this.age = age;
		this.areHuman = true;
		
		this.Family = function(nameFamily, ageFamily) //свойство функция-конструктор 
			{
				this.nameFamily = name;
				this.ageFamily = age;
				this.areHuman = true;
			}
			//метод экземпляра и функции-конструктора

		this.long = name.length;
		this.upper = name.toUpperCase();
		this.sayHi = function() 
			{
				return 'Hi';
			}

	}


let ivan = new Human('Ivan', '34');
let mother = new Human('Kristina', '66');
	console.log('Свойства экземпляра, свойства функции конструктора');
	console.log();
	console.log('My name is ' + ivan.name + '.');
	console.log('I am ' + ivan.age + '.');
	console.log('My mother is ' + mother.name + '.');
	console.log('She is ' + mother.age + '.');
	console.log('And we are Human = ' + ivan.areHuman + '.');
	console.log();
	console.log('Метод экземпляра и функции-конструктора');
	console.log();
	console.log(ivan.name + ' says ' + ivan.sayHi());
	console.log(mother.name + ' says ' + mother.sayHi());
	console.log(ivan.name + ' consist of ' + ivan.long + ' letters');
	console.log(mother.name + ' is ' + mother.upper);
	