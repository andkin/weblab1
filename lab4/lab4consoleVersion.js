var x = 6,
 	y = 15, 
 	z = 4,
 	S,
 	V,
 	r = 2,
 	h = 3;
console.log(x += y - x++ * z);
console.log(z = --x - y * 5);
console.log(y /= x + 5 % z);
console.log(z = x++ + y * 5);
console.log(x = y - x++ * z);
console.log("Arithmetic mean: ", (x + y + z)/3);
console.log("V: ", V = Math.PI * Math.pow(2,2) * h);
console.log("S: ", S = 2 * Math.PI * r * (r + h));


