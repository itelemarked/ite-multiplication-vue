<template>
  <p>FirebaseTest component</p>
</template>

<script setup lang="ts">
  import { database } from '@/app/services/FirebaseDataService';
  import { ref as fbRef, set, remove, onValue } from 'firebase/database';

  // addTodo('id1', 'message 1');
  //addTodo('id2', 'message 2');
  //addTodo('id3', 'message 3');
  addTodo('id4', 'message 4');

  // removeTodo('id1')

  function addTodo(id: string, msg: string) {
    return set(fbRef(database, `todos/${id}`), { message: msg });
  }

  function removeTodo(id: string) {
    return remove(fbRef(database, `todos/${id}`));
  }

  onValue(fbRef(database, 'todos'), (snapshot) => console.log(snapshot));

</script>

<style></style>
