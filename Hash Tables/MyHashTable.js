class MyHashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) { // O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) { // O(1)
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;

    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;

    }

    keys() { // do to  without collisions
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i][0]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new MyHashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 200);
myHashTable.set('strawberry', 430);

console.log(myHashTable.get('grapes'));