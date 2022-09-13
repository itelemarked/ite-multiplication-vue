<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div :class="sizeClass">
    <ion-app>
      <ion-router-outlet />
    </ion-app>
  </div>
</template>

<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import { mediaService } from './services/MediaService';
  const sizeClass = mediaService.cssClass
</script>

<style></style>
