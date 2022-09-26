<template>
  <div class="ite-segment-button">
    <div class="button minus" @click="onClick($event, '-')">-</div>
    <div class="button plus" @click="onClick($event, '+')">+</div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    modelValue: number
  }>()

  const emits = defineEmits([
    'update:modelValue'
  ])

  function onClick(e: MouseEvent, val: '+' | '-') {
    animateClick(e);
    
    let newVal: number;
    if (val === '+') {
      newVal = props.modelValue + 1;
    } else if (val === '-' && props.modelValue > 0) {
      newVal = props.modelValue - 1;
    } else {
      newVal = 0;
    }
    emits('update:modelValue', newVal)
  }

  function animateClick(e: MouseEvent) {
    const el = e.target as HTMLElement;
    el.classList.add('activated');
    setTimeout(() => {
      el.classList.remove('activated');
    }, 200);
  }
</script>

<style scoped>

  .ite-segment-button {
    --color: var(--ion-color-primary);
  }

  .button {
    display: inline-block;
    min-width: 2em;
    min-height: 2em;
    line-height: 1.8em;
    text-align: center;
    color: var(--ion-color-primary);
    /* --border-style: none;
    --border-radius: none;
    margin: 0;
    overflow: hidden; */
  }

  .button.activated {
    background-color: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
  }

  .minus {
    border: 1px solid var(--color);
    border-radius: 0.5em 0 0 0.5em;
  }

  .plus {
    border: 1px solid var(--color);
    border-radius: 0 0.5em 0.5em 0 ;
    border-left: none;
  }

</style>