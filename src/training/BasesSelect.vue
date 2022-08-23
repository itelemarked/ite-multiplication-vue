<template>

  <label v-for="base in props.bases">
    {{base}}
    <input type="checkbox" :value="base" v-model="selectedBases" @change="onSelectedChange"/>
  </label>

  <div>selected bases in BasesSelect: {{selectedBases}}</div>

</template>


<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, Ref, ref } from 'vue';


  const props = defineProps<{
    bases: number[],
    selected?: number[],
    colorSelected?: string,
    colorUnselected?: string
  }>()

  const emits = defineEmits<{
    (name: 'update:selected', val: number[]): void
  }>()

  let selectedBases: Ref<number[]> = ref(props.selected || []);


  onBeforeMount(() => {
    validateSelected()
    // NOT WORKING... WHY???
    // selectedBases = ref(props.selected || [])
  })

  function onSelectedChange() {
    emits('update:selected', selectedBases.value)
  }



  // TODO: props.selected must be included in props.bases!
  function validateSelected() {
    if (props.selected?.includes(7)) throw new Error('no 7 allowed!!')
  }
  function validatedSelectedBases(): Ref<number[]> { return ref([]); }




  onMounted(() => {})

</script>

  
<style>
  label {
    display: block;
  }
</style>