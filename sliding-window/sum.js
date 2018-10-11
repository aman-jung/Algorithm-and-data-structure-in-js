//[1,2,3,4,5] find 2 number which sum is greater
// [1,2,2,,2,2,3,4,4,5,6,7] find 3 number which sum is greater
//Using sliding window Time complexity 0(n)

function sum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (var i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (var j = num; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
sum([1, 2, 3, 1, 5, 2, 3, 6, 7, 1, 2], 3);
