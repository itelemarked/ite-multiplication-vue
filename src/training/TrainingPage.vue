
<template>
  <div v-if="isTrainingInProgress">
    <TrainingProgress/>
  </div>
  <div v-else>
    <TrainingStart/>
  </div>
  <!-- <h1>Training!</h1>
  <BasesSelect
    :bases="bases"
    v-model:selected="selectedBases"
  />
  <div>selected bases in App: {{ selectedBases }}</div> -->
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import BasesSelect from "./BasesSelect.vue"
  import { Testing } from "./Testing";

  import TrainingProgress from "./TrainingProgress.vue";
  import TrainingStart from './TrainingStart.vue';

  const isTrainingInProgress = ref(true);

  const bases = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const selectedBases = ref([1,2]);

  (function onCreate() {
    const training = new Testing(2)
    training.setMultiplesByBases([6,7,8])
    console.log(training.getRandomUncompleteMultiple()?.getId())
  }())

</script>

<style>
  .meg-bases-select {
    background-color: lightgray;
  }
</style>