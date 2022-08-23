<template>
  <h1>Hellooooo {{name}}!</h1>

  <!-- <ToggleButton :checked="check" @checkedChange="onCheckedChange"></ToggleButton> -->
  <!-- <ToggleButton v-model:checked="check"/>
  <div>checked is: {{check}}</div> -->

  <!-- <CheckButton>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  </CheckButton>
  <CheckButton>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  </CheckButton>
  <CheckButton>
    <input type="checkbox" id="jenny" value="Jenny" v-model="checkedNames" />
  </CheckButton>
  <div>checkboxNames are: {{checkedNames}}</div> -->

  <BasesSelect :bases="bases" v-model:selected="selectedBases"/>
  <div>selected bases in App: {{selectedBases}}</div>


</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ToggleButton from './training/ToggleButton.vue'
  import CheckButton from './training/CheckButton.vue'
  import BasesSelect from './training/BasesSelect.vue'


  const name = ref('Bob')
  const check = ref<boolean>(true)
  const checkedNames = ref([])
  const bases = ref([1,2,3,4,5,6])
  const selectedBases = ref([1,2])

  function onChange(val: number[]) {
    selectedBases.value = val;
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

