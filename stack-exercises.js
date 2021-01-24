const Stack = require("./stackclass");
const { display, peak } = require("./helper");

function main() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  display(starTrek);
  peak(starTrek);
}

main();
