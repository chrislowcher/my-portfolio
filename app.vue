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
  document.documentElement.style.setProperty('--base-app-color', `var(--color-${getColorFromRoute}-500)`);
  document.documentElement.style.setProperty('--base-app-color-dark', `var(--color-${getColorFromRoute}-950)`);
});

const getColorFromRoute = computed(() => {
  if(route.path.includes('mythictrack')) {
    return 'indigo)';
  }
  if(route.path.includes('cyberpunk')) {
    return 'cyber-yellow)';
  }
  
  return 'teal)'
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