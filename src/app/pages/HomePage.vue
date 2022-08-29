<template>
  <ion-page class="home-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Home content</p>
      <ion-button router-link="/training">go to training</ion-button>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-title>footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>
