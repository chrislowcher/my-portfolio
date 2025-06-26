<template>
    <span :class="`inline-flex items-center rounded-full bg-white/5 backdrop-blur-xs px-2 py-1 text-xs font-medium text-${color}-400 ring-1 ring-gray-500/10 ring-inset`">
        <slot />
    </span>
</template>

<script setup lang="ts">
defineProps<{
    color: string;
}>();
</script>