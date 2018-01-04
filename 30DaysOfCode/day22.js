// https://www.hackerrank.com/challenges/30-binary-search-trees/problem

this.getHeight = function(root) {
    // Add your code here
    if (root == null) return -1;
    const leftHeight = this.getHeight(root.left);
    const rightHeight = this.getHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}