<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Training</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <Suspense>
        <TrainingSetup></TrainingSetup>
        <template #fallback>
          <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <ion-spinner></ion-spinner>
          </div>
        </template>
      </Suspense>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonSpinner
  } from '@ionic/vue';
  import TrainingSetup from '@/app/components/TrainingSetup.vue';
</script>

<style scoped></style>

<!-- <template>
  <ion-page class="training-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Training</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      
      <TrainingSetup
        :selected-bases="selectedBases"
        @update:selected-bases="selectedBases = $event"
        @start="onStart()"
      ></TrainingSetup>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonContent,
  } from '@ionic/vue';
  import TrainingSetup from './TrainingSetup.vue';
  import { reactive, ref } from 'vue';

  const selectedBases = ref<number[]>([]);

  function onStart() {}
</script>

<style scoped></style> -->
