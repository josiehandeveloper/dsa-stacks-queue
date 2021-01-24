class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }
  //return and remove top element in stack
  //return undefined if stack is empty
  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 2];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
  //Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }
  //Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
}

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

starTrek.peek();

starTrek.isEmpty();

starTrek.pop();
