/*
1	2	3	4	5	6	7	  8
1	1	2	3	5	8	13	21
* */
function fun(n) {
  // if (n <= 2) return 1
  // return fun(n-1) + fun(n-2)
  return n <= 2 ? 1 : fun(n-1) + fun(n-2)
}

console.log(fun(8));

console.log('===============================');

let arr = []
arr[0] = 1
arr[1] = 1

function my_fun(n) {
  for (let i = 2;i < n;i++) {
    arr[i] = arr[i-1] + arr[i-2]
  }

  for (let i in arr) {
    console.log(i + ':' + arr[i]);
  }
}
my_fun(8)

