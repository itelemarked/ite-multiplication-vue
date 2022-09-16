<template>
  <div class="ite-calc-output">
    <div class="container">
      {{ title }} <br />
      = <br />
      <span class="value">{{ value }}</span>
      <span class="cursor"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    value: number | null;
  }>();
</script>

<style scoped>
  .container {
    display: inline-block;
    text-align: center;
    font-size: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 0.3em 1em;
    box-shadow: 1px 1px 5px grey;
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

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
