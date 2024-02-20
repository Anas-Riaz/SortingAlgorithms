function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j <arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function mergeSort(arr){
	if (arr.length <= 1) {
        return arr; 
    }
	const mid = Math.floor(arr.length/2);
	const leftArray = arr.slice(0, mid);
	const rightArray = arr.slice(mid);
	return merge(mergeSort(leftArray) , mergeSort(rightArray))
}

function merge(leftArray, rightArray){
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift()); // Use shift() to remove the first element
        }
        else{
            sortedArray.push(rightArray.shift()); // Use shift() to remove the first element
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
}

function selectionSort(arr){
	var i, j, min, temp;
  
	for(i = 0 ; i < arr.length - 1 ; i ++){
		min = i;
		for(j = i + 1; j< arr.length; j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
  }

const quickSort = (arr) => {
	if (arr.length <= 1) {
	  return arr;
	}
  
	let pivot = arr[0];
	let leftArr = [];
	let rightArr = [];
  
	for (let i = 1; i < arr.length; i++) {
	  if (arr[i] < pivot) {
		leftArr.push(arr[i]);
	  } else {
		rightArr.push(arr[i]);
	  }
	}
  
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

export function Result(arr){
	if(!arr) {
		return "Invalid Input";
	}
	const newArr = arr.split(" ").map(str=> +str);

	return({
		bubbleSort : bubbleSort(newArr).join(" , "),
		mergeSort : mergeSort(newArr).join(" , "),
		selectionSort : selectionSort(newArr).join(" , "),
		quickSort : quickSort(newArr).join(" , "),
	})
}
