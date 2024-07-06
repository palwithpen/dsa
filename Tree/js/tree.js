class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}


class Tree {
    constructor(value) {
        this.root = new TreeNode(value);
    }

    searchDFS(value) {
        return this._searchDFS(this.root, value);
    }

    _searchDFS(node, value) {
        if (node.value === value) {
            return node;
        }
        for (let child of node.children) {
            let result = this._searchDFS(child, value);
            if (result) {
                return result;
            }
        }
        return null;
    }

    // Breadth-First Search (BFS)
    searchBFS(value) {
        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node.value === value) {
                return node;
            }
            queue.push(...node.children);
        }
        return null;
    }

    // Add a new node to the tree
    add(value, parentValue) {
        let parentNode = this.searchDFS(parentValue);
        if (parentNode) {
            parentNode.addChild(new TreeNode(value));
        } else {
            console.log('Parent node not found');
        }
    }
}
 