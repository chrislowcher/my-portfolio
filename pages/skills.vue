<template>
    <div class="z-20 px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-cyan-50/5 px-3 py-2 text-md font-semibold text-cyan-400 shadow-xs hover:bg-cyan-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        
        <div>
          <SkillsShowcase />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-cyan-500)');
});

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

</script>