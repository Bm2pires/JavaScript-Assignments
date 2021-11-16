var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

function arrDetails(arr) {
  let sum = 0,
    product = arr[0];

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (i > 0) {
      product *= arr[i];
    }
  }
  console.log(`Sum of ${arr} is ${sum}`);
  console.log(`Product of ${arr} is ${product}\n`);
}

arrDetails(array1);
arrDetails(array2);