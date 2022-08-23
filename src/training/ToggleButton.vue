
<template>
  <div class="toggle-button" :class="{'checked': isChecked}" @click="toggle">1</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps<{
    checked: boolean
  }>()

  const emits = defineEmits<{
    (name: 'update:checked', val: boolean): void
  }>()

  const isChecked = ref<boolean>(props.checked);

  function toggle() {
    isChecked.value = !isChecked.value;
    emits('update:checked', isChecked.value)
  }

</script>


<style>
  .toggle-button {
    display: inline-block;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 5px;
    background-color: lightgray;
    font-weight: bold;
    min-width: 30px;
  }

  .toggle-button.checked {
    background-color: rgb(0, 115, 255);
    border-color: white;
    color: white;
  }
</style>

