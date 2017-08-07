function cubeOdd(arr) {

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {

    if (!Number.isInteger(arr[i])) {
      return undefined;
    } else {
      let temp = arr[i] * arr[i] * arr[i];

      if ((temp % 2) === 1) {
        sum += temp;
        console.log(sum);
      }
    }
  }

  return sum;
}
