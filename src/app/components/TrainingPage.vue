<template>
  <router-view></router-view>
  <!-- <ion-router-outlet></ion-router-outlet> -->
</template>

<script setup lang="ts"></script>

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
