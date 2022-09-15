<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ite-test2">
    <div>
      Animations
      <div
        class="container animation"
        :class="classes$"
        ref="animatedEl"
        @animationstart="onNativeAnimationStart($event)"
        @animationend="onNativeAnimationEnd($event)"
      ></div>
      <div>triggerAnimation: {{ props.triggerAnimation }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue';

  const props = defineProps<{
    triggerAnimation: 'custom' | 'custom-started' | null;
  }>();

  const emits = defineEmits(['update:triggerAnimation', 'animation-started']);

  const classes$ = computed(() => {
    return props.triggerAnimation === 'custom-started'
      ? 'custom-animation-active'
      : '';
  });

  const animatedEl = ref<HTMLElement>();

  watch(
    () => props.triggerAnimation,
    (newVal, oldVal) => {
      console.log(`newVal: ${newVal}`);
      // animation should start normally
      if (newVal === 'custom' && oldVal === null) {
        //change instantely the 'custom' value to 'custom-started'
        const triggerStart = 'custom-started';
        emits('update:triggerAnimation', triggerStart);
      }

      // animation is running: stop animation and start a new one!
      if (newVal === 'custom' && oldVal === 'custom-started') {
        console.log('restart')
        animatedEl.value?.classList.remove('custom-animation-active');
        void animatedEl.value?.offsetHeight;
        animatedEl.value?.classList.add('custom-animation-active');
        // restartAnimation(animatedEl.value!);
        // const triggerStart = null;
        // emits('update:triggerAnimation', triggerStart);
        // const newTrigger = 'custom';
        // emits('update:triggerAnimation', newTrigger);
      }

      // if (oldVal === 'custom-animation-active' && newVal === 'custom') {
      //   // const el = document.querySelector(
      //   //   '.container.animation'
      //   // ) as HTMLElement;
      //   // el.classList.remove('custom-animation-active');
      //   // void el.offsetHeight;
      //   // const triggerCancel = 'custom-animation-cancel';
      //   // emits('update:triggerAnimation', triggerCancel);
      //   // const triggerStart = 'custom-animation-start';
      //   // emits('update:triggerAnimation', triggerStart);
      //   // const triggerActive = 'custom-animation-active';
      //   // emits('update:triggerAnimation', triggerActive);
      // }
    }
  );

  function onNativeAnimationStart(e: AnimationEvent) {
    console.log('native animation fired');
    // const initial = props.triggerAnimation;
    // const newTrigger = initial + '-animation-active'
    // emits('update:triggerAnimation', newTrigger);
  }

  function onNativeAnimationEnd(e: AnimationEvent) {
    // console.log('ends')
    const triggerEnd = null;
    emits('update:triggerAnimation', triggerEnd);
  }

  function restartAnimation(el: HTMLElement) {
    el.classList.remove('custom-animation-active');
    void el.offsetHeight;
    el.classList.add('custom-animation-active');
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
