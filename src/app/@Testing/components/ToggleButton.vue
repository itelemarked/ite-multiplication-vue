<template>
  <ion-button :fill="checked ? 'solid' : 'outline'" @click="onButtonClick()">
    <slot></slot>
  </ion-button>
  <p>props.checked (ToggleButton): {{ checked }}</p>
</template>

<script setup lang="ts">
  import { IonButton } from "@ionic/vue"
  import { watch } from "vue"

  const props = defineProps({
    checked: {
      type: Boolean,
      required: true
    }
  })

  const emits = defineEmits(["checkedChange"])

  function onButtonClick() {
    emits("checkedChange", !props.checked)
  }

  watch(
    () => props.checked,
    (newChecked) => {
      console.log(`watch checked: ${newChecked}`)
    }
  )
</script>

<style></style>
