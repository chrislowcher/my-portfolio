<template>
    <div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-50/5 px-3 py-2 text-md font-semibold text-indigo-400 shadow-xs hover:bg-indigo-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Mythic Track</p>
                    <h2 class="text-base/8 font-semibold text-indigo-400">Track your MTG Commander games</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">Mythic Track is a stat tracking platform for the popular card game Magic: the Gathering. </p>
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

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const stats = [
  { id: 1, name: 'Games tracked on the platform', value: '15,000+' },
  { id: 2, name: 'Commanders played', value: '2,500+' },
  { id: 3, name: 'Unique weekly visitors', value: '10,000+' },
  { id: 4, name: 'Discord communited tracking with SpellBot', value: '10+' },
]
</script>