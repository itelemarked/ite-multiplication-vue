<!--
/**
*  USAGE:
*  <BasesPicker 
*    v-model:selected="someSelectedBases"
*  >
*    Some Title
*  </BasesPicker>
*
*  PROPS:
*  - selected: number[], default []. The array only consider number between 1 and 12.
*
*  RMK's:
*  - A slot for the title is available.
*  - Always provide a v-model:selected, also if you wish a standalone display.
*
*/
-->

<template>
  <div class="ite-bases-picker">
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col class="ion-align-self-center">
          <slot></slot>
        </ion-col>
        <ion-col class="ion-text-end">
          <ion-button size="small" fill="outline" @click="onSelect('all')"
            >All</ion-button
          >
          <ion-button size="small" fill="outline" @click="onSelect('none')"
            >None</ion-button
          >
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size-sm="12" size-md="6" class="flex">
          <ToggleButton
            v-for="n in 6"
            :key="n"
            :checked="selectedBases"
            @update:checked="emits('update:selected', $event)"
            :value="n"
            class="grow-1"
            >{{ n }}</ToggleButton
          >
        </ion-col>
        <ion-col size-sm="12" size-md="6" class="flex">
          <ToggleButton
            v-for="n in 6"
            :key="n"
            :checked="selectedBases"
            @update:checked="emits('update:selected', $event)"
            :value="n + 6"
            class="grow-1"
            >{{ n + 6 }}</ToggleButton
          >
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script setup lang="ts">
  import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
  import { computed } from 'vue';
  import { ToggleButton } from '@/app/components';

  const props = defineProps<{
    selected: number[];
    title?: string;
  }>();

  const selectedBases = computed(() => props.selected || []);

  const emits = defineEmits<{
    (e: 'start'): void;
    (e: 'update:selected', val: number[]): void;
  }>();

  function onSelect(type: 'all' | 'none') {
    switch (type) {
      case 'all':
        emits('update:selected', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        break;
      case 'none':
        emits('update:selected', []);
        break;
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .flex .ite-toggle-button {
    flex: 1 1 20px;
  }
</style>
