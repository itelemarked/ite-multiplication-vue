<template>
  <ion-page class="training-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Training</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      some content

      <div v-if="isTrainingInProgress">
        <TrainingProgress />
      </div>
      <div v-else>
        <TrainingStart />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
  } from "@ionic/vue"

  import { TrainingStart, TrainingProgress } from '@/app/components';

  const isTrainingInProgress = ref(true)

  // const bases = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // const selectedBases = ref([1,2]);

  ;(function onCreate() {})()
</script>

<style>
  .meg-bases-select {
    background-color: lightgray;
  }
</style>
