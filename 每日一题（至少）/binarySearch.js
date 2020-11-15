function find(array, left, right, target){
    let index = Math.floor( array.length / 2 );
    let flag = array[index];

    if(flag === target){
        return index;
    }else if(flag > target){
        return find(array, left, flag - 1);
    }else{
        return find(array, flag + 1, right);
    }
}

let arr = [1,3,12, 14, 15, 23, 24, 26, 30];
console.log(find(arr, 0, arr.length - 1, 15));
