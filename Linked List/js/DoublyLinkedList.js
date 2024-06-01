class NodeC {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(value){
        const newNode = new Node(value)
        if (this.head == null){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size ++
    }
    
    prepend(value){
        const newNode = new NodeC(value)
        if (this.head == null){
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    
    remove(value){
        if (this.head == null) {
            return
        }

        let current = this.head
        while (current && current.value!=value){
            current = current.next;
        }
        if (!current) {
            return null;
        }

        if (current === this.head) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (current === this.tail) {
            this.tail = current.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.size--;
    }
    
    print(){
        let current = this.head
        const result = []

        while (current != null){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join("<->"))
    }

    reverse(){
        let current =  this.head
        let temp = null
        this.tail = this.head

        while (current != null){
            temp = current.prev
            current.prev= current.next
            current.next = temp
            current = current.prev
        }

        if (temp){
            this.head = temp.prev
        }
    }

    insertAt(value, index){

    }
}
