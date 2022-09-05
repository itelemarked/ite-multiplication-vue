<!-- 
  PROPS:
  - checked: boolean | (string | number)[], optional
  - value: string | number, optional

  EVENTS:
  - update:checked (e: boolean | (string | number)[]) => void

  Usage:
  WITH BOOLEAN BINDING
  <ToggleButton :checked="someBoolean" @udpate:checked="onUpdate($event)"></ToggleButton>
  <ToggleButton v-model:checked="someBoolean"></ToggleButton>

  WITH ARRAY BINDING. NOTE THAT WITHOUT VALUE ATTRIBUTES, THE BUTTON WILL ALWAYS BE IN "FALSE" MODE (WITHOUT TOGGLING)!!
  <ToggleButton checked="someArray" @udpate:checked="onUpdate($event)" :value="someStringOrNumber"></ToggleButton>
  <ToggleButton v-model:checked="someArray" :value="someStringOrNumber"></ToggleButton>

  IN STANDALONE MODE: THE VALUE IS PASSED AS INITIAL VALUE ONLY. THE BUTTON WILL DISPLAY TOGGELING.
  <ToggleButton checked="true"></ToggleButton>
-->

<template>
  <ion-button :fill="isChecked ? 'solid' : 'outline'" @click="toggle()">
    <slot></slot>
  </ion-button>
</template>

<script setup lang="ts">
  import { IonButton } from "@ionic/vue"
  import { computed, ref, watch } from "vue"

  const props = defineProps<{
    checked?: boolean | (string | number)[]
    value?: string | number
  }>()

  const emits = defineEmits(["update:checked"])

  // For standalone mode:
  const checkedRef = ref(props.checked || false)
  watch(
    () => props.checked,
    (newVal) => {
      if (newVal !== undefined) checkedRef.value = newVal
    }
  )

  const isChecked = computed(() => {
    if (typeof checkedRef.value === "boolean") {
      return checkedRef.value
    }

    if (
      Array.isArray(checkedRef.value) &&
      props.value !== undefined &&
      checkedRef.value.includes(props.value)
    ) {
      return true
    } else {
      return false
    }
  })

  function toggle() {
    let newChecked: boolean | (string | number)[]

    if (typeof checkedRef.value === "boolean") {
      newChecked = !checkedRef.value
      checkedRef.value = newChecked
      emits("update:checked", newChecked)
    }

    if (Array.isArray(checkedRef.value) && props.value !== undefined) {
      newChecked = [...checkedRef.value]
      if (newChecked.includes(props.value)) {
        newChecked = newChecked.filter((v) => v !== props.value)
      } else {
        newChecked.push(props.value)
      }
      checkedRef.value = newChecked
      emits("update:checked", newChecked)
    }
  }
</script>

<style>
  /* Prevent button to "flicker" when toggled: ion-button solid has no border per default, whereas outline has. */
  /* ion-button {
    --border-width: 1px;
    --border-style: solid;
  } */
</style>
