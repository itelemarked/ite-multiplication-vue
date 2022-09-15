import { Multiple } from './Mutliple';

export class Test {
  private multiples: Multiple[];
  private multipleSuccessNb: number;

  constructor(multipleSuccessNb: number) {
    this.multiples = [];
    this.multipleSuccessNb = multipleSuccessNb;
  }

  getMultiples(): Multiple[] {
    return this.multiples;
  }

  getUncompleteMultiples(): Multiple[] {
    return this.multiples.filter((m) => m.successes < this.multipleSuccessNb);
  }

  getRandomUncompleteMultiple(): Multiple | null {
    // import functions
    const getUncompleteMultiples = this.getUncompleteMultiples.bind(this);

    // returns undefined if there is no uncomplete multiples
    // (if multiples is empty array or all multiples are completed)
    const uncompletes = getUncompleteMultiples();
    if (uncompletes.length === 0) {
      return null;
    }

    // returns a random uncomplete multiple
    const uncomplete =
      uncompletes[Math.floor(Math.random() * uncompletes.length)];
    return uncomplete;
  }

  setMultiplesByBases(bases: number[]) {
    const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const sortedBases = this._noDuplicatesAscending(bases);
    const multiples: Multiple[] = [];

    let b: number;
    let f: number;
    for (let i = 0; i < sortedBases.length; i++) {
      b = sortedBases[i];
      for (let j = 0; j < factors.length; j++) {
        f = factors[j];
        if (!(sortedBases.includes(f) && f < b)) {
          multiples.push(new Multiple(b, f));
        }
      }
    }

    this.multiples = multiples;
  }

  private _noDuplicatesAscending<T>(arr: T[]): T[] {
    const uniques: T[] = [];
    arr.forEach((a) => {
      if (!uniques.includes(a)) uniques.push(a);
    });
    return uniques.sort();
  }
}
