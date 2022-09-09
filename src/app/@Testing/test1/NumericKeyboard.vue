<template>
  <div class="ite-numeric-keyboard">
    <div class="keyboard-background">

    <table class="keyboard-pad">
      <tr>
        <td @click="updateValueRef(1)">
          <div class="key key-color-neutral">1</div>
        </td>
        <td @click="updateValueRef(2)">
          <div class="key key-color-neutral">2</div>
        </td>
        <td @click="updateValueRef(3)">
          <div class="key key-color-neutral">3</div>
        </td>
        <td rowspan="2" @click="updateValueRef(null)">
          <div class="key key-color-clear icon">
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td @click="updateValueRef(4)">
          <div class="key key-color-neutral">4</div>
        </td>
        <td @click="updateValueRef(5)">
          <div class="key key-color-neutral">5</div>
        </td>
        <td @click="updateValueRef(6)">
          <div class="key key-color-neutral">6</div>
        </td>
      </tr>
      <tr>
        <td @click="updateValueRef(7)">
          <div class="key key-color-neutral">7</div>
        </td>
        <td @click="updateValueRef(8)">
          <div class="key key-color-neutral">8</div>
        </td>
        <td @click="updateValueRef(9)">
          <div class="key key-color-neutral">9</div>
        </td>
        <td rowspan="2" @click="validateValueRef()">
          <div class="key key-color-ok icon">
            <ion-icon name="checkmark-outline"></ion-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="key key-color-neutral">+/-</div>
        </td>
        <td @click="updateValueRef(0)">
          <div class="key key-color-neutral">0</div>
        </td>
        <td>
          <div class="key key-color-neutral">.</div>
        </td>
      </tr>
    </table>

    </div>
  </div>
</template>

<script setup lang="ts">
  import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/vue';
  import { addIcons } from 'ionicons';
  import { closeOutline } from 'ionicons/icons';
  import { ref, watch, type Ref } from 'vue';


  addIcons({
    'close-outline': closeOutline,
  });

  const props = defineProps<{
    modelValue: number | null,
  }>()

  const emits = defineEmits([
    'update:modelValue', /** (e: number | null) => void */
    'validate'           /** (e: number | null) => void */
  ])

  function updateValueRef(nb: number | null) {
    let newVal = null;
    if (nb === null) {
      newVal = null;
    } else if (props.modelValue === null) {
      newVal = nb;
    } else {
      newVal = +(props.modelValue!.toString() + nb!.toString())
    }
    emits('update:modelValue', newVal);
  }

  function validateValueRef() {
    emits('validate', props.modelValue);
  }
</script>

<style scoped>
  .ite-numeric-keyboard {
    --background-color: rgb(230, 230, 230);
    --key-color-neutral: white;
  }

  .ite-numeric-keyboard {
    font-size: 24px;
  }

  .keyboard-background {
    background-color: var(--background-color);
  }

  .keyboard-pad {
    width: 100%;
    max-width: 540px;
    margin: auto;
  }

  .key-color-neutral {
    background-color: var(--key-color-neutral);
  }

  .key-color-ok {
    background-color: var(--ion-color-success);
    color: var(--ion-color-success-contrast);
  }

  .key-color-clear {
    background-color: var(--ion-color-danger);
    color: var(--ion-color-danger-contrast);
  }

  .icon {
    font-size: 1.5em;
  }

  .key {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  td {
    border: 1px solid var(--background-color);
    width: 25%;
    height: 2.5em;
  }

  @media only screen and (min-width: 540px) {
    .numeric-keyboard {
      font-size: 32px;
    }

    .keyboard-background {
      padding: 5px 0;
    }

    .key {
      width: calc(100% - 5px);
      height: calc(100% - 5px);
      border-radius: 5px;
      box-shadow: 1px 1px 5px gray;
    }

    td {
      border: none;
    }
  }
</style>
