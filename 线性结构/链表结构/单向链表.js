function LinkedList() {
  //内部类 节点类
  function Node(data) {
    this.data = data
    this.next = null
  }

  //属性
  this.head = null
  this.length = 0

  //方法
  //1.追加元素
  LinkedList.prototype.append = function (data) {
    //创建新的节点
    var new_node = new Node(data)
    if (this.length === 0) { //判断链表是否为空，为空直接添加
      this.head = new_node
      this.length +=1
    }else {
      var current_node = this.head //保存当前头指针指向的节点
      while (current_node.next) {//找到指针为空的节点
        current_node  = current_node.next
      }
      current_node.next = new_node //让空指针指向新的节点
      this.length +=1
    }
  }

  //2.toString
  LinkedList.prototype.toString = function () {
    let str = ''
    var current_node = this.head
      while (current_node) { //循环遍历节点
        str += current_node.data + ' '
        current_node = current_node.next
      }
      return str
  }

  //3.insert
  LinkedList.prototype.insert = function (position,data) {
    //对 position 进行越界判断
    if (position < 0 || position > this.length) return false
    //创建节点
    var new_node = new Node(data)
    var index = 0
    var current_node = this.head
    //情况一：position为0
    if (position === 0) {
      new_node.next = this.head
      this.head = new_node
      this.length++
    }else { //情况二：position大于0
      //找到要插入的位置
      while (index < position) {
        var pre_node = current_node
        current_node = current_node.next
        index++
      }
      new_node.next = pre_node.next
      pre_node.next = new_node
      this.length++
    }
  }

  //4.RemoveAt 移除元素
  LinkedList.prototype.RemoveAt = function (position) {
    //判断是否有节点
    if (this.length > 0) {
      //position 进行越界判断
      if (position < 0 || position >= this.length) return false
      let current_node = this.head
      let pre = null
      let index = 0
      if (position === 0) { //删除第一个位置的节点
        this.head = current_node.next
      }else { //删除其余位置的节点
        while (index < position) {
          pre = current_node
          current_node = current_node.next
          index++
        }
        pre.next = current_node.next
      }
      this.length--
      return current_node.data
    }else {
      return false
    }
  }

  //5.indexOf 根据元素获取位置
  LinkedList.prototype.indexOf = function (data) {
    let current_node = this.head
    let index = 0
    if (current_node) {
      while (current_node.data !== data) {
        current_node = current_node.next
        index++
      }
      return index
    }else {
      return false
    }
  }

  //6.remove 根据元素删除信息
  LinkedList.prototype.remove = function (data) {
    let index = this.indexOf(data)
    this.RemoveAt(index)
  }

  //7.isEmpty
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  //8.size
  LinkedList.prototype.size = function () {
    return this.length
  }

  //9.getFirst
  LinkedList.prototype.getFirst = function () {
    return this.head.data
  }

  //10.update
  LinkedList.prototype.update = function (position,data) {
    //对 position 进行越界判断
    if (position < 0 || position >= this.length) return false
    let current_node = this.head
    let index = 0
    while (index < position) {
      current_node = current_node.next
      index++
    }
    current_node.data = data
  }

  //11.get 获取对应位置的元素
  LinkedList.prototype.get = function (position) {
    //对 position 进行越界判断
    if (position < 0 || position >= this.length) return false
    let current_node = this.head
    let index = 0
    if (position === 0) {
      return current_node.data
    }else {
      while (index < position) {
        current_node = current_node.next
        index++
      }
      return current_node.data
    }
  }
}

var linkedlist = new LinkedList()
//append
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)

//toString
console.log('------toString----------');
console.log(linkedlist.toString());

//insert
console.log('--------insert--------');
linkedlist.insert(0, 0)
console.log(linkedlist.toString());

linkedlist.insert(0, -1)
console.log(linkedlist.toString());

linkedlist.insert(3, '哈')
console.log(linkedlist.toString());

//RemoveAt
console.log('--------RemoveAt--------');
console.log(linkedlist.RemoveAt(3));
console.log(linkedlist.toString());
console.log(linkedlist.length);

//indexOf
console.log('--------indexOf--------');
console.log(linkedlist.indexOf(3));

//remove
console.log('--------remove--------');
linkedlist.remove(5)
console.log(linkedlist.toString());

console.log('--------isEmpty--------');
console.log(linkedlist.isEmpty());

console.log('--------size--------');
console.log(linkedlist.size());

console.log('--------getFirst--------');
console.log(linkedlist.getFirst());

console.log('--------update--------');
linkedlist.update(3,22)
console.log(linkedlist.toString());

console.log('--------get--------');
console.log(linkedlist.get(3));





