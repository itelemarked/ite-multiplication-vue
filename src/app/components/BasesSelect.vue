<template>
  <div class="bases-select">
    <label v-for="base in bases" :key="base">
      {{ base }}
      <input
        type="checkbox"
        :value="base"
        v-model="selectedBases"
        @change="onSelectedChange"
      />
    </label>

    <label>
      all
      <input type="checkbox" />
    </label>

    <label>
      none
      <input type="checkbox" />
    </label>

    <div>selected bases in BasesSelect: {{ selectedBases }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, type Ref } from 'vue';

  const props = defineProps<{
    bases: number[];
    selected?: number[];
    // colorSelected?: string
    // colorUnselected?: string
  }>();

  const emits = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (name: string, val: number[]): void;
  }>();

  let bases: number[];
  let selectedBases: Ref<number[]>;

  (function onCreate() {
    _validateProps();
    bases = props.bases || [];
    selectedBases = ref(props.selected || []);
  })();

  function onSelectedChange() {
    emits('update:selected', selectedBases.value);
  }

  function _validateProps() {
    // validate selectedBases
    props.selected?.forEach((sel) => {
      if (!props.bases.includes(sel)) {
        throw new Error('Each "SelectedBases" must be included in "Bases"!!!');
      }
    });
  }
</script>

<style>
  label {
    display: block;
  }
</style>
