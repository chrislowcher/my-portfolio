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
                    <h2 class="text-base/8 font-semibold text-red-500">Where I post embarassing content</h2>
                    <p class="mt-6 text-lg/8 text-gray-300"> I have enjoyed making videos since I was a kid and it remains a hobby of mine to this day. My favorite vidoes to make are travel vlogs, but I will keep those private. Instead you can enjoy my pandemic adventure into the world of LEGO youtube. </p>
                    <div class="flex gap-1 mt-2">
                        <UiBadge color="red">Shotcut</UiBadge>
                        <UiBadge color="red">OBS</UiBadge>
                    </div>
                </div>
                <div class="mt-24">
                    <MarketingStats :stats="stats" />
                </div>
                <div v-if="showContent" class="mt-24 fade-in-down-sm ani-delay-1100">
                    <div class="py-8 sm:py-12 backdrop-blur-xs rounded-2xl bg-white/5 [mask-image:linear-gradient(to_bottom,black_86%,transparent_96%)] overflow-hidden">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                <p class="text-base/7 font-semibold text-red-600 dark:text-red-500">exploring a new world</p>
                                <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">Brick by Brick</h1>
                                <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2 dark:text-gray-300">
                                    <div>
                                        <p> Ok, we all remember 2020 right? We all maybe did some slightly embarassing stuff. We all certainly took up new hobby or rediscovered old ones. </p>
                                        <p class="mt-8"> For me, it was LEGO. Growing up I was obsessed with LEGO and I was constantly building new ideas, taking apart sets and making new creations.  </p>
                                        <p class="mt-8"> This Youtube channel and Instagram page represent my journey to figure out what works on Youtube, what kind of content people like to watch, and what content I like to make.  </p>
                                    </div>
                                    <div>
                                        <p> Something that I learned, was that the videos that took me the longest and were the most painstaking to film - timelapse videos, we're actually the least viewed. No one seemed to enjoy them and I hated making them after a while. </p>
                                        <p class="mt-8"> The videos that did the best were actually the ones I enjoyed making. I would poll my Instagram audience for what to try to make, and then just make it. It was fun while it lasted and as the world left the pandemic era, my youtube career faded out, but my love of LEGO has stayed the same. </p>
                                    </div>
                                </div>
                                <div class="mt-10 flex items-center gap-4">
                                    <a href="https://www.youtube.com/@clowchbricks2743" target="_blank" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500">Check out my videos</a>
                                    <a href="https://www.instagram.com/clowchbricks" class="text-md/6 font-semibold text-gray-900 dark:text-white cursor-pointer">More Content on Instagram <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="relative overflow-hidden pt-16 lg:pt-20">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="flex justify-center">
                                    <img class="mb-[-12%] rounded-xl shadow-2xl ring-2 ring-gray-900/10 shadow-xl ring-white/10" :src="cbImage" alt="Clowchbricks Youtube" />
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
import cbImage from '~/assets/images/cb.png';
import type { Stat } from '~/models/stat';

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-red-500)');
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
  { id: 0, description: 'Videos', data: 19 },
  { id: 1, description: 'Views', data: 12000, afterDetail: '+' },
  { id: 2, description: 'Minutes of Content', data: 98, },
  { id: 3, description: 'Custom LEGO Sets Made', data: 6, },
]
</script>