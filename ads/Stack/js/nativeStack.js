class Stack{
    constructor(){
        this.count = 0
        this.storage = {}
    }

    push (element){
        this.storage[this.count] = element
        this.count++
    }

    pop (){
        if (this.count ===0)
            return undefined
        this.count--

        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    peek (){
        if(this.count ===0)
            return undefined
        return this.storage[this.count-1]
    }

    isEmpty(){
        return this.count ===0
    }

    size() {
        return this.count;
    }

    printStacke(){
        let result = " "
        for (let i = 0; i < this.count ; i++){
            result += this.size[i]+" "
        }
        return result
    }

}