<template>
    <div class="relative isolate py-12 sm:py-24">
        <div class="relative isolate overflow-hidden pb-4 sm:pb-8 fade-in-down-sm ani-delay-700">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">Projects & Passions</p>
                    <h2 class="text-base/8 font-semibold text-teal-500">and another, and another, and another</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">I have always felt the burning desire to be creating. I am forever experimenting with new ideas and looking for opportunities to learn new things. Here you can explore some of my noteworthy creative projects.</p>
                </div>
            </div>
        </div>
        <div class="relative mx-auto max-w-7xl fade-in-down-sm ani-delay-900 px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-3 mb-6">
                <div class="overflow-hidden group duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-indigo-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/mythictrack')">
                    <p class="duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-indigo-500">Mythic Track</p>
                    <ChartPieIcon class="duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-indigo-500"/>
                </div>
                <div class="group duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-red-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/youtube')">
                    <p class="duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-red-500">Youtube Channels</p>
                    <VideoCameraIcon class="duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-red-500"/>
                </div>
                <div class="group duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-cyber-yellow-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/cyberpunkmods')">
                    <p class="duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-cyber-yellow-500">Video Game Mods</p>
                    <WrenchScrewdriverIcon class="duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-cyber-yellow-500"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { ChartPieIcon, VideoCameraIcon, WrenchScrewdriverIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goToRoute = (route: string) => {
    triggerHyperspeed();
    router.push(route);
}

</script>
