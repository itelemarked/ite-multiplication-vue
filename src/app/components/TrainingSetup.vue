<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col class="ion-align-self-center">
        <span>Select bases:</span>
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
          @update:checked="emits('update:selectedBases', $event)"
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
          @update:checked="emits('update:selectedBases', $event)"
          :value="n + 6"
          class="grow-1"
          >{{ n + 6 }}</ToggleButton
        >
      </ion-col>
    </ion-row>

    <ion-row class="ion-padding-top">
      <ion-col>
        <ion-button
          expand="block"
          size="large"
          fill="outline"
          :disabled="buttonDisabled"
          @click="onStart()"
        >
          START
          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <ion-icon slot="start" name="caret-forward-circle"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>

</template>

<script setup lang="ts">
  import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/vue';
  import { computed, ref } from 'vue';
  import { ToggleButton } from '@/app/components';
  import { addIcons } from 'ionicons';
  import { caretForwardCircle } from 'ionicons/icons';

  addIcons({
    'caret-forward-circle': caretForwardCircle,
  });

  const props = withDefaults(
    defineProps<{
      selectedBases?: number[];
    }>(),
    {
      selectedBases: () => [],
    }
  );

  const emits = defineEmits<{
    (e: 'start'): void;
    (e: 'update:selectedBases', val: number[]): void;
  }>();

  const buttonDisabled = computed<boolean>(() =>
    props.selectedBases.length === 0 ? true : false
  );

  function onSelect(type: 'all' | 'none') {
    switch (type) {
      case 'all':
        emits('update:selectedBases', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        break;
      case 'none':
        emits('update:selectedBases', []);
        break;
    }
  }

  function onStart() {
    emits('start');
  }
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .grow {
    flex-grow: 1;
  }

  .flex .ite-toggle-button {
    flex: 1 1 20px;
  }
</style>
