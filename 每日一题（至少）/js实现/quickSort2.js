function quickSort(array){

    if(array.length <= 1){
        return array;
    }

    let  a1 = [];
    let  a2 = [];
    let pivot =array.splice(Math.floor(array.length / 2), 1)[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < pivot){
            a1.push(array[i]);
        }else{
            a2.push(array[i]);
        }

    }

    return quickSort(a1).concat(pivot, quickSort(a2));

}

let arr = [1, 3, 2, 56, 9];
console.log(quickSort(arr));
