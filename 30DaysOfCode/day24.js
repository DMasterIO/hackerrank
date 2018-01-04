// https://www.hackerrank.com/challenges/30-linked-list-deletion/problem

this.removeDuplicates = function(head) {
    //Write your code here
    if (head == null || head.next == null)
        return head;
  
    if (head.data == head.next.data) {
        head.next = head.next.next;
        this.removeDuplicates(head);
    } else
        this.removeDuplicates(head.next);
    
    return head;
}