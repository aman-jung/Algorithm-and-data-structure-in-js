function anagrams(str1, str2) {
  let first = {};
  let second = {};
  for (let i in str1) {
    var item1 = str1[i];
    first[item1] ? (first[item1] += 1) : (first[item1] = 1);
  }
  for (let j in str2) {
    var item2 = str2[j];
    second[item2] ? (second[item2] += 1) : (second[item2] = 1);
  }
  console.log(first);
  console.log(second);

  for (let k in first) {
    if (second[k] != first[k]) {
      return false;
    } else {
      return true;
    }
  }
}

anagrams("aman", "mana");
