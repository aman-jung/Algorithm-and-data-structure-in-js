function unique(arr) {
  var first = 0;
  for (var second = 1; second < arr.length; second++) {
    if (arr[first] !== arr[second]) {
      first++;
      arr[first] = arr[second];
    }
    console.log(first, second);
  }
  return first + 1;
}
unique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
