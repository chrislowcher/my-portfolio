<template>
    <div class="z-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-cyber-yellow-50/5 px-3 py-2 text-md font-semibold text-cyber-yellow-400 shadow-xs hover:bg-cyber-yellow-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Video Game Mods</p>
                    <h2 class="text-base/8 font-semibold text-cyber-yellow-500">Hosted on Nexus Mods</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">As an active member of the Cyberpunk 2077 modding community I have created multiple of my own mods, with two of them getting a fully featured public release. I also help other mod authors test their mods and help players with mod config on the official Discord and Reddit. </p>
                    <div class="flex gap-1 mt-2">
                        <UiBadge color="cyber-yellow">Lua</UiBadge>
                    </div>
                </div>
                <div class="mt-24">
                    <MarketingStats :stats="stats" />
                </div>
                <div v-if="showContent" class="mt-24 fade-in-down-sm ani-delay-1100">
                    <div class="py-8 sm:py-12 backdrop-blur-xs rounded-2xl ring-1 ring-white/10 ring-inset bg-white/5 [mask-image:linear-gradient(to_bottom,black_86%,transparent_96%)] overflow-hidden">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                <p class="text-base/7 font-semibold text-cyber-yellow-600 dark:text-cyber-yellow-500">expanding my horizons</p>
                                <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">Beyond Night City</h1>
                                <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2 dark:text-gray-300">
                                    <div>
                                        <p> I have been a gamer since as long as I can remember. It's the main reason I got into computers and coding in the first place. </p>
                                        <p class="mt-8">Somewhere along the my path through life, that dream got a little lost. I had always wanted to learn how to make mods, but every time I looked into it, I got overwhelmed and put it down.</p>
                                        <p class="mt-8"> For me, Cyberpunk 2077 is a masterpiece. After spending hundreds of hours in the game and downloading hundreds of mods, I decided it was time I learn to make my own. </p>
                                    </div>
                                    <div>
                                        <p> I had my first mod idea because I wanted to capture slomotion clips of my gameplay and create cinematic videos. I dived in and looked at the code for mods I had downloaded and taught myself Lua scripting the best I could. </p>
                                        <p class="mt-8"> For my first ever mod, it was a great success. A few thousand downloads and inclusion in a popular nexus mod collection. </p>
                                        <p class="mt-8"> My next mod was not as popular, even though I think it's even better! It is a weapon randomizer that selects a new random weapon when you get a kill, and it's entirely configurable through the game's native UI settings. To this day it is my favorite way to play the game.</p>
                                    </div>
                                </div>
                                <div class="mt-10 flex items-center gap-4">
                                    <a href="https://www.nexusmods.com/profile/clowch/mods" target="_blank" class="rounded-md bg-cyber-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-cyber-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-yellow-600 dark:bg-cyber-yellow-500 dark:hover:bg-cyber-yellow-400 dark:focus-visible:outline-cyber-yellow-500">Check out my mods</a>
                                    <a href="https://wiki.redmodding.org/cyberpunk-2077-modding" class="text-md/6 font-semibold text-gray-900 dark:text-white cursor-pointer">Learn more <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="relative overflow-hidden pt-16 lg:pt-20">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="flex justify-center">
                                    <img class="mb-[-12%] rounded-xl shadow-2xl ring-2 ring-gray-900/10 shadow-xl ring-white/10" :src="nexusImg" alt="Nexus Mods Site" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';
import nexusImg from '~/assets/images/slomopromo.png';
import type { Stat } from '~/models/stat';
onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-cyber-yellow-500)');
    setTimeout(() => {
        showContent.value = true;
    }, 1000)
});

const router = useRouter();
const showContent = ref(false);
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const stats: Stat[] = [
  { id: 1, description: 'Downloads', data: 3200, afterDetail: '+' },
  { id: 2, description: 'Mod Views', data: 22000, afterDetail: '+' },
  { id: 3, description: 'Endorsments', data: 70, afterDetail: '+' },
  { id: 4, description: 'Donation points earned for charity', data: 2800, afterDetail: '+' },
]
</script>