<template>
  <div class="ite-test2">

    <div>
      Animations
      <div
        class="container animation"
        :class="animationClass$"
        ref="squareEl"
        @animationstart="onStart($event)"
        @animationend="onEnd($event)"
      ></div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { IonButton } from '@ionic/vue';
  import { computed, ref, watch } from 'vue';


  // const animationClass$ = ref('custom-animation-active');
  // console.log('init');
  // setTimeout(() => {
  //   console.log('reset')
  //   // animationClass$.value = '';

  //   const el = document.querySelector('.container') as HTMLElement
  //   el.classList.remove('custom-animation-active')
  //   void el.offsetHeight;
  //   el.classList.add('custom-animation-active')

  //   // animationClass$.value = 'custom-animation-active';
  // }, 2000);

  const props = defineProps<{
    triggerAnimation: string | null
  }>();

  const emits = defineEmits(['update:triggerAnimation']);

  watch(() => props.triggerAnimation, (newVal, oldVal) => {
    console.log(`props.triggerAnimation, newVal: ${newVal}`)

    if (oldVal === null && newVal === 'custom') {
      const triggerStart = 'custom-animation-start'
      emits('update:triggerAnimation', triggerStart);

      const triggerActive= 'custom-animation-active'
      emits('update:triggerAnimation', triggerActive);
    } 

    if (oldVal === 'custom-animation-active' && newVal === 'custom') {
      const el = document.querySelector('.container.animation') as HTMLElement
      el.classList.remove('custom-animation-active')
      void el.offsetHeight;
      const triggerCancel = 'custom-animation-cancel'
      emits('update:triggerAnimation', triggerCancel);
      const triggerStart = 'custom-animation-start'
      emits('update:triggerAnimation', triggerStart);
      const triggerActive= 'custom-animation-active'
      emits('update:triggerAnimation', triggerActive);
    }
  });

  const animationClass$ = computed(() => {
    return props.triggerAnimation !== null ? `${props.triggerAnimation}` : '';
  })

  function onStart(e: any) {
    // const initial = props.triggerAnimation;
    // const newTrigger = initial + '-animation-active'
    // emits('update:triggerAnimation', newTrigger);
  }

  function onEnd(e: any) {
    // console.log('ends')
    const triggerEnd = null;
    emits('update:triggerAnimation', triggerEnd);
  }
</script>

<style>
  .container {
    height: 200px;
    width: 200px;
    border: 1px solid lightgray;
    margin-left: 100px;
    margin-top: 100px;
    background-color: red;
  }
 
  .custom-animation-active {
    animation: custom 5s;
  }

  @keyframes custom {
    0% {
      transform: scale(1, 1);
      background-color: blue;
    }
    50% {
      transform: scale(1.3, 1.3);
      background-color: blue;
    }
    100% {
      transform: scale(0.9, 0.9);
    }
  }
</style>

<!-- ******** IONIC ANIMATION SHAKE ***** -->
<!-- <template>
  <div class="ite-test2">

    <ion-button @click="play()">click me</ion-button>
    <div class="animated-container" ref="squareEl"></div>

  </div>
</template>

<script setup lang="ts">


  import { onMounted, ref, type Ref } from 'vue';
  import { createAnimation, IonButton, type Animation } from '@ionic/vue';

  const squareEl = ref();
  let animationFailed = createAnimation()
    .duration(1000)
    .easing('cubic-bezier(0.36, 0.07, 0.19, 0.97)')
    .keyframes([
      {offset: 0.1, transform: 'translate3d(-2px, 0, 0)'},
      {offset: 0.2, transform: 'translate3d(4px, 0, 0)'},
      {offset: 0.3, transform: 'translate3d(-8px, 0, 0)'},
      {offset: 0.4, transform: 'translate3d(8px, 0, 0)'},
      {offset: 0.5, transform: 'translate3d(-8px, 0, 0)'},
      {offset: 0.6, transform: 'translate3d(8px, 0, 0)'},
      {offset: 0.7, transform: 'translate3d(-8px, 0, 0)'},
      {offset: 0.8, transform: 'translate3d(4px, 0, 0)'},
      {offset: 0.9, transform: 'translate3d(-2px, 0, 0)'},
    ])

  function play() {
    animationFailed
      .addElement(squareEl.value)
      .play()
      .then(() => {
        animationFailed.stop()
      });
  }
</script>

<style scoped>

  .animated-container {
    height: 200px;
    width: 200px;
    border: 1px solid lightgray;
    margin-left: 100px;
    margin-top: 100px;
    background-color: red;
  }

</style> -->
