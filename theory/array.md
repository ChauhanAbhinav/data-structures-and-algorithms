# Arrays - Data Structure in DSA

## Introduction
Arrays are one of the most basic and widely used data structures in programming.  
They store a collection of elements in **contiguous memory locations**, and all elements are of the same type. Arrays are foundational in DSA because they are used in implementing other data structures and algorithms.

## Characteristics
- Fixed size (in most languages)
- Elements stored in contiguous memory
- Supports indexing

## Operations
| Operation   | Complexity |
|------------|------------|
| Access     | O(1)       |
| Search     | O(n)       |
| Insert     | O(n)       |
| Delete     | O(n)       |

## Use-Cases
- Storing static lists of items
- Implementing matrices, heaps, hash tables
- Algorithms requiring random access

## Example (JavaScript)
```js
let arr = [10, 20, 30, 40];
console.log(arr[2]); // Output: 30

### Notes
Arrays are ideal for fast access but slow insertion/deletion at arbitrary positions.