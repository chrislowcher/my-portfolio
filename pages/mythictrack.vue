<template>
    <div class="z-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-50/5 px-3 py-2 text-md font-semibold text-indigo-400 shadow-xs hover:bg-indigo-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-xl">
                    <div class="flex items-end">
                        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Mythic Track</p>
                        <div v-on:click="routeToMt">
                            <ArrowTopRightOnSquareIcon class="transition duration-200 ease-in-out ml-4 size-8 text-indigo-500 hover:text-indigo-400 active:text-indigo-300 cursor-pointer" />
                        </div>
                    </div>
                    <h2 class="text-base/8 font-semibold text-indigo-500">Track your MTG Commander games</h2>
                    <p class="mt-6 text-lg/8 text-gray-200">Mythic Track is a stat tracking platform for the popular card game <i>Magic: the Gathering</i> that's used by thousands across the globe. </p>
                    <div class="flex gap-1 mt-2">
                        <UiBadge color="indigo">C#</UiBadge>
                        <UiBadge color="indigo">Blazor</UiBadge>
                        <UiBadge color="indigo">postgres</UiBadge>
                        <UiBadge color="indigo">Azure</UiBadge>
                        <UiBadge color="indigo">AWS</UiBadge>
                    </div>
                </div>
                <div class="mt-24">
                    <MarketingStats :stats="stats" />
                </div>
                <div v-if="showContent" class="mt-24 fade-in-down-sm ani-delay-1100">
                    <ClientOnly>
                        <div class="bg-white/5 p-6 rounded-2xl ring-1 ring-white/10 ring-inset backdrop-blur-xs [mask-image:linear-gradient(to_bottom,black_86%,transparent_96%)]">
                            <div class="py-8 sm:py-12">
                                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                        <p class="text-base/7 font-semibold text-indigo-500">from the kitchen table</p>
                                        <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">To Commander Players Across the Globe</h1>
                                        <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-200 lg:max-w-none lg:grid-cols-2">
                                        <div>
                                            <p>The idea for Mythic Track spawned from a joke with friends. After being accused of using loaded dice, we decided to start tracking our Commander nights in a spreadsheet. After a few times tracking in the spreadsheet, my head was exploding with ideas. I had to start coding this idea. </p>
                                            <p class="mt-8">Here we are, three years later and going strong. Our community continues to thrive as we have established ourselves as a major player in the MTG stats space. We have integrated our service with 6 of the major MTG platforms that provide card data, deck information, discord features, and more.</p>
                                            <p class="mt-8">I remain the solo developer, graphic designer, CEO, Accountant, QA Tester and Community Manager for the project. </p>
                                        </div>
                                        <div>
                                            <p>The tech behind Mythic Track is a little off-beat. I wanted to do something new, I wanted to learn more. C# and Typescript are my best languages, so I knew the backend would be .NET - it's fast and efficient for me to spin up C# APIs.</p>
                                            <p class="mt-8">The frontend is Blazor. A Microsoft technology that I had been following for a while. Around 2023 it had finally gathered enough credibility to use for something of this scale. Want my opinion on Blazor? Glad you asked. I'll stick to React or Vue for future projects but don't get me wrong... it is very cool. </p>
                                            <p class="mt-8">Mythic Track is hosted on Azure, with some services hosted on AWS for cost reasons. We have a complete build pipeline in gtihub actions for automated deployments, we have test environments, and are able to run the site without a financial loss thanks to dozens of loyal patrons.</p>
                                        </div>
                                        </div>
                                        <div class="mt-10 flex items-center gap-4">
                                            <a href="https://www.mythictrack.com/" target="_blank" class="transition duration-200 ease-in-out rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Start Tracking</a>
                                            <a href="https://discord.com/invite/9p26q7eduk" class="transition duration-200 ease-in-out text-md/6 font-semibold text-white cursor-pointer">Join our Discord Community <span aria-hidden="true">→</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative overflow-hidden pt-16 lg:pt-20">
                                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div class="flex justify-center">
                                            <img class="mb-[-12%] rounded-xl shadow-2xl ring-2 ring-gray-900/10 shadow-xl ring-white/10" :src="mtImg" alt="Mythic Track Site" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>    
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { ArrowTopRightOnSquareIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';
import mtImg from '~/assets/images/mt.png';
import type { Stat } from '~/models/stat';
onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-indigo-500)');
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

const routeToMt = async () => {
    await navigateTo('https://www.mythictrack.com/', {
        external: true,
        open: {
            target: '_blank',
        },
    });
}

const stats: Stat[] = [
  { id: 1, description: 'Games tracked on the platform', data: 30000, afterDetail: '+' },
  { id: 2, description: 'Unique weekly visitors', data: 10000, afterDetail: '+' },
  { id: 3, description: 'MTG site integrations', data: 6 },
  { id: 4, description: 'Discord communities using SpellBot', data: 50, afterDetail: '+' },
]
</script>