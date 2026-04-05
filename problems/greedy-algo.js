// --------------------------
// 4. Greedy - Activity Selection
// --------------------------
function maxActivities(start, end) {
  let activities = start.map((s,i) => [s,end[i]]);
  activities.sort((a,b) => a[1]-b[1]);

  let count = 1, lastEnd = activities[0][1];
  for (let i=1;i<activities.length;i++){
    if (activities[i][0]>=lastEnd){
      count++;
      lastEnd = activities[i][1];
    }
  }
  return count;
}

console.log("Max Activities:", maxActivities([1,3,0,5,8,5],[2,4,6,7,9,9]));
// Output: 4