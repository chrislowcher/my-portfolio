<template>
    <div class="relative isolate py-24 sm:py-32">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-6">
                <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer" @click="clicked">
                    <p class="text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl">Mythic Track</p>
                </div>
                <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer">
                    <p class="text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl">Rocket League</p>
                </div>
                <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer">
                    <p class="text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl">Cyberpunk 2077 Mods</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { useRouter } from 'vue-router';

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const clicked = () => {
    triggerHyperspeed();
    router.push('/mythictrack');
}
</script>
