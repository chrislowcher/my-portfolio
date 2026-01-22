<template>
  <div class="relative isolate py-24 sm:py-32">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10" aria-hidden="true">
        
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl fade-in-down-sm ani-delay-500">
        <h2 class="text-2xl font-semibold text-teal-400">Chris Lowcher</h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">An Experienced Full-Stack Software Engineer</p>
        <p class="mt-6 text-3xl text-slate-200 hidden sm:block">
          <span class="mr-2">who dabbles in</span>
          <ClientOnly>
            <Transition name="slide-up" mode="out-in">
              <span :key="currentSkill" class="text-teal-300 inline-block italic">
                {{ currentSkill }}
              </span>
            </Transition>
          </ClientOnly>
        </p>
        <p class="mt-6 text-3xl text-slate-200 sm:hidden">
          <span class="mr-2">who dabbles in</span>
          <br class="block sm:hidden" />
          <span class="block sm:inline-block h-[36px] sm:h-auto ">
            <ClientOnly>
              <Transition name="slide-up" mode="out-in">
                <span :key="currentSkill" class="block sm:inline-block text-teal-300 italic whitespace-nowrap">
                  {{ currentSkill }}
                </span>
              </Transition>
            </ClientOnly>
          </span>
        </p>
        
        <div class="mt-10 flex items-center gap-x-6">
            <a href="https://www.linkedin.com/in/christopher-lowcher/" target="_blank" class="transition duration-200 ease-in-out rounded-md bg-teal-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus-visible:outline-teal-500">Get in touch</a>
            <a v-on:click="goToRoute('skills')" class="text-lg/6 font-semibold text-gray-900 dark:text-white cursor-pointer">See all skills <span aria-hidden="true">→</span></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();
const skillIndex = ref(0);

const currentSkill = computed(() => {
  return skills[skillIndex.value];
});

const skills = [
  'Graphic Design',
  'Video Game Modding',
  'Photography',
  'Web Design',
  'Video Editing',
  'Mobile Development',
];

let intervalId: any = null;

onMounted(() => {
  intervalId = setInterval(() => {
    skillIndex.value = (skillIndex.value + 1) % skills.length
  }, 4500)
});

onUnmounted(() => {
  clearInterval(intervalId)
});

const goToRoute = (route: string) => {
    triggerHyperspeed();
    router.push(route);
}
</script>


<style scoped>
/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-block;
  position: absolute;
}

.slide-up-enter-from {
  transform: translateY(4px);
  opacity: 0;
}
.slide-up-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}
</style>