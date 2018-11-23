let N=5;
	let massiv = 10;
	let min=-50,max=50;
	let arr = [];
	let maxVal = 0;
	let minVal = 0;
	let sum = 0;
	let srArifm = 0;
	let nechet = [];let j=0;
	console.log("Task 1");
	for(let i=0;i<N;i++){
		arr[i]=min + Math.floor(Math.random() * (max + 1 - min));
		console.log("Element " + i + " : " + arr[i]);
		if(i!=N-1){
		}else{
	 massiv+=arr[i];
		}
	}
	maxVal = arr[0];
	minVal = arr[0];
	for(let i=0;i<N;i++){
		if(arr[i]>maxVal){
			maxVal = arr[i];
		}
		if(arr[i]<minVal){
			minVal=arr[i];
		}
		sum+=arr[i];
		if(arr[i]%2!=0){
			nechet[j]=arr[i];
			j++;
		}
	}
	console.log(" ");
	console.log("Max Value: " + maxVal);
	console.log("Min Value: " + minVal);
	console.log("Sum: " + sum);
	srArifm = sum/arr.length;
	console.log("Arithmetic mean: " + srArifm);
	console.log(" ");
	console.log("Odd values: ");
	for(let i=0;i<j;i++){
		if(i<j-1){
	 massiv+=nechet[i]+" | ";
		}else{
	 massiv+=nechet[i];			
		}

	}
	console.log(nechet + " | ");