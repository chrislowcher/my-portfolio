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
});

const getColorFromRoute = computed(() => {
  if(route.path.includes('mythictrack')) {
    return 'indigo)';
  }
  if(route.path.includes('cyberpunk')) {
    return 'cyber-yellow)';
  }
  if(route.path.includes('photography')) {
    return 'emerald)';
  }
  if(route.path.includes('design')) {
    return 'amber)';
  }
  if(route.path.includes('youtube')) {
    return 'red)';
  }
  if(route.path.includes('skills')) {
    return 'cyan)';
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