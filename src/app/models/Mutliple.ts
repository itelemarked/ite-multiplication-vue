export class Multiple {
  n1: number;
  n2: number;
  result: number;
  successes: number;
  fails: number;

  constructor(a: number, b: number) {
    // make sure n1 is smaller or equal to n2
    if (a <= b) {
      this.n1 = a;
      this.n2 = b;
    } else {
      this.n1 = b;
      this.n2 = a;
    }

    this.result = a * b;
    this.successes = 0;
    this.fails = 0;
  }

  getId(): string {
    return `${this.n1}x${this.n2}`;
  }

  getTitle(): string {
    return `${this.n1} x ${this.n2}`;
  }

  getTitleRandom(): string {
    return Math.random() < 0.5
      ? `${this.n1} x ${this.n2}`
      : `${this.n2} x ${this.n1}`;
  }

  addSuccess() {
    this.successes += 1;
  }

  addFail() {
    this.fails += 1;
  }
}
