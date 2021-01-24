const Stack = require("./stackclass");

function display(stack) {
  let currNode = stack.top;

  if (currNode == null) {
    console.log("Stack is empty");
  }

  while (currNode !== null) {
    console.log(`${currNode.data}`);
    currNode = currNode.next;
  }
}

function peek(stack) {
  let currNode = stack.top;
  console.log("TOP:", currNode.data);
}

module.exports = { display, peek };
