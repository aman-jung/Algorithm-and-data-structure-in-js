function pairSum(arr) {
  var sortedArray = arr.sort();
  console.log(sortedArray);
  var left = 0;
  var right = sortedArray.length - 1;
  while (left < right) {
    var sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
pairSum([5, 4, 1, 2, 3, -5, -6, 7]);

//Time Complexity 0(n)
//Space Complexity 0(1)
//left is 0(1)
//right depends on array as the array values goes its size also grows 0(n)
