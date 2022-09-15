<template>
  <div class="test-css">

    <div class="container-1 red">
      <p>container-1 text</p>
    </div>

    <div class="container-2">
      <p>container-2 text</p>
    </div>

    <div class="colorize">
      <p>media: {{ mediaService.cssClass.value }}</p>
    </div>

    <ion-button>btn</ion-button>

    <ion-grid>
      <ion-row>
        <ion-col size-xs="12" size-sm="6" size-md="3" style="border: 1px solid lightgrey;"></ion-col>
      </ion-row>
    </ion-grid>
    
  </div>
</template>

<script setup lang="ts">
  import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
  import { mediaService } from '@/app/services/MediaService';
  
</script>

<style scoped>
  /* .size-xs .colorize,
  .size-sm .colorize {
    color: blue;
  } */
</style>