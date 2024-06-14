const sum = (a: number, b: number) => a + b;

const divide = (a: number, b: number) => a / b;

const multiply = (a: number, b: number) => a * b;

const printSum = (a: number, b: number) => {
  console.log(`Sum of ${a} and ${b} is ${sum(a, b)}`);
};

export { sum, divide, multiply, printSum };
