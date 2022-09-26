<template>
  <div class="ite-training-setup">

    <div style="position: relative;">
      <div class="flex align-items-center">
        <span class="grow-1">Time interval:</span>
        <span style="width: 60px">{{ timeInterval }} sec</span>
        <SegmentButton v-model="timeInterval"></SegmentButton>
      </div>

      <div class="flex align-items-center ion-padding-top">
        <span class="grow-1">Required successes:</span>
        <span style="width: 60px">{{ requiredSuccesses }}</span>
        <SegmentButton v-model="requiredSuccesses"></SegmentButton>
      </div>

      <div class="ion-padding-top">
        <BasesPicker v-model:selected="selectedBases"
          >Select bases:
        </BasesPicker>
      </div>

      <div v-if="trainingInProgress" class="disable-container"></div>
    </div>

    <div class="ion-padding-top">
      <ion-button expand="block" fill="outline" :disabled="selectedBases.length < 1">START</ion-button>
      <div style="font-size: 0.8em;font-style: italic;">
        <span style="width: 220px; display: inline-block;">Successes required:</span>
        <span>65</span>
      </div>
      <div style="font-size: 0.8em;font-style: italic;">
        <span style="width: 220px; display: inline-block;">Estimated time:</span>
        <span>3 min 15 sec</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import SegmentButton from '@/app/components/SegmentButton.vue';
  import { IonButton } from '@ionic/vue';
  import { ref, type Ref } from 'vue';
  import BasesPicker from './BasesPicker.vue';
  import storeService from '@/app/services/StoreService';


  
  const timeInterval = ref(await storeService.get<number>('trainings/local/timeInterval'));
  // const timeInterval = ref(2);
  const requiredSuccesses = ref(2);
  const selectedBases = ref([1,3,5]);
  const trainingInProgress = ref(false);
  
</script>

<style>
  .ite-training-setup {
    width: 100%;
    height: 100%;
  }

  .disable-container {
    width: 100%; 
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
    background-color: white;
  }
</style>
