function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return left.concat(flag, right);
}

console.log("快速排序", quickSort([5, 3, 2, 7, 88, 77, 22, 0, 5]));
