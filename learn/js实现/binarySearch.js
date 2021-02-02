function find(array, left, right, target){
    let index = Math.floor( (left + right)/2 );
    let flag = array[index];

    if(flag === target){
        return index;
    }else if(flag > target){
        return find(array, left, index - 1, target);
    }else{
        return find(array, index + 1, right, target);
    }
}
// function bsearch(array,low,high,target)
// {
//     if (low > high) return -1;
//     var mid = Math.floor((low + high)/2);
//     if (array[mid]> target){
//         return  bsearch(array, low, mid -1, target);
//     } else if (array[mid]< target){
//         return  bsearch(array, mid+1, high, target);
//     }else{return mid;}
        
// }

let arr = [1,3,12, 14, 15, 23, 24, 26, 30];
console.log(find(arr, 0, arr.length - 1, 3));
