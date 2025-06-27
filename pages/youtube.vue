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
                <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-xs">
                    <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
                    <dt class="text-sm/6 font-semibold text-gray-300">{{ stat.name }}</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import { useHyperspeed } from '@/composables/useHyperspeed';
import { useRouter } from 'vue-router';

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-red-500)');
});

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const stats = [
  { id: 1, name: 'Downloads', value: '2,300+' },
  { id: 2, name: 'Mod Views', value: '5,500+' },
  { id: 3, name: 'Endorsments', value: '60+' },
  { id: 4, name: 'Donation points earned for charity', value: '2,400+' },
]
</script>