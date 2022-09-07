<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ion-page class="testing-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>@Testing</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :forceOverscroll="false">
      <div class="flex-column">
        <template v-if="completed">
          <div class="grow-1 ion-padding-top margin-auto">TEST COMPLETED!!</div>
        </template>
        <template v-else>
          <MultipleInput
            class="grow-1 ion-padding-top margin-auto"
            :multiple="currentMultiple"
            :value="keyboardValue"
          ></MultipleInput>
        </template>

        <NumericKeyboard
          v-model="keyboardValue"
          @validate="onKeyboardValidate($event)"
        ></NumericKeyboard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  } from '@ionic/vue';
  import NumericKeyboard from './components/NumericKeyboard.vue';
  import MultipleInput from './components/MultipleInput.vue';
  import { addIcons } from 'ionicons';
  import { checkmarkOutline, closeOutline } from 'ionicons/icons';
  import { computed, ref, type Ref } from 'vue';
  import { Multiple, Test } from '../models';

  addIcons({
    'checkmark-outline': checkmarkOutline,
    'close-outline': closeOutline,
  });

  let keyboardValue: Ref<number | null>;
  let currentTest: Test;
  let currentMultiple: Ref<Multiple | null>;

  const completed = computed(() => currentMultiple.value === null);


  (function onCreate() {
    keyboardValue = ref(null);
    currentTest = new Test(1);
    currentTest.setMultiplesByBases([2]);
    currentMultiple = ref(currentTest.getRandomUncompleteMultiple());
  }());

  function onKeyboardValidate(val: number | null) {
    if (completed.value) return;

    if (currentMultiple.value!.result === val) {
      // success
      // do something onSuccess()
      currentMultiple.value?.addSuccess();
      console.log('success');
    } else {
      // fail
      // do something onFail()
      currentMultiple.value?.addFail();
      console.log('failed');
    }

    currentMultiple.value = currentTest.getRandomUncompleteMultiple();
    keyboardValue.value = null;
  }
</script>

<style scoped>

  .margin-auto {
    margin: auto;
  }

</style>
