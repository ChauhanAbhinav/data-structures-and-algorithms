# Queue - Data Structure in DSA

## Introduction
A queue is a **linear data structure** that follows the **FIFO** (First In First Out) principle.  
Elements are added at the rear and removed from the front.

## Types
- Circular Queue
- Priority Queue
- Deque (Double-Ended Queue)

## Operations
| Operation | Description | Complexity |
|-----------|-------------|------------|
| enqueue   | Add element | O(1)       |
| dequeue   | Remove element | O(1)    |
| front     | Peek front element | O(1) |

## Use-Cases
- Task scheduling
- BFS traversal in graphs
- Handling requests in servers

## Example (JavaScript)
```js
let queue = [];
queue.push(1); // enqueue
queue.push(2);
console.log(queue.shift()); // dequeue → 1