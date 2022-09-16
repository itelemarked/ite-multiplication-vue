import localforage from 'localforage';
import type { ComputedRef } from 'vue';

interface IMultipleData {
  n1: number;
  n2: number;
  successes: number;
  fails: number;
};

interface Multiple extends IMultipleData {
  id: string;
  title: string;
  result: number;
  randomTitle: ComputedRef<string>;
}

interface ITrainingService {
  create: (successNb: number, bases: number[]) => Promise<null>;
  exists: () => Promise<boolean>;
  getRandomUncomplete: () => Promise<Multiple | null>;
  getSuccessNumber: () => Promise<number | null>;
  getMultiples: () => Promise<Multiple[] | null>;
  kill: () => Promise<void>;
}



class TrainingService implements ITrainingService {

  private _currentTrainingStore: LocalForage;

  constructor() {
    this._currentTrainingStore = localforage.createInstance({
      name: 'ite-multiplication-vue',
      storeName: 'currentTraining',
    });
    this.isEmpty().then(console.log);
  }

  async isEmpty(): Promise<boolean> {
    const keys = await this._currentTrainingStore.keys();
    return keys.length === 0 ? true : false;
  }

  create(successNb: number, bases: number[]): Promise<null>{
    return Promise.resolve(null);
  }

  exists(): Promise<boolean> {
    return Promise.resolve(false);
  }

  getRandomUncomplete(): Promise<any> {
    let successesNb;
    this._currentTrainingStore
      .getItem('successesNb')
      .then((val) => console.log(val));
    return Promise.resolve(true);
  }

  getSuccessNumber(): Promise<number | null> {
    return Promise.resolve(null);
  }

  getMultiples(): Promise<Multiple[] | null> {
    return Promise.resolve(null);
  }

  addSuccess(multipleId: string): Promise<void> {
    return Promise.resolve();
  }

  addFail(multipleId: string): Promise<void> {
    return Promise.resolve();
  }

  kill(): Promise<void> {
    return Promise.resolve();
  }


  // private _setMultiplesByBases(bases: number[]) {
  //   const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //   const sortedBases = this._noDuplicatesAscending(bases);
  //   const multiples: Multiple[] = [];

  //   let b: number;
  //   let f: number;
  //   for (let i = 0; i < sortedBases.length; i++) {
  //     b = sortedBases[i];
  //     for (let j = 0; j < factors.length; j++) {
  //       f = factors[j];
  //       if (!(sortedBases.includes(f) && f < b)) {
  //         multiples.push(new Multiple(b, f));
  //       }
  //     }
  //   }

  //   this.multiples = multiples;
  // }

  // private _noDuplicatesAscending<T>(arr: T[]): T[] {
  //   const uniques: T[] = [];
  //   arr.forEach((a) => {
  //     if (!uniques.includes(a)) uniques.push(a);
  //   });
  //   return uniques.sort();
  // }

}

const trainingService = new TrainingService();
export default trainingService;
