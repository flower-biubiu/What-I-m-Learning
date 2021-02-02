function partition(array, left, right){

    let pivot = array[left];
    let i = left;
    let j = right;

    while(i < j){
        while(i < j && array[j] > pivot){
            j--;
        }

        arr[i] = arr[j];

        while(i < j && array[i] < pivot){
            i++;
        }

        arr[j] = arr[i];
        
    }
    array[i] = pivot; 
    return i;
}
var count = 0;

function quick(array, left, right){
    if(left < right){
        let flag = partition(array, left, right);
        quick(array, left, flag - 1);
        quick(array, flag + 1, right);
        
    }

    return array;
      
}

function quickSort(array){
    quick(array, 0, array.length - 1);

}


let arr = [2, 6, 1,7,8];
quickSort(arr);
console.log(arr);