function Queue() {
  this.arr = []

  //向队列添加元素 enqueue
  Queue.prototype.enqueue = function (element) {
    this.arr.push(element)
  }

  //移除队列第一个元素 dequeue
  Queue.prototype.dequeue = function () {
    return this.arr.shift()
  }

  //返回队列中第一个元素 front
  Queue.prototype.front = function () {
    return this.arr[0]
  }

  //判断队列是否为空 isEmpty
  Queue.prototype.isEmpty = function () {
    return this.arr.length === 0
  }

  //返回队列的大小 size
  Queue.prototype.size = function () {
    return this.arr.length
  }

  //将队列中的内容转成字符串 toString
  Queue.prototype.toString = function () {
    let str = ''
    for (let item of this.arr) {
      str+=item
    }
    return str
  }

}
// var queue = new Queue()

// queue.enqueue('h')
// queue.enqueue('e')
// queue.enqueue('l')
// queue.enqueue('l')
// queue.enqueue('o')
//
// console.log(queue.arr);
// console.log(queue.front());
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.toString());
// console.log(queue.dequeue());
// console.log(queue.arr);


//击鼓传花
function game(number,list) {
  let students = new Queue()
  //添加元素
  for (let item of list) {
    students.enqueue(item)
  }
  //数组大小为1时结束循环
  while (students.size() !== 1) {
    for (let i = 1;i < number;i++) {
      //删除第一个元素并添加到队尾
      students.enqueue(students.dequeue())
    }
    //满足数字要求删除
    students.dequeue()
  }
  console.log(students.front());
}
game(2,['孙悟空','猪八戒','沙和尚','唐僧'])

