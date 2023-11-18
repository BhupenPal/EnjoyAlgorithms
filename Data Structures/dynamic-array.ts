export class DynamicArray {
  private readonly growthRate: number = 1.6; // Golden Ratio
  private maxCapacity: number = 1;
  public length: number = 0;
  public array: Array<number>;

  constructor() {
    this.array = new Array(this.maxCapacity);
  }

  private increaseArraySize() {
    const upgradedCapacity = Math.ceil(this.maxCapacity * this.growthRate);
    const newArray = new Array<number>(upgradedCapacity);

    console.log(
      `Current capacity (${this.maxCapacity}) reached -> Increase capacity to ${upgradedCapacity}`
    );

    for (let i = 0; i <= this.length - 1; i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
    this.maxCapacity = upgradedCapacity;
  }

  private decreaseArraySize() {
    const downgradedCapacity = Math.ceil((3 / 4) * this.maxCapacity);
    const newArray = new Array<number>(downgradedCapacity);

    console.log(
      `Unused capacity (${this.maxCapacity}) reached -> Decreasing capacity to ${downgradedCapacity}`
    );

    for (let i = 0; i <= this.length - 1; i++) {
      newArray[i] = this.array[i];
    }

    this.maxCapacity = downgradedCapacity;
    this.array = newArray;
  }

  push(data: number): number {
    if (this.length === this.maxCapacity) {
      this.increaseArraySize();
    }

    this.array[this.length] = data;
    this.length = this.length + 1;

    return data;
  }

  pop(): number {
    if (this.length <= (1 / 2) * this.maxCapacity) {
      this.decreaseArraySize();
    }

    const elementToBeRemoved = this.array[this.length];

    this.length = this.length - 1;
    delete this.array[this.length];

    return elementToBeRemoved;
  }
}

const dynamicArray = new DynamicArray();
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);
dynamicArray.push(4);
dynamicArray.push(5);
dynamicArray.push(6);
dynamicArray.push(7);
dynamicArray.push(8);
dynamicArray.push(9);
dynamicArray.push(10);
dynamicArray.push(11);
dynamicArray.push(12);
dynamicArray.push(13);
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
dynamicArray.pop();
console.log(dynamicArray.array);
