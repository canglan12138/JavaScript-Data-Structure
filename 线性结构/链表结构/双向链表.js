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
