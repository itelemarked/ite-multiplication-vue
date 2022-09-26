import { getDatabase, ref as fbRef, onValue } from '@firebase/database';
import { firebase } from '@/app/services/FirebaseService';
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
  create: (successNb: number, bases: number[]) => Promise<void>;
  exists: () => Promise<boolean>;
  getRandomUncomplete: () => Promise<Multiple | null>;
  getSuccessNumber: () => Promise<number | null>;
  getMultiples: () => Promise<Multiple[] | null>;
  kill: () => Promise<void>;
}



class TrainingService implements ITrainingService {


  constructor() {
    const todosRef = fbRef(getDatabase(firebase), 'todos');

    onValue(todosRef, (snapshot) => {
      console.log(snapshot.val())
    })
  }

  isEmpty(): Promise<boolean> {
    return Promise.resolve(false);
  }

  create(successNb: number, bases: number[]): Promise<void>{
    // if (this._store.)
    return Promise.resolve();
  }

  exists(): Promise<boolean> {
    return Promise.resolve(false);
  }

  getRandomUncomplete(): Promise<any> {
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
}

const trainingService = new TrainingService();
export default trainingService;