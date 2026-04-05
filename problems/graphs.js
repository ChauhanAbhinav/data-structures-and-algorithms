// --------------------------
// 2. Graph - BFS
// --------------------------
function bfsGraph(graph, start) {
  let visited = new Set();
  let queue = [start];
  let result = [];

  while (queue.length) {
    let node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      for (let neighbor of graph[node]) queue.push(neighbor);
    }
  }
  return result;
}

// Example graph
let graph = {
  0: [1,2],
  1: [0,3,4],
  2: [0,4],
  3: [1,5],
  4: [1,2,5],
  5: [3,4]
};
console.log("BFS Graph:", bfsGraph(graph, 0));
// Output: BFS order starting from 0
