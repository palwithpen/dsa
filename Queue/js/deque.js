class Deque {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    addBack(e) {
        this.items[this.backIndex] = e;
        this.backIndex++;
    }

    addFront(e) {
        if (this.isEmpty()) {
            this.addBack(e);
        } else if (this.frontIndex > 0) {
            this.frontIndex--;
            this.items[this.frontIndex] = e;
        } else {
            for (let i = this.backIndex; i > this.frontIndex; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.items[this.frontIndex] = e;
            this.backIndex++;
        }
    }

    size() {
        return this.backIndex - this.frontIndex;
    }

    isEmpty() {
        return this.frontIndex === this.backIndex;
    }

    removeBack() {
        if (this.isEmpty()) {
            return "underflow";
        }
        this.backIndex--;
        const item = this.items[this.backIndex];
        delete this.items[this.backIndex];
        return item;
    }

    removeFront() {
        if (this.isEmpty()) {
            return "underflow";
        }
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }
}

let deque = new Deque();
deque.addBack(1);
deque.addBack(2);
deque.addFront(0);
console.log(deque.removeFront()); // Output: 0
console.log(deque.removeBack());  // Output: 2
console.log(deque.removeBack());  // Output: 1
console.log(deque.removeBack());  // Output: underflow
