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
        str += current_node.data
        current_node = current_node.next
      }
      return str
  }

  //3.insert
  LinkedList.prototype.insert = function (position,data) {
    //对 position 进行越界判断
    if (position < 0 || position > this.length) return console.log(false)
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
}

var linkedlist = new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)
console.log(linkedlist.head);

console.log(linkedlist.toString());

linkedlist.insert(0,0)
console.log(linkedlist.toString());

linkedlist.insert(0,-1)
console.log(linkedlist.toString());

linkedlist.insert(3,'哈')
console.log(linkedlist.toString());





