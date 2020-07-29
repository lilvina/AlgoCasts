// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head

    while(node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    //if there is no head node, return nothing
    if(!this.head) {
      return null
    }
    //get reference to the current node
    //while node exists, update node
    //check to see if node.next does not exist, we must be at the end
    let node = this.head
    while(node) {
      if(!node.next) {
        return node
      }
      node = node.next
    }
  }

  clear(){
    return this.head = null
  }

  removeFirst() {
    if(!this.head) {
      return
    }

    this.head = this.head.next
  }
  removeLast() {
    if(!this.head) {
      return null
    }

    if(!this.head.next) {
      this.head = null
      return
    }

    let prev = this.head
    let node = this.head.next
    while(node.next) {
      prev = node
      node = node.next
    }
    prev.next = null
  }

  insertLast(data) {
    const last = this.getLast()
    if(last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }
  getAt(index) {
    if(!this.head) {
      return null
    }
    let counter = 0
    let node = this.head
    while(node) {
      if(counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  removeAt() {
    if(!this.head) {
      return null
    }

    this.head = this.head.next
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data)
      return
    }

    if(index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prev = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, prev.next)
    prev.next = node
  }
}

module.exports = { Node, LinkedList };
