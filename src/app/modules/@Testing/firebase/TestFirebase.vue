<template>
  <div>Todos</div>
  <ion-item>
    <ion-input type="text" v-model="inputValue"></ion-input>
    <ion-button @click="addTodo(inputValue)">add</ion-button>
  </ion-item>

  <ion-item v-for="todo of todos" :key="todo.id">
    <ion-label>{{ todo.message }} ({{ todo.id }})</ion-label>
    <ion-button @click="deleteTodo(todo.id)">delete</ion-button>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonLabel, IonInput, IonItem, IonButton } from '@ionic/vue';
  import { firebase } from '@/app/services/FirebaseService';
  import {
    ref as fbRef,
    set,
    remove,
    onValue,
    getDatabase,
    child,
  } from 'firebase/database';
  import { ref, type Ref } from 'vue';

  interface Todo {
    id: string;
    message: string;
  }

  const todos: Ref<Todo[]> = ref([]);
  const inputValue = ref('');

  const todosRef = fbRef(getDatabase(firebase), 'todos');
  onValue(todosRef, (snapshot) => {
    const todoSnapshot = snapshot.val();
    todos.value = [];
    for (let key in todoSnapshot) {
      todos.value.push({ id: key, ...todoSnapshot[key] });
    }
    console.log(todos);
  });

  function addTodo(message: string): Promise<void> {
    const id = uid();
    return set(child(todosRef, id), { message });
  }

  function deleteTodo(id: string): Promise<void> {
    return remove(child(todosRef, id));
  }

  function uid(): string {
    return Date.now().toString();
  }
</script>

<style></style>
