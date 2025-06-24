<template>
  <div>
    <SpaceWrapper ref="spaceWrapper">
      <Rocket />
      <MarketingStats />
      <ProjectsShowcase @project-clicked="onPageChanged" />
      <Skills />
    </SpaceWrapper> 
    <Footer />
  </div>
</template>

<script setup lang="ts">

const spaceWrapper = ref();

const onPageChanged = () => {
  spaceWrapper.value.triggerHyperspeed();
}

</script>