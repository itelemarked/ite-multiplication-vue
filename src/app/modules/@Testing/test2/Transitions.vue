<template>
  Transistions
  <div>
    <ion-button @click="show = !show">toggle show</ion-button>
    <ion-button @click="toggleClass()">toggle class</ion-button>
    <Transition>
      <div class="container" v-if="show"></div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { IonButton } from '@ionic/vue';
  import { ref } from 'vue';

  const show = ref(true);
  const isGreen = ref(false);

  function toggleClass() {
    const el = document.querySelector('.container') as HTMLElement;
    el.classList.add('animated');
    // el.classList.add('green');
    // el.classList.remove('red');
  }
</script>

<style>
  .container {
    height: 200px;
    width: 200px;
    border: 1px solid lightgray;
    margin-left: 100px;
    margin-top: 100px;
    background-color: yellow;
    position: relative;
  }

  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .animated {
    animation: example 2s;
  }

  @keyframes example {
    from {left: -100px;}
    to {left: 0px; background-color: green;}
  }

  .v-enter-active {
    opacity: 0;
    transition: opacity 5s ease;
  } 
  .v-leave-active {
    opacity: 1;
    transition: opacity 5s ease;
  } 

  /* .v-enter-from,
  .v-leave-to {
    opacity: 0;
  } */
</style>
