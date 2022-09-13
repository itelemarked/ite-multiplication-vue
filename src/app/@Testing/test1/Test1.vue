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
      <!-- <p class="paragraph">some paragraph</p> -->
    </template>

    <NumericKeyboard
      v-model="keyboardValue"
      @validate="onKeyboardValidate($event)"
    ></NumericKeyboard>
  </div>
</template>

<script setup lang="ts">
  import NumericKeyboard from './NumericKeyboard.vue';
  import MultipleInput from './MultipleInput.vue';
  import { addIcons } from 'ionicons';
  import { checkmarkOutline, closeOutline } from 'ionicons/icons';
  import { computed, onMounted, ref, type Ref } from 'vue';
  import { Multiple, Test } from '../../models';

  addIcons({
    'checkmark-outline': checkmarkOutline,
    'close-outline': closeOutline,
  });

  let keyboardValue: Ref<number | null> = ref(23);

  let currentTest: Test = new Test(1);
  currentTest.setMultiplesByBases([2]);

  let currentMultiple: Ref<Multiple | null> = ref(currentTest.getRandomUncompleteMultiple());

  const completed = computed(() => currentMultiple.value === null);


  onMounted(() => {})

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
  .flex-column {
    --media-sm: 200px;
    --color: red;
  }
  
  .margin-auto {
    margin: auto;
  }

  p {
    color: var(--color)
  }

  @media screen and (max-width: var(--media-sm)) {
    p {
      background-color: cyan;
    }
  }
</style>
