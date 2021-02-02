

function search (array, target){
    if(array.length < 1 || array[0].length < 1){
        return false;
    }

    let row = 0;
    let col = array[0].length;

    while(row <= array.length - 1 && col >= 0 ){
        if(array[row][col] === target){
            return true;
        }else if(array[row][col] < target){
            row++;
        }
        else{
            col--;
        }

    }
    return false;




}

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log (search(arr, 10));

function search(array, target){
    let m = array.length;
    let n = array[0].length;

    for(let i = 0; i < array.length; i++){
        let temp = array[i];
        let temp_length = temp.length;

        if(temp[temp_length - 1] > target){

            if(find(temp, 0, temp_length - 1, target)){
                return true;
            }

        }
    }

    return false;

}

function find(array, low, high, target){
    if(low > high){
        return false;
    }

    let mid = Math.floor((low + high) / 2);

    if(array[mid] === target){
        return true;
    }else if(array[mid] < target){
        return find(array, mid + 1, high, target);
    }else{
        return find(array, low, mid - 1, target);
    }

}

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log (search(arr, 4));