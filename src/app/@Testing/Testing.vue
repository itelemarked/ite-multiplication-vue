<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ion-page class="testing-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>@Testing</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ToggleButton
        :checked="isChecked"
        @checkedChange="onCheckedChange($event)"
        >btn</ToggleButton
      >
      <p>isChecked(TestingComponent): {{ isChecked }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  } from "@ionic/vue"
  import { ref } from "vue"
  import { ToggleButton } from "./components"

  let isChecked = ref(false)

  function onCheckedChange(newCheck: boolean) {
    isChecked.value = newCheck
    console.log(`newCheck: ${newCheck}`)
  }
</script>

<style></style>
