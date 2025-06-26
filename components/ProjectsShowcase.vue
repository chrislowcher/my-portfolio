<template>
    <div class="relative isolate py-24 sm:py-32">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-6">
                <div class="group transition-all duration-200 ease-in-out rounded-xl bg-white/5 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/mythictrack')">

                    <p class="p-6 text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl">Mythic Track</p>

                    <!-- <img class="transition-all duration-200 p-[2px] backdrop-blur-xs opacity-70 rounded-b-xl group-hover:opacity-90 " src="~/assets/images/MT_Branding_720.png" alt="" /> -->
                </div>
                <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/mythictrack')">
                    <p class="text-xl font-semibold tracking-tight text-pretty text-white sm:text-xl">Rocket League</p>
                </div>
                <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:bg-white/9 hover:cursor-pointer" @click="goToRoute('/cyberpunkmods')">
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

const goToRoute = (route: string) => {
    triggerHyperspeed();
    router.push(route);
}

</script>
