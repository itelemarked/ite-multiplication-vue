
<template>
  <ion-page class="ite-training-progress-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="onBack()">
            <ion-icon slot="icon-only" name="chevron-back-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>
          Training Progress
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Training progress content</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonIcon, modalController } from '@ionic/vue';
  import { addIcons } from 'ionicons';
  import { chevronBackOutline } from 'ionicons/icons';

  addIcons({
    'chevron-back-outline': chevronBackOutline,
  })

  function onBack() {
    modalController.dismiss()
  }
</script>

<style></style>