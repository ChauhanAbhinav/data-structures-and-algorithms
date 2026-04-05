# Trees - Data Structure in DSA

## Introduction
A **tree** is a hierarchical data structure consisting of nodes connected by edges.  
- The top node is called the **root**.  
- Nodes without children are called **leaves**.  
- Each node can have **zero or more child nodes**.  
- Trees are widely used to represent hierarchical relationships and for efficient searching.

## Types of Trees
1. **Binary Tree:** Each node has at most 2 children (left and right).  
2. **Binary Search Tree (BST):** A binary tree where left child < parent < right child.  
3. **Balanced Trees:** AVL Tree, Red-Black Tree (height balanced for efficient search).  
4. **N-ary Tree:** Each node can have N children.  
5. **Trie:** Prefix tree used for strings.  

## Key Operations
- **Insertion** – Add a new node.
- **Deletion** – Remove a node.
- **Search** – Find a value in the tree.
- **Traversal** – Visit all nodes in a specific order.

## Tree Traversals
1. **Depth First Search (DFS)**
   - **Inorder (Left, Root, Right)** – For BST, gives sorted order.  
   - **Preorder (Root, Left, Right)** – Useful for copying trees.  
   - **Postorder (Left, Right, Root)** – Useful for deleting trees.  

2. **Breadth First Search (BFS) / Level Order**
   - Visit nodes level by level using a queue.

## Example (JavaScript - Binary Tree Traversal)
```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Inorder Traversal
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}
inorder(root);
// Output: 4 2 5 1 3