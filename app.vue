<template>
  <div>
    <SpaceWrapper>
      <Rocket />
      <NuxtPage />
    </SpaceWrapper> 
    <Footer />
  </div>
</template>

<script setup lang="ts">

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