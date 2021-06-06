function PriorityQueue() {
  //内部类
  function QueueElement(element,priority) {
    this.element = element
    this.priority = priority
  }
  this.arr = []
  //实现插入方法
  PriorityQueue.prototype.enqueue = function (element,priority) {
    //创建QueueElement对象
    var queueElement = new QueueElement(element,priority)
    if (this.arr.length === 0) {
      this.arr.push(queueElement)
    }else {
      var added = false
      for (let i = 0;i < this.arr.length;i++) {
        if (queueElement.priority < this.arr[i].priority) {
          this.arr.splice(i,0,queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.arr.push(queueElement)
      }
    }
  }

  //移除队列第一个元素 dequeue
  PriorityQueue.prototype.dequeue = function () {
    return this.arr.shift()
  }

  //返回队列中第一个元素 front
  PriorityQueue.prototype.front = function () {
    return this.arr[0]
  }

  //判断队列是否为空 isEmpty
  PriorityQueue.prototype.isEmpty = function () {
    return this.arr.length === 0
  }

  //返回队列的大小 size
  PriorityQueue.prototype.size = function () {
    return this.arr.length
  }

  //将队列中的内容转成字符串 toString
  PriorityQueue.prototype.toString = function () {
    for (let item of this.arr) {
      let str = ''
      str+=item.element + ':' + item.priority
      console.log(str);
    }
  }
}
var pq = new PriorityQueue()

pq.enqueue(1,1)
pq.enqueue(3,3)
pq.enqueue(2,2)
pq.enqueue(4,4)
console.log(pq.arr);
console.log(pq.size());
console.log(pq.front());
console.log(pq.isEmpty());
console.log(pq.dequeue());
console.log(pq.arr);
pq.toString()
