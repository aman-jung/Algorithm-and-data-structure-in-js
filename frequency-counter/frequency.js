function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  var first = {};
  var second = {};
  for (var i = 0; i < arr1.length; i++) {
    let item1 = arr1[i];
    first[item1] ? (first[item1] += 1) : (first[item1] = 1);
  }
  for (var j = 0; j < arr2.length; j++) {
    let item2 = arr2[j];
    second[item2] ? (second[item2] += 1) : (second[item2] = 1);
  }
  for (let key in first) {
    if (second[key ** 2] !== first[key]) {
      return false;
    } else {
      return true;
    }
  }
}

same([1, 2, 3, 4], [1, 4, 9]);
