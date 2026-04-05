# Hashing - Data Structure in DSA

## Introduction
Hashing is a technique to store data in **key-value pairs** using a hash function.  
It allows **fast insertion, deletion, and search** operations, making it an essential concept in DSA.

## Operations
| Operation | Complexity |
|-----------|------------|
| Insert    | O(1) avg   |
| Search    | O(1) avg   |
| Delete    | O(1) avg   |

## Use-Cases
- Caches and LRU cache
- Dictionary implementations
- Detecting duplicates

## Example (JavaScript)
```js
let map = new Map();
map.set("name", "Abhinav");
console.log(map.get("name")); // Output: Abhinav