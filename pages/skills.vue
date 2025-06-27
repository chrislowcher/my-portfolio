<template>
    <div class="z-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-cyan-50/5 px-3 py-2 text-md font-semibold text-cyan-400 shadow-xs hover:bg-cyan-100/8 cursor-pointer backdrop-blur-xs" @click="goBack">
                <ChevronLeftIcon class="-ml-0.5 size-5" aria-hidden="true" />
                 Back 
            </button>
        </div>
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Skills</p>
                    <h2 class="text-base/8 font-semibold text-cyan-500">that pay the bills</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">Here are all of my skills related to digital technology and creativty. Outside of these listed skills, I am an avid golfer, skateboarder, and snowboarder. I also have some pretty sweet LEGO building skills.</p>
                </div>
            </div>
        </div>
        <div class="relative isolate overflow-hidden pb-12 sm:pb-16">
            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex items-center">
                    <UiChipButton @toggled="filterBackend">Backend</UiChipButton>
                    <UiChipButton @toggled="filterFrontend">Frontend</UiChipButton>
                    <UiChipButton @toggled="filterMobile">Mobile</UiChipButton>
                    <UiChipButton @toggled="filterDesign">Design</UiChipButton>
                    <UiChipButton @toggled="filterData">Data</UiChipButton>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-6">
                    <SkillGroup :items="filteredLanguages" title="Languages" :icon="CodeBracketIcon" />
                    <SkillGroup :items="filteredFrameworks" title="Frameworks" :icon="PuzzlePieceIcon" />
                    <SkillGroup :items="filteredTools" title="Tools" :icon="WrenchScrewdriverIcon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import { useHyperspeed } from '@/composables/useHyperspeed';
import { useRouter } from 'vue-router';
import { PuzzlePieceIcon, CodeBracketIcon, WrenchScrewdriverIcon } from '@heroicons/vue/20/solid'

const selectedTags = ref('');

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-cyan-500)');
});

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const tags = [
  { name: 'Backend', icon: '', tag: '#backend' },
  { name: 'Frontend', icon: '', tag: '#frontend' },
  { name: 'Mobile', icon: '', tag: '#mobile' },
  { name: 'Design', icon: '', tag: '#design' },
  { name: 'Data', icon: '', tag: '#data' },
];

const languages = [
  // Backend
  { type: 'Backend', name: 'C#', tags: '#backend #frontend #mobile' },
  { type: 'Backend', name: 'Lua', tags: '#backend' },
  { type: 'Backend', name: 'SQL', tags: '#backend #data' },

  // Frontend
  { type: 'Frontend', name: 'Typescript', tags: '#frontend #mobile' },
  { type: 'Frontend', name: 'Javascript', tags: '#frontend #mobile' },
  { type: 'Frontend', name: 'CSS', tags: '#frontend #mobile #design' },
  { type: 'Frontend', name: 'HTML', tags: '#frontend #mobile #design' },
];

const frameworks = [
  { type: 'Backend', name: 'ASP.NET Core', tags: '#backend' },
  { type: 'Backend', name: 'MVC', tags: '#backend' },
  { type: 'Backend', name: 'AWS', tags: '#backend' },
  { type: 'Backend', name: 'Azure', tags: '#backend' },
  { type: 'Backend', name: 'Postgres', tags: '#backend #data' },
  { type: 'Backend', name: 'SQL Server', tags: '#backend #data' },

  { type: 'Frontend', name: 'Vue', tags: '#frontend #mobile' },
  { type: 'Frontend', name: 'Nuxt', tags: '#frontend' },
  { type: 'Frontend', name: 'React', tags: '#frontend #mobile' },
  { type: 'Frontend', name: 'Blazor', tags: '#frontend #backend' },

  { type: 'Mobile', name: 'Ionic', tags: '#frontend #mobile' },
  { type: 'Mobile', name: 'Capacitor', tags: '#frontend #mobile' },
  { type: 'Mobile', name: 'Xamarin', tags: '#frontend #mobile' },

  { type: 'UI', name: 'Tailwind CSS', tags: '#frontend #design' },
  { type: 'UI', name: 'PrimeVue', tags: '#frontend #design' },
  { type: 'UI', name: 'Quasar', tags: '#frontend #design' },
  { type: 'UI', name: 'MudBlazor', tags: '#frontend #design' },
  { type: 'UI', name: 'Radzen', tags: '#frontend #design' }
];

const tools = [
  // IDEs & Code Editors
  { type: 'IDE', name: 'Visual Studio', tags: '#backend #frontend #data' },
  { type: 'IDE', name: 'Visual Studio Code', tags: '#frontend #mobile #design' },
  { type: 'IDE', name: 'Rider', tags: '#backend #frontend #data' },

  // Database Tools
  { type: 'DBA', name: 'pgAdmin', tags: '#backend #data' },
  { type: 'DBA', name: 'DBeaver', tags: '#backend #data' },
  { type: 'DBA', name: 'SSMS', tags: '#backend #data' },

  // Build Tools
  { type: 'Build', name: 'Vite', tags: '#frontend' },
  { type: 'Build', name: 'ESBuild', tags: '#frontend' },
  { type: 'Build', name: 'PostCSS', tags: '#frontend #design' },
  { type: 'Build', name: 'GitHub Actions', tags: '#backend' },

  // Dev Tools / Utilities
  { type: 'Dev', name: 'git', tags: '#frontend #backend #mobile #data #design' },
  { type: 'Dev', name: 'npm', tags: '#frontend #backend #mobile #data #design' },
  { type: 'Dev', name: 'Swagger', tags: '#backend' },

  // Testing Tools
  { type: 'Test', name: 'Cypress', tags: '#frontend' },
  { type: 'Test', name: 'NUnit', tags: '#backend' },

  // ORMs / Data Access
  { type: 'ORM', name: 'Entity Framework', tags: '#backend #data' },

  // Design Tools
  { type: 'Design', name: 'Figma', tags: '#frontend #design' },
  { type: 'Design', name: 'Storybook', tags: '#frontend #design' },

  // Hosting / Cloud
  { type: 'Cloud', name: 'Azure App Services', tags: '#backend #data' },
  { type: 'Cloud', name: 'Azure Static Web Apps', tags: '#frontend' },
  { type: 'Cloud', name: 'Firebase', tags: '#backend #data' },
  { type: 'Cloud', name: 'AWS SQS', tags: '#backend #data' },
  { type: 'Cloud', name: 'AWS RDS', tags: '#backend #data' },

  // Media Tools
  { type: 'Media', name: 'GIMP', tags: '#design' },
  { type: 'Media', name: 'Photoshop', tags: '#design' },
  { type: 'Media', name: 'OBS', tags: '#design' },
  { type: 'Media', name: 'Shotcut', tags: '#design' },
  { type: 'Media', name: 'iMovie', tags: '#design' },
];

watch(selectedTags, () => {
  console.log(selectedTags.value);
})

const filteredLanguages = computed(() => {
  if(selectedTags.value)
  {
    return languages.filter(x => x.tags.includes(selectedTags.value));
  }

  return languages;
});

const filteredFrameworks = computed(() => {
  if(selectedTags.value)
  {
    return frameworks.filter(x => x.tags.includes(selectedTags.value));
  }

  return frameworks;
});

const filteredTools = computed(() => {
  if(selectedTags.value)
  {
    return tools.filter(x => x.tags.includes(selectedTags.value));
  }

  return tools;
});

const filterBackend = (selected: boolean) => {
  selectedTags.value = selected ? selectedTags.value + '#backend' : selectedTags.value.replace('#backend', '');
}

const filterFrontend = (selected: boolean) => {
  selectedTags.value = selected ? selectedTags.value + '#frontend' : selectedTags.value.replace('#frontend', '');
}

const filterDesign = (selected: boolean) => {
  selectedTags.value = selected ? selectedTags.value + '#design' : selectedTags.value.replace('#design', '');
}

const filterMobile = (selected: boolean) => {
  selectedTags.value = selected ? selectedTags.value + '#mobile' : selectedTags.value.replace('#mobile', '');
}

const filterData = (selected: boolean) => {
  selectedTags.value = selected ? selectedTags.value + '#data' : selectedTags.value.replace('#data', '');
}

</script>