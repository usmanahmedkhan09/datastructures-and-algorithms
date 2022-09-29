class customArray
{
    constructor()
    {
        this.arr = {};
        this.index = 0;
    }

    push(element)
    {
        // Time Complexity of this opertaion takes O(1)

        this.arr[this.index] = element;
        this.index++;
    }

    pop()
    {
        // Time Complexity of this opertaion takes O(1)

        let element = this.arr[this.index - 1];
        this.index--;
        return element;
    }

    shift()
    {
        // Time Complexity of this opertaion takes O(N) beacuse in shift we remove element from the start and move the next element to the lower index so the arry size reduce 

        for (let i = 0; i < this.size(); i++)
        {
            this.arr[i] = this.arr[i + 1];
        }
        this.index--;
    }

    unshift(element)
    {
        // Time Complexity of this opertaion takes O(N)

        this.index++;
        for (let i = this.size(); i >= 0; i--)
        {
            this.arr[i] = this.arr[i - 1]
        }
        this.arr[0] = element
        return element;
    }

    insertElementAtPos(position, element)
    {
        this.index++
        for (let i = this.size(); i >= position; i--)
        {
            this.arr[i + 1] = this.arr[i]
        }

        this.arr[position] = element
    }

    size()
    {
        return this.index;
    }

    traverse()
    {
        // Time Complexity of this opertaion takes O(N)

        for (let i = 0; i < this.index; i++)
        {
            console.log(this.arr[i])
        }
    }

    getElementByIndex(index)
    {
        return this.arr[index];
    }

    deleteElementByIndex(payload)
    {
        // Time Complexity of this opertaion takes O(N)

        let index = payload;
        while (index < this.size())
        {
            this.arr[index] = this.arr[index + 1];
            index++;
        }
        this.index--;
    }

}

let b = new customArray();

// b.push('abb');
// b.push('acc');
// b.push('add');
// b.push('ann');
// b.push('akk')
// // b.shift();
// b.traverse();
// console.log(b.size());
// b.unshift('hoorain');
// b.deleteElementByIndex(4)
// console.log(b.size());
// b.insertElementAtPos(3, 'hoorain');
// b.traverse()
// console.log(b.size());
