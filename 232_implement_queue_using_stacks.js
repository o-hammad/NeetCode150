class MyQueue {
    constructor() {
        // Use two stacks for queue operations
        this.stack1 = [];
        this.stack2 = [];
    }

    // Efficient push operation
    push(x) {
        // Simply push the element onto stack1
        this.stack1.push(x);
    }

    // Efficient pop operation
    pop() {
        // If stack2 is empty, transfer elements from stack1
        // This ensures that the elements are in the correct order for popping
        if (this.stack2.length === 0) {
            this.transferStack1ToStack2();
        }

        // Pop the front element from stack2
        return this.stack2.pop();
    }

    // Peek operation returns the front element without removing it
    peek() {
        // If stack2 is empty, transfer elements from stack1
        // This ensures that the elements are in the correct order for peeking
        if (this.stack2.length === 0) {
            this.transferStack1ToStack2();
        }

        // Return the front element from stack2 without popping
        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    empty() {
        // The queue is empty if both stacks are empty
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Utility function to transfer elements from stack1 to stack2
    transferStack1ToStack2() {
        // Transfer all elements from stack1 to stack2
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */