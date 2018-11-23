console.log("Task 2");
var n = 5, m = 5;
var mas = [];
let min=-50,max=50;
console.log("Primitive array: " );
for (var i = 0; i < m; i++){
    mas[i] = [];
    for (var j = 0; j < n; j++){

        mas[i][j] = min + Math.floor(Math.random() * (max + 1 - min));
}}

console.log(mas);

console.log("Edited array: ");
for(let i=0;i<5;i++){
		if(mas[i][i]<0){
			mas[i][i]=0;
		}else{
			mas[i][i]=1;
		}
	}
	console.log(mas);

