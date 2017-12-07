// https://www.hackerrank.com/challenges/30-linked-list/problem
function Solution(){
    this.insert=function(head,data){
        const currentHead = head; 
        const node = new Node(data);
 
        if (head === null) return node;

        while (head.next)
            head = head.next;

        head.next = node;
        return currentHead;
    };
}