// Trees - Binary Tree Traversals
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Problem: Inorder Traversal
function inorderTraversal(root) {
  if (!root) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

// Example:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Inorder Traversal:", inorderTraversal(root));
// Output: [4,2,5,1,3]
