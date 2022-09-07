<template>
  <ion-page class="training-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Training</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-grid class="ion-no-padding">
        <ion-row>
          <ion-col size-xs="12" offset-md="1" size-md="10" class="flex ion-align-items-center">
            <span class="grow">
              Select bases:
            </span>
            <span>
              <ion-button size="small" fill="outline" @click="selectedBases=[1,2,3,4,5,6,7,8,9,10,11,12]">All</ion-button>
              <ion-button size="small" fill="outline" @click="selectedBases=[]">None</ion-button>
            </span>
          </ion-col>
          <ion-col size-xs="12" offset-md="1" size-md="5" class="flex ion-no-padding">
            <template v-for="n in 6">
              <ToggleButton v-model:checked="selectedBases" :value="n">{{ n }}</ToggleButton>
            </template>
          </ion-col>
          <ion-col size-xs="12" size-md="5" class="flex ion-no-padding">
            <template v-for="n in 6">
              <ToggleButton v-model:checked="selectedBases" :value="n+6">{{ n+6 }}</ToggleButton>
            </template>
          </ion-col>
        </ion-row>

        <ion-row class="ion-padding-top">
          <ion-col size-xs="12" offset-md="1" size-md="10">
            <!-- **** page navigation **** -->
            <ion-button expand="block" size="large" fill="outline" :disabled="btnDisabled" routerLink="/training/progress">
              START
              <ion-icon slot="start" name="caret-forward-circle"></ion-icon>
            </ion-button>
            <!-- **** modal navigation **** -->
            <!-- <ion-button expand="block" size="large" fill="outline" :disabled="btnDisabled" @click="openModal()">
              START
              <ion-icon slot="start" name="caret-forward-circle"></ion-icon>
            </ion-button> -->
          </ion-col>
        </ion-row>
      </ion-grid>
      
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
    IonButtons,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    modalController,
  } from '@ionic/vue';
  import { addIcons } from 'ionicons';
  import { caretForwardCircleOutline } from 'ionicons/icons';
  import { ToggleButton } from '@/app/components';
  import { computed, ref } from 'vue';
  import TrainingProgressModal from './TrainingProgressModal.vue';

  addIcons({
    'caret-forward-circle': caretForwardCircleOutline
  });

  const selectedBases = ref([1,3]);

  const btnDisabled = computed(() => selectedBases.value.length === 0);

  async function openModal() {
    const modal = await modalController.create({
      component: TrainingProgressModal,
    });
    modal.present();

    // const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
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
