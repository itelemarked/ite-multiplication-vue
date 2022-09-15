<template>
  <div class="ite-multiple-input">
    <div class="container">
      {{ title }} <br />
      = <br />
      <span class="value">{{ value }}</span>
      <span class="cursor"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { createAnimation } from '@ionic/core';
  import { computed } from 'vue';
  import type { Multiple } from '@/app/models';

  const props = defineProps<{
    multiple: Multiple | null;
    value: number | null;
  }>();

  // watch(()=>props.value, (newVal) => {
  //   successAnim.play().then(() => successAnim.stop());
  // })

  const title = computed<string>(() => props.multiple?.getTitleRandom() || '');

  // const cursorAnim = createAnimation()
  //   .duration(1000)
  //   .iterations(Infinity)
  //   .easing('linear')
  //   .keyframes([
  //     {offset: 0, opacity: '0'},
  //     {offset: 0.45, opacity: '0.1'},
  //     {offset: 0.5, opacity: '1'},
  //     {offset: 0.95, opacity: '0.9'},
  //     {offset: 1, opacity: '0'},
  //   ]);

  // const successAnim = createAnimation()
  //   .duration(1000)
  //   .easing('linear')
  //   .keyframes([
  //     {offset: 0, transform: 'scale(1)', color: 'var(--ion-color-success)'},
  //     {offset: 0.4, transform: 'scale(1.3)', color: 'var(--ion-color-success)'},
  //     {offset: 0.5, transform: 'scale(1)', color: 'var(--ion-color-success)'},
  //     {offset: 0.9, transform: 'scale(1.3)', color: 'var(--ion-color-success)'},
  //     {offset: 1, transform: 'scale(1)', color: 'var(--ion-color-success)'},
  //   ]);

  // onMounted(() => {
  //   const cursorEl = document.querySelector('.ite-multiple-input .cursor') as HTMLElement;
  //   cursorAnim.addElement(cursorEl).play()
  //   // const valueEl = document.querySelector('.ite-multiple-input .value') as HTMLElement;
  //   // setTimeout(() => {
  //   //   console.log('anim start')
  //   //   successAnim.addElement(valueEl).play().then(() => {
  //   //     console.log('anim stop')
  //   //     successAnim.stop()
  //   //   })
  //   // }, 2000);
  // })
</script>

<style scoped>
  .container {
    display: inline-block;
    padding: 20px;
    width: 250px;
    text-align: center;
    font-size: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }

  .outline {
    border: 1px solid lightgray;
  }

  .value {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }

  .cursor {
    display: inline-block;
    width: 3px;
    height: 0.7em;
    background-color: var(--ion-color-primary);
    border-radius: 5px;
    margin-left: 4px;
    animation: cursor-blink 1s steps(2) infinite;
  }
  /* .value::after {
    content: '';
    opacity: 1;
    width: 5px;
    height: 40px;
    background: var(--ion-color-primary);
    display: inline-block;
    border-radius: 5px;
    animation: cursor-blink 1s steps(2) infinite;
  } */

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
