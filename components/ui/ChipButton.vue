<template>
    <button
        type="button" 
        :class="allClasses"
        @click="clicked">
        <CheckIcon v-if="isSelected" class="-mr-0.5 size-5" />
        <slot />
    </button>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid';

const emit = defineEmits<{
  (e: 'toggled', selected: boolean): void
}>();

const isSelected = ref();

const allClasses = computed(() => {
    const baseClass = "rounded-full transition-all duration-100 ease-in px-3.5 py-2 text-sm font-semibold shadow-xs inline-flex items-center gap-x-2";
    const colorClass = isSelected.value ? "text-gray-100 bg-cyan-600" : "ring-1 ring-inset text-gray-100 ring-gray-300";
    const hoverClass = isSelected.value ? "hover:bg-cyan-500 hover:cursor-pointer" : "hover:bg-white/9 hover:cursor-pointer hover:ring-2";
    const activeClass = isSelected.value ? "active:bg-cyan-400" : "active:ring-cyan-400 active:text-cyan-400";

    return `${baseClass} ${colorClass} ${hoverClass} ${activeClass}`;
});

const clicked = () => {
    isSelected.value = !isSelected.value;
    emit('toggled', isSelected.value);
}
</script>