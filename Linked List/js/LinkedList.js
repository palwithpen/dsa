class NodeC {
    /**
     * It has 2 reference
     * - value 
     * - next
     */
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(val){
        /*
            - last pointer will change from null to pointer of new value
            - New value will be added at the end of the list  
         */
        const newNode = new NodeC(val)

        if (this.head == null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail= newNode
        }
        this.size++
    }


    remove(value) {
        if (!this.head) {  // If the list is empty
            return null;
        }

        if (this.head.value === value) {  // If the node to be removed is the head
            this.head = this.head.next;
            if (this.head === null) {  // If the list becomes empty
                this.tail = null;
            }
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            if (current.next === null) {  // If the removed node was the tail
                this.tail = current;
            }
            this.size--;
        }
    }

    prepend(val){
        // New node will become the head and its pointer will the the ref to old head
        const newNode = new NodeC(val)
        if (this.head == null){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    printList() {
        // Set current at head & then change the location of current to current.next
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
    
        this.tail = this.head;
    
        while (current !== null) {
            next = current.next;  // Store the next node
            current.next = prev;  // Reverse the current node's pointer
    
            // Move to the next nodes in the list
            prev = current;
            current = next;
        }
    
        this.head = prev;  // Update the head to the new first node
    }

    // insert at an index

    insertAt(value, index){
        if (index < 0 || index > this.size ){
            throw new Error('Index out of range');
        }

        const newNode = new NodeC(value)

        if (index == 0 ){
            newNode.next = this.head
            this.head = newNode
            if (this.size==0){
                this.tail = newNode
            }
            this.size++
            return
        }

        let current = this.head
        for (let i =0; i < index -1 ; i++){
            current = current.next
        }

        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }

        this.size++;
    }
}




const ll = new LinkedList()

ll.append(1)
ll.append(4)
ll.append(2)
ll.prepend(3)
// ll.printList()
// ll.remove(2)
ll.printList()
ll.reverse()
ll.printList()
