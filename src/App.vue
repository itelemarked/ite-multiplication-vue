<template>
  <h1>hellooooo {{name}}!</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Bob')

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

