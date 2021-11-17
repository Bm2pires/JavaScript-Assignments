var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

function merge_array(arr1, arr2) {
  let merged_array;

  merged_array = array1.concat(array2);
  // returns [ 1, 2, 3, 2, 30, 1]

  // loop in reverse order
  for (let i = merged_array.length; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (merged_array[i] === merged_array[j]) {
        merged_array.splice(j, 1);
      }
    }
  }

  // final output [ 3, 2, 30, 1]

  return merged_array;
}

console.log(merge_array(array1, array2));
