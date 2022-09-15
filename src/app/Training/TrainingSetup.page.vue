<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Training-setup</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <TrainingSetup></TrainingSetup>

    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
  import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
  } from '@ionic/vue';
import TrainingSetup from './TrainingSetup.component.vue';
</script>

<style scoped></style>
