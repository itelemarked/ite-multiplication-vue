
<template>
  <div v-if="isTrainingInProgress">
    <TrainingProgress/>
  </div>
  <div v-else>
    <TrainingStart/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import TrainingProgress from "./_components/TrainingProgress.vue";
  import TrainingStart from './_components/TrainingStart.vue';

  const isTrainingInProgress = ref(true);

  // const bases = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // const selectedBases = ref([1,2]);

  (function onCreate() {
    
  }())

</script>

<style>
  .meg-bases-select {
    background-color: lightgray;
  }
</style>