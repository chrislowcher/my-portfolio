<template>
    <div class="relative isolate py-24 sm:py-32">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-3 mb-6">
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-indigo-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/mythictrack')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-indigo-500">Mythic Track</p>
                    <ChartPieIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-indigo-500"/>
                </div>
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-red-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/youtube')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-red-500">Youtube Channels</p>
                    <VideoCameraIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-red-500"/>
                </div>
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-cyber-yellow-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/cyberpunkmods')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-cyber-yellow-500">Cyberpunk 2077 Mods</p>
                    <WrenchScrewdriverIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-cyber-yellow-500"/>
                </div>
            </div>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-3">
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-emerald-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/photography')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-emerald-500">Photography</p>
                    <CameraIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-emerald-500"/>
                </div>
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-amber-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/design')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-amber-500">Design</p>
                    <PaintBrushIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-amber-500"/>
                </div>
                <div class="group transition duration-200 ease-in-out flex justify-between gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-cyan-500 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/skills')">
                    <p class="transition duration-200 ease-in-out text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl group-hover:text-cyan-500">View All Skills</p>
                    <CodeBracketIcon class="transition duration-200 ease-in-out -ml-0.5 size-6 text-white group-hover:text-cyan-500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { WrenchScrewdriverIcon, CameraIcon, PaintBrushIcon, ChartPieIcon, CodeBracketIcon, VideoCameraIcon } from '@heroicons/vue/20/solid'
import { useHyperspeed } from '@/composables/useHyperspeed';
import { useRouter } from 'vue-router';

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goToRoute = (route: string) => {
    triggerHyperspeed();
    router.push(route);
}

</script>
