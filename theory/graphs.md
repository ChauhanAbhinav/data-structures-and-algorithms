# Graphs - Data Structure in DSA

## Introduction
A graph is a collection of **nodes (vertices) connected by edges**.  
Graphs are used to represent **networks, social connections, and dependencies**.

## Types
- Directed / Undirected
- Weighted / Unweighted
- Cyclic / Acyclic

## Traversal Algorithms
- BFS → O(V + E)
- DFS → O(V + E)

## Use-Cases
- Maps and navigation
- Social networks
- Network routing

## Example (Adjacency List)
```js
let graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};