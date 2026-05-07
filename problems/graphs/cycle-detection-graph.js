// Union-Find / Disjoint Set - Cycle Detection in Graph
class UnionFind {
  constructor(n){
    this.parent = Array.from({length:n},(_,i)=>i);
  }
  find(x){ return this.parent[x]===x ? x : (this.parent[x]=this.find(this.parent[x])); }
  union(x,y){
    let px=this.find(x), py=this.find(y);
    if(px===py) return false;
    this.parent[px]=py;
    return true;
  }
}

function hasCycle(edges,n){
  let uf=new UnionFind(n);
  for(let [u,v] of edges) if(!uf.union(u,v)) return true;
  return false;
}
console.log("Graph Has Cycle:", hasCycle([[0,1],[1,2],[2,0]],3));
// Output: true