// https://www.hackerrank.com/challenges/30-queues-stacks/problem
function Solution(){
    //Write your code here
      this.stack = [];
      this.queue = [];
  
      this.pushCharacter = (s) => {
          this.stack.push(s);
      }
      this.popCharacter = () => this.stack.pop();
      
      this.enqueueCharacter = (q) => {
          this.queue.push(q);
      }
      this.dequeueCharacter = () => this.queue.shift();
  }