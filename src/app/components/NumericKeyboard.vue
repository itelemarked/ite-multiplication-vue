<template>
  <div class="ite-numeric-keyboard">
    <div class="keyboard-background">
      <table class="keyboard-pad">
        <tr>
          <td @click="updateValueRef(1)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">1</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(2)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">2</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(3)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">3</ion-button>
            </div>
          </td>
          <td rowspan="2" @click="updateValueRef(null)">
            <div class="key key-color-clear">
              <!--eslint-disable-next-line vue/no-deprecated-slot-attribute -->
              <ion-button class="btn-fill" slot="icon-only" color="danger">
                <ion-icon name="close-outline"></ion-icon>
              </ion-button>
            </div>
          </td>
        </tr>
        <tr>
          <td @click="updateValueRef(4)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">4</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(5)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">5</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(6)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">6</ion-button>
            </div>
          </td>
        </tr>
        <tr>
          <td @click="updateValueRef(7)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">7</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(8)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">8</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(9)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">9</ion-button>
            </div>
          </td>
          <td rowspan="2" @click="validateValueRef()">
            <div class="key key-color-ok">
              <!--eslint-disable-next-line vue/no-deprecated-slot-attribute -->
              <ion-button class="btn-fill" slot="icon-only" color="success">
                <ion-icon name="checkmark-outline"></ion-icon>
              </ion-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">+/-</ion-button>
            </div>
          </td>
          <td @click="updateValueRef(0)">
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">0</ion-button>
            </div>
          </td>
          <td>
            <div class="key key-color-neutral">
              <ion-button class="btn-clear" fill="outline">.</ion-button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';

  const props = defineProps<{
    modelValue: number | null;
  }>();

  const emits = defineEmits([
    'update:modelValue' /** (e: number | null) => void */,
    'validate' /** (e: number | null) => void */,
  ]);

  function updateValueRef(nb: number | null) {
    let newVal = null;
    if (nb === null) {
      newVal = null;
    } else if (props.modelValue === null) {
      newVal = nb;
    } else {
      newVal = +(props.modelValue?.toString() + nb?.toString());
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

  .key .btn-clear {
    --border-color: transparent;
    --border-radius: 0;
    font-size: inherit;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .key .btn-fill {
    --border-color: transparent;
    --border-radius: 0;
    font-size: inherit;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  td {
    border: 1px solid var(--background-color);
    width: 25%;
    height: 2.5em;
  }

  .size-md .numeric-keyboard {
    font-size: 32px;
  }

  .size-md .keyboard-background {
    padding: 5px 0;
  }

  .size-md .key {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    border-radius: 5px;
    box-shadow: 1px 1px 5px gray;
  }

  .size-md td {
    border: none;
  }

  /* @media only screen and (min-width: 540px) {
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
  } */
</style>
