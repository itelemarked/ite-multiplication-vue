<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ion-page class="testing-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>@Testing</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :forceOverscroll="false">
      <Test1></Test1>
      <!-- <Test2></Test2> -->
      <!-- <TestCss></TestCss> -->
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
    IonButton,
  } from '@ionic/vue';
  import Test1 from './test1/Test1.vue';
  import Test2 from './test2/Test2.vue';
  import TestCss from './testCss/TestCss.vue';
</script>

<style scoped>
  
</style>
