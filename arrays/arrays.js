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

    getElementById(index)
    {
        return this.arr[index];
    }

}

let b = new customArray();

b.push('usman');
b.push('ahmed');
b.push('khan');
// b.shift();
// b.traverse();
// console.log(b.size());
b.unshift('hoorain');
b.traverse()
