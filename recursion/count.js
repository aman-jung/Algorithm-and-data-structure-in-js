//Simple recursion to count 5 numbers
function count(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  count(num);
}
count(6);
