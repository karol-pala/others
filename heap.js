function bigArray(maxNr, maxL){
    let array = [];
    for(let i = 0; i < maxL; i++){
        array.push(Math.floor(Math.random() * maxNr));
    }
    return array;
}


let array = bigArray(100, 10000)
console.log(array.join());

class Heap {
    constructor(array){
        this.maxHeap = this.buildHeap(array);
    }
    swap(array, a, b){
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        return array;
    }
    maxHeapify(array, root){
        let largest = root;
        let left = 2 * root + 1;
        let right = 2 * root + 2;
        if(largest < array.length  && array[left] > array[largest]){
            array = this.swap(array, largest, left);
            this.maxHeapify(array, left);
        }
        if(largest < array.length && array[right] > array[largest]){
            array = this.swap(array, largest, right);
            this.maxHeapify(array, right);
        }
        if(largest !== root){
            array = this.swap(arra, largest, root);
            this.maxHeapify(array, largest)
        }
    }
    buildHeap(array){
        for(let i = Math.floor(array.length / 2) - 1; i >= 0; i--){
            this.maxHeapify(array, i)
        }
        return array;
    }
    insert(el){
        this.maxHeap.push(el);
        this.maxHeap = this.buildHeap(this.maxHeap);
    }
    extractMax(){
        let max = this.maxHeap.shift();
        this.maxHeap = this.buildHeap(this.maxHeap);
        return max;
    }
    heapsort(){
        let sorted = [];
        for(let i = 0; i < this.maxHeap.length;){
            sorted.push(this.extractMax());
        }
        return sorted;
    }
}

let heap = new Heap(array);
console.log(heap.maxHeap.join());
// console.log(heap.maxHeap.join());
// console.log(heap.extractMax());
// console.log(heap.maxHeap.join());
// console.log(heap.heapsort());