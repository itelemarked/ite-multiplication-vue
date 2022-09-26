<template>
  <div class="ite-progress-bar" :style="styles">
    <div class="outer">
      <div class="progress">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';

  const props = defineProps<{
    value: number;
  }>();

  const styles = reactive({
    '--progress-width': computed(() =>`${props.value}%`),
  })
</script>

<style scope>
  .ite-progress-bar {
    --color: var(--ion-color-primary);
    --outer-color: lightgrey;
  }

  .outer {
    background-color: var(--outer-color);
    border-width: 0;
    border-radius: 0.3em;
  }

  .progress {
    background-color: var(--color);
    border-width: 0;
    border-radius: 0.3em;
    min-height: 5px;
    width: var(--progress-width);
    transition: width 3s linear;
  }
</style>