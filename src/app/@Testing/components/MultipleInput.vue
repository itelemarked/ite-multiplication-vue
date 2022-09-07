
<template>
  <div class="ite-multiple-input">
    <div class="container">
      {{ title }} <br />
      = <br />
      <span class="value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { Multiple } from '../../models';

  const props = defineProps<{
    multiple: Multiple | null;
    value: number | null;
  }>();

  // const title = ref(props.multiple?.getTitleRandom() || '');
  const title = computed<string>(() => props.multiple?.getTitleRandom() || '');

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

  .value {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  .value::after {
    content: '';
    width: 5px;
    height: 40px;
    background: var(--ion-color-primary);
    display: inline-block;
    border-radius: 5px;
    animation: cursor-blink 1s steps(2) infinite;
  }

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
</style>