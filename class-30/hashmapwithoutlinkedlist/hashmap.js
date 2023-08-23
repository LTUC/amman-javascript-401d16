class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    // key="Cat" split ['C','a','t']
    makeHash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }
    add(key, value) {
        const hash = this.makeHash(key);
        this.map[hash] = { [key]: value };
    }
}


const myHashmap = new Hashmap(10);
console.log(myHashmap.makeHash('ahmad'));
console.log(myHashmap.makeHash('mohamad'));

myHashmap.add("esam", "401d15 student");
myHashmap.add("ahmad", "401d15 student");
myHashmap.add("mohamad", "401d15 student");
myHashmap.add("samah", "401d15 student");
myHashmap.add("laith", "401d15 student");
myHashmap.add("shihab", "401d15 student");

// console.log(myHashmap);