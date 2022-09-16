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

  IN STANDALONE MODE: Always provide a v-model:checked, also for standalone mode!
  <ToggleButton checked="true"></ToggleButton>
-->

<template>
  <ion-button
    class="ite-toggle-button"
    :fill="isChecked ? 'solid' : 'outline'"
    @click="onToggle()"
  >
    <slot></slot>
  </ion-button>
</template>

<script setup lang="ts">
  import { IonButton } from '@ionic/vue';
  import { computed } from 'vue';

  const props = defineProps<{
    checked: boolean | (string | number)[];
    value?: string | number;
  }>();

  const emits = defineEmits(['update:checked']);

  const isChecked = computed(() => {
    if (typeof props.checked === 'boolean') {
      return props.checked;
    }

    if (
      Array.isArray(props.checked) &&
      props.value !== undefined &&
      props.checked.includes(props.value)
    ) {
      return true;
    } else {
      return false;
    }
  });

  function onToggle() {
    let newChecked: boolean | (string | number)[];

    if (typeof props.checked === 'boolean') {
      newChecked = !props.checked;
      emits('update:checked', newChecked);
    }

    if (Array.isArray(props.checked) && props.value !== undefined) {
      newChecked = [...props.checked];
      if (newChecked.includes(props.value)) {
        newChecked = newChecked.filter((v) => v !== props.value);
      } else {
        newChecked.push(props.value);
      }
      emits('update:checked', newChecked);
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
