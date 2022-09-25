<template>
  <!-- <ite-comp1></ite-comp1>
  <ite-comp2></ite-comp2> -->

  <div>
    <input type="text" v-model="message"/>
    <button @click="addTodo()">add</button>
  </div>

  <div class="ion-padding-top">
    <div v-for="todo in todos" :key="todo.id">
      <div style="display: inline-block; width: 200px">{{ todo.message }}</div>
      <div style="display: inline-block">
        <button @click="removeTodo(todo)">delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import IteComp1 from './IteComp1.vue';
  import IteComp2 from './IteComp2.vue';
  import storeService from './StoreService';

  const todos = computed(() => storeService.todos$.value);
  const message = ref('');

  function addTodo() {
    storeService.addTodo({ message: message.value });
    message.value = '';
  }

  function removeTodo(todo: any) {
    storeService.removeTodo(todo.id);
  }
</script>

<style></style>
