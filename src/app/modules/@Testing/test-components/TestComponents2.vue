<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex-column">
    <template v-if="completed">
      <div class="grow-1 ion-padding-top margin-auto">TEST COMPLETED!!</div>
    </template>
    <template v-else>
      <MultipleInput
        ref="first"
        class="grow-1 ion-padding-top margin-auto"
        :multiple="currentMultiple"
        :value="keyboardValue"
      ></MultipleInput>

      <!-- Test scss!! -->
      <div>
        <div class="responsive">
          Expand greater than size sm (576px or more) and the text becomes red!
        </div>
      </div>
      <!-- ----------- -->
    </template>

    <NumericKeyboard
      v-model="keyboardValue"
      @validate="onKeyboardValidate($event)"
    ></NumericKeyboard>
  </div>
</template>

<script setup lang="ts">
  import NumericKeyboard from '@/app/components/NumericKeyboard.vue';
  import MultipleInput from './MultipleInput.vue';
  import { addIcons } from 'ionicons';
  import { checkmarkOutline, closeOutline } from 'ionicons/icons';
  import { computed, ref, type Ref } from 'vue';
  import { Multiple, Test } from '@/app/models';

  addIcons({
    'checkmark-outline': checkmarkOutline,
    'close-outline': closeOutline,
  });

  const keyboardValue: Ref<number | null> = ref(23);

  const currentTest: Test = new Test(1);
  currentTest.setMultiplesByBases([2]);

  const currentMultiple: Ref<Multiple | null> = ref(
    currentTest.getRandomUncompleteMultiple()
  );

  const completed = computed(() => currentMultiple.value === null);

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

<style scoped lang="scss">
  .margin-auto {
    margin: auto;
  }

  @import '@/css/ite-media.scss';

  @media screen and (min-width: $width-size-sm) {
    .responsive {
      color: red;
    }
  }
</style>
