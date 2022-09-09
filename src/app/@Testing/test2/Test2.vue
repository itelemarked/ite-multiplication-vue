<template>
  <!-- <div>
    <ion-button @click="startAnimation()">click me</ion-button>
    <Animations v-model:triggerAnimation="anim"></Animations>
  </div> -->

  <div>
    <Transitions></Transitions>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonButton } from '@ionic/vue';
  import Animations from './Animations.vue';
import Transitions from './Transitions.vue';


  const anim = ref<string | null>(null);

  // anim.value = 'some'
  // setTimeout(() => {
  //   console.log('retrigger')
  //   anim.value = 'other'
  // }, 2000);

  function startAnimation() {
    anim.value = 'custom';
  }
</script>

<style></style>