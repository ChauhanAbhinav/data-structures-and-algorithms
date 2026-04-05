# Greedy Algorithms - DSA Concept

## Introduction
Greedy algorithms **make locally optimal choices** at each step with the hope of finding a global optimum.  
They are simple and efficient for certain optimization problems.

## How it works
- At each step, choose the best immediate option.
- Move to the next step.
- Do not reconsider previous choices.

## Key Patterns
- Interval scheduling
- Minimum Spanning Tree (MST) with Kruskal’s or Prim’s
- Coin change (for specific denominations)
- Huffman coding

## Example (JavaScript - Maximum activities in intervals)
```js
let activities = [[1,3],[2,5],[4,7]];
activities.sort((a,b) => a[1]-b[1]);
let count = 1, end = activities[0][1];
for(let i=1; i<activities.length; i++) {
  if(activities[i][0] >= end) {
    count++;
    end = activities[i][1];
  }
}
console.log(count); // Output: 2