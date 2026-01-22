<template>
    <div class="z-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-red-50/5 px-3 py-2 text-md font-semibold text-red-400 shadow-xs hover:bg-red-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Youtube</p>
                    <h2 class="text-base/8 font-semibold text-red-500">where I post embarassing content</h2>
                    <p class="mt-6 text-lg/8 text-gray-300"> I have filmed some cool stuff.</p>
                </div>
                <div class="mt-24">
                    <MarketingStats :stats="stats" />
                </div>  
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';
import type { Stat } from '~/models/stat';

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-red-500)');
});

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const stats: Stat[] = [
  { id: 1, description: 'Downloads', data: 2300, afterDetail: '+' },
  { id: 2, description: 'Mod Views', data: 5500, afterDetail: '+' },
  { id: 3, description: 'Endorsments', data: 60, afterDetail: '+' },
  { id: 4, description: 'Donation points earned for charity', data: 2400, afterDetail: '+' },
]
</script>