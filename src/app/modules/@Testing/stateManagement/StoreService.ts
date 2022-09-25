import { computed, ref } from 'vue';
import { firebase } from '@/app/services/FirebaseDataService';
import { getDatabase, onValue, push, ref as fbRef, remove } from '@firebase/database';


interface Todo {
  id: string;
  message: string;
}

interface TodoData {
  message: string;
}



class StoreService {
  private _counter$ = ref(0);

  counter$ = computed(() => this._counter$);

  private _todos$ = ref<Todo[]>([]);

  // todos$ = computed(() => this._todos$);
  get todos$() {
    return this._todos$;
  }

  constructor() {
    console.log('constructor');
    this.watchTodos();

    // - val returns a object with a generated key property. But only when online!!! How to generate key when offline??
    // - how to convert ThenableRef to Promise for typescript??
    // this.addTodo({ message: 'some new todo' }).then((val) => {
    //   console.log(val.key);
    // });
  }

  increment() {
    this._counter$.value += 1;
  }

  watchTodos() {
    const database = getDatabase(firebase);
    const todosRef = fbRef(database, 'todos');
    onValue(todosRef, (snapshot) => {
      this._todos$.value = this._toTodos(snapshot.val());
      console.log(this._todos$.value)
    });
  }

  addTodo(todo: { message: string }) {
    const database = getDatabase(firebase);
    const todosRef = fbRef(database, 'todos');
    return push(todosRef, todo);
  }

  removeTodo(id: string) {
    const database = getDatabase(firebase);
    const todoRef = fbRef(database, `todos/${id}`);
    remove(todoRef);
  }

  private _generateUid() {
    const database = getDatabase(firebase);
    const todosRef = fbRef(database, 'todos');
    const newRef = push(todosRef);
    const newKey = newRef.key;
    return newKey;
  }

  private _toTodos(datas: { [key: string]: TodoData }): Todo[] {
    const todos: Todo[] = [];
    for (const key in datas) {
      const id = key;
      const data = datas[key];
      todos.push({ id, ...data });
    }
    return todos;
  }

  private _toTodoData(todos: Todo[]): { [key: string]: TodoData } {
    const datas = {};
    todos.forEach(todo => {
      const { id, ...datas } = todo;
      (datas as any)[id] = { ...datas };
    })
    return datas;
  }
}

const storeService = new StoreService();
export default storeService;
