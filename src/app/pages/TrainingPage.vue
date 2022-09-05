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
      
      <ToggleButton :checked="true">button1</ToggleButton>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
  } from '@ionic/vue';
  import { ToggleButton } from '@/app/components';

</script>

<style scoped></style>
