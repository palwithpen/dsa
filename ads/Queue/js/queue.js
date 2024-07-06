class Queue {
    
    constructor(){
        this.items={};
        this.frontIndex=0;
        this.backIndex=0;
    }

    // Add item to the queue
    enqueue(e){
        this.items[this.backIndex] = e
        this.backIndex++
    }

    //remove the front item from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    front(){
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[this.frontIndex];
    }

    isEmpty(){
        return this.frontIndex === this.backIndex
    }

    size(){
        return this.backIndex-this.frontIndex
    }

    printQueue(){
        let result = "";
        for(let i = this.frontIndex; i<this.backIndex;i++){
            result +=this.items[i]+' '
        }
        return result.trim()
    }
}