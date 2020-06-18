class Node
{
    constructor(data)
    {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList
{
    constructor(data)
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printll()
    {
        let currentNode = this.head;
        const arr = [];
        while (currentNode != null)
        {
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        return arr;
    }

    append(data)
    {
        const newNode = new Node(data);
        if (this.head === null)
        {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }
    }

    prepend(data)
    {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index,data)
    {
        const newNode = new Node(data);
        if(index === 0)
        {
            this.prepend(newNode.data)
        }
        else if(index === this.length)
        {
            this.append(newNode.data)
        }
        else
        {
            let currentNode = this.head;
            let i = 0;
            while(i<this.length)
            {
                if (i === index-1)
                {
                    newNode.next = currentNode.next;
                    newNode.prev = currentNode;
                    currentNode.next = newNode;
                    currentNode.next.next.prev = newNode;
                    this.length++;
                    break
                }
                i++;
                currentNode = currentNode.next;
            }
            return this;
        }
    }

    remove(index)
    {
        let currentNode = this.head;
        let i = 0;
        while (i<this.length)
        {
            if (index === 0)
            {
                this.head = currentNode.next;
                this.head.prev = null;
                this.length--;
                break
            }
            else if(i == index-1)
            {
                if(currentNode.next === this.tail)
                {
                    this.tail = currentNode;
                    currentNode.next = null;
                    this.length--;
                    break
                }
                else
                {
                    currentNode.next.next.prev = currentNode;
                    currentNode.next = currentNode.next.next;
                    this.length--;
                    break
                }
            }
            currentNode = currentNode.next;
            i++;
        }
    }

    reverse()
    {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second != null)
        {
            let third = second.next;
            second.next = first;
            second.prev = third;
            first.prev = second;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.head = first;
    }
}

const m = new DoublyLinkedList();
m.append(100);
m.append(101);
m.append(102);
m.prepend(99);
m.insert(0,98);
m.insert(5,104);
m.insert(6,105);
m.insert(5,103);
m.remove(7)
m.remove(5)
m.remove(5)
console.log(m)
console.log(m.reverse())
console.log(m.printll())
