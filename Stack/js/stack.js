class Stack{
    constructor(){
        this.items = []
    }

    push(e){
        this.items.push(e)
    }

    isEmpty(){
        return this.items.length ===0
    }

    pop(){
        if(this.isEmpty){
            return "UNDERFLOW"
        } else{
            return this.items.pop()
        }
    }
    size(){
        return this.items.length
    }

    printStack(){
        return this.items.join(" ")
    }
}