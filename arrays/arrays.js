class customArray
{
    constructor()
    {
        this.a = {};
        this.index = 0;
    }

    insert(element)
    {
        this.a[this.index] = element;
        this.index++;
    }

    getLength()
    {
        return this.index;
    }

    printdata()
    {
        for (let i = 0; i < this.index; i++)
        {
            console.log(this.a[i])
        }
    }

    getElementById(index)
    {
        return this.a[index];
    }

}

let arrayOne = new customArray();

arrayOne.insert('usman');
arrayOne.insert('ahmed');
arrayOne.insert('khan');
console.log(arrayOne.getElementById(2))
