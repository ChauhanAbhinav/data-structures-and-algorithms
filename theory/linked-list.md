# Linked List - Data Structure in DSA

## Introduction
A linked list is a **linear collection of nodes**, where each node contains data and a pointer to the next node.  
Unlike arrays, linked lists allow **dynamic memory allocation**, making insertion and deletion efficient.

## Types
- Singly Linked List
- Doubly Linked List
- Circular Linked List

## Operations
| Operation   | Complexity |
|------------|------------|
| Access     | O(n)       |
| Search     | O(n)       |
| Insert     | O(1)       |
| Delete     | O(1)       |

## Use-Cases
- Dynamic memory usage
- Implementing stacks and queues
- Undo/Redo functionality

## Example (JavaScript)
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}