<template>
  <div>
    <SpaceWrapper>
      <Rocket :hyperspeed="isHyperspeed"/>
      <NuxtPage />
    </SpaceWrapper> 
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';

const route = useRoute();
const { isHyperspeed } = useHyperspeed();

watch(route, () => {
  // Example: set theme color on each route change
  document.documentElement.style.setProperty('--rocket-color', route.path.includes('mythictrack') ? 'var(--color-indigo-500)' : 'var(--color-teal-500)');
});
</script>

<style>
.page-enter-active {
  transition: all 1.33s ease-in-out;
}
.page-leave-active {
  transition: all 1.25s ease-in-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-1200px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(1200px);
}
</style>