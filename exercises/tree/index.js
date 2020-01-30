// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    //this.children.pop(new Node())
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    // create an empty array and take the root node from the Tree
    // put it into the array at the start
    // while the array has some elements in it
    // iterate through the array
    // take out the first element
    // retrieve all the nodes children and stick all those children into the array
    // call the function that is provided to the traverse method
    // if there are still elements inside of the array, go through another iteration and pull out the first element
    // take any of its children and stick it into the end of the array
    const arrNode = [this.root]
    while(arrNode.length) {
      const node = arrNode.shift()

      arrNode.push(...node.children)
      fn(node)
    }

  }

  traverseDF(fn) {
    const arrNode = [this.root]
    while(arrNode.length) {
      const node = arrNode.shift()

      arrNode.unshift(...node.children)
      fn(node)
    }
  }
}

module.exports = { Tree, Node };
