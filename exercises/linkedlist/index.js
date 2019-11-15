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
}

module.exports = { Node, LinkedList };
