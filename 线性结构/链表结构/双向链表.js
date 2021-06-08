function DoubleLinkedList() {
  //内部类 节点类
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  //属性
  this.head = null
  this.tail = null
  this.length = 0

  //方法
  //1.append
  DoubleLinkedList.prototype.append = function (data) {
    let new_node = new Node(data)
    if (this.length === 0) {
      this.head = new_node
      this.tail = new_node
    }else {
      this.tail.next = new_node
      new_node.prev = this.tail
      this.tail = new_node //让尾指针指向新的节点
    }
    this.length++
  }

  //2.toString
  DoubleLinkedList.prototype.toString = function () {
    if (this.length === 0) return ''
    let current_node = this.head
    let str = ''
    while (current_node) {
      str += current_node.data
      current_node = current_node.next
    }
    return str
  }

  //2.1 forWardString
  DoubleLinkedList.prototype.forWardString = function () {
    return this.toString()
  }

  //2.2 backWardString
  DoubleLinkedList.prototype.backWardString = function () {
    if (this.length === 0) return ''
    let current_node = this.tail
    let str = ''
    while (current_node) {
      str += current_node.data
      current_node = current_node.prev
    }
    return str
  }

  //3.insert
  DoubleLinkedList.prototype.insert = function (position,data) {
    //越界判断
    if (position < 0 || position >this.length) return false
    let new_node = new Node(data)
    let current_node = this.head
    let index = 0
    //情况一 链表为空，直接添加
    if (this.length === 0) {
      this.head = new_node
      this.tail = new_node
    }else if (position === 0) { //情况二：在开头添加节点
      new_node.next = current_node
      current_node.prev = new_node //注意：之前的第一个节点需要指向现在新设置的第一个节点
      this.head = new_node
    }else if (position === this.length) { //情况三：在最后添加节点
      this.tail.next = new_node
      new_node.prev = this.tail
      this.tail = new_node
    }else { //情况四：在其余位置添加节点
      while (index < position) {
        current_node = current_node.next
        index++
      }
      new_node.next = current_node
      current_node.prev.next = new_node
      new_node.prev = current_node.prev
      current_node.prev = new_node
    }
    this.length++
  }
}

const doublelinkedlist = new DoubleLinkedList()
doublelinkedlist.append('h')
doublelinkedlist.append('e')
doublelinkedlist.append('l')
doublelinkedlist.append('l')
doublelinkedlist.append('o')

console.log('-----------toString-----------');
console.log(doublelinkedlist.toString());

console.log('-----------forWardString-----------');
console.log(doublelinkedlist.forWardString());

console.log('-----------backWardString-----------');
console.log(doublelinkedlist.backWardString());

console.log('-----------insert-----------');
doublelinkedlist.insert(0,'额')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(1,'我')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(2,'是')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(3,'人')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(5,'中')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(10,'中')
console.log(doublelinkedlist.toString());

doublelinkedlist.insert(7,'中')
console.log(doublelinkedlist.toString());
