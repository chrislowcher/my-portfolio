<template>
    <div>
        <MarketingStats />
        <ProjectsShowcase />
        <!-- <Skills /> -->
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-teal-500)');
});
</script>