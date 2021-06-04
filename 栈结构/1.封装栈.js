function Stack () {
  this.arr = []
  //1.压入元素
  Stack.prototype.push = function (element) {
    this.arr.push(element)
  }

  //2.弹出栈顶元素
  Stack.prototype.pop = function () {
    return this.arr.pop()
  }

  //3.查看栈顶元素
  Stack.prototype.peek = function () {
    return this.arr[this.arr.length - 1]
  }

  //4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.arr.length === 0
  }

  //5.栈中元素的个数
  Stack.prototype.size = function () {
    return this.arr.length
  }

  //6.toString方法
  Stack.prototype.my_toString = function () {
    let str = ''
    for (let item of this.arr) {
      str+=item + '-'
    }
    return str
  }
}

// var s = new Stack()
//
// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// console.log(s.arr);
// console.log(s.pop());
// console.log(s.peek());
// console.log(s.isEmpty());
// console.log(s.size());
// console.log(s.my_toString());

/*
10进制转2进制
* */
function ten_change_two(number) {
  var s =new Stack()
  var shang
  do {
    shang = Math.floor(number / 2)
    s.push(number % 2)
    number = shang
  }while (number > 0)
  var str = ''
  while (!s.isEmpty()) {
    str += s.pop()
  }
  console.log(str);
}

ten_change_two(100)

