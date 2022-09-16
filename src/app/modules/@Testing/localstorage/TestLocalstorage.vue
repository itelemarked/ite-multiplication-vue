<template>
  <p>LocalstorageTest component</p>
</template>

<script setup lang="ts">
  import trainingStore from './dataService';

  trainingStore.getRandomUncomplete();


  // import localforage from 'localforage';

  // const trainingStore = createStore('ite-multiplication-vue', 'trainingStore');
  // // trainingStore.setItem('todos', [{ message: 'todo 4' }]);

  // trainingStore.getItem('todos').then((val) => {
  //   console.log(val);
  //   killDatabase('ite-multiplication-vue');
  // });

  // // trainingStore.clear();


  // function createStore(databaseName: string, storeName: string) {
  //   return localforage.createInstance({
  //     name: databaseName,
  //     storeName: storeName,
  //   });
  // }

  // function killDatabase(databaseName: string) {
  //   window.indexedDB.deleteDatabase(databaseName);
  // }
</script>

<style></style>
