// --------------------------
// 5. Heap / Priority Queue - Kth Largest Element
// --------------------------
class MinHeap {
  constructor() { this.heap = []; }
  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i-1)/2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }
  extract() {
    if (!this.heap.length) return null;
    let min = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      let i = 0;
      while(true){
        let left = 2*i+1, right = 2*i+2, smallest=i;
        if (left<this.heap.length && this.heap[left]<this.heap[smallest]) smallest=left;
        if (right<this.heap.length && this.heap[right]<this.heap[smallest]) smallest=right;
        if (smallest===i) break;
        [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]];
        i=smallest;
      }
    }
    return min;
  }
}

function kthLargest(nums,k){
  let heap = new MinHeap();
  for(let n of nums){
    heap.insert(n);
    if(heap.heap.length>k) heap.extract();
  }
  return heap.heap[0];
}
console.log("Kth Largest:", kthLargest([3,2,1,5,6,4],2));
// Output: 5
