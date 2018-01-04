// https://www.hackerrank.com/challenges/30-binary-trees/problem

// Start of function levelOrder
this.levelOrder = function(root) {
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    let queue = [];
    let toPrint = [];
    queue.push(root);
        
    while(queue.length > 0) {
        let node = queue.shift();
        toPrint.push(node.data);
            
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
    }
    console.log(toPrint.join(' '));
}